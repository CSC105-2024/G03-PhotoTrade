import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { HTTPException } from 'hono/http-exception'
import { type ErrorResponse } from './types/index.ts'
import { PrismaClient } from '../generated/prisma/index.js'
import userRoutes from './routes/user.route.ts'
import rankRoutes from './routes/rank.route.ts'
import tradeRoutes from './routes/trade.route.ts'
import photoRoutes from './routes/photo.route.ts'
import categoryRoutes from './routes/category.route.ts'
import collectionRoute from './routes/collection.route.ts'
export const prisma = new PrismaClient()
const app = new Hono()

app.use('*', logger())
app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true
  })
)

const routes = app
  .basePath('/api/v1')
  .route('/user', userRoutes)
  .route('/rank', rankRoutes)
  .route('/trade', tradeRoutes)
  .route('/photo', photoRoutes)
  .route('/category', categoryRoutes)
  .route('/collection', collectionRoute)


app.onError((err, c) => {
  if (err instanceof HTTPException) {
    const errResponse = err.res ??
      c.json<ErrorResponse>(
        {
          success: false,
          error: err.message,
          isFormError:
            err.cause && typeof err.cause === "object" && "form" in err.cause
              ? err.cause.form === true
              : false,
        },
        err.status,
      )
    console.log(err);
    return errResponse
  }

  return c.json<ErrorResponse>(
    {
      success: false,
      error:
        process.env.NODE_ENV === "production"
          ? "Interal Server Error"
          : (err.stack ?? err.message),
    },
    500,
  )
})

async function main() {
  const existingCount = await prisma.category.count();
  if (existingCount > 0) {
    return;
  }
  await prisma.category.createMany({
    data: [
      {id: 1,  name: 'Lifestyle' , category_url: 'https://i.pinimg.com/736x/7a/00/64/7a00640d4278ad40d5ea6baa162d0e9f.jpg'},
      {id: 2, name: 'Food & Drink' , category_url: 'https://i.pinimg.com/736x/c8/11/e1/c811e16e296b7830943b90943a3d5c51.jpg'},
      {id: 3, name: 'Business & Work' , category_url: 'https://i.pinimg.com/736x/6c/24/f4/6c24f4c7a181d856854a05da1fddefd0.jpg'},
      {id: 4, name: 'Nature & Landscapes' , category_url: 'https://i.pinimg.com/736x/f4/04/71/f4047136eed63d88be00b61a80c00502.jpg'},
      {id: 5, name: 'People & Portraits' , category_url: 'https://i.pinimg.com/736x/d9/e3/ce/d9e3cef18efac6015569c9a956131e62.jpg'},
      {id: 6, name: 'Travel & Transportation' , category_url: 'https://i.pinimg.com/736x/4e/fc/13/4efc13151754eb5bf64ee42c00895124.jpg'},
      {id: 7, name: 'Animals & Pets' , category_url: 'https://i.pinimg.com/736x/f7/41/f3/f741f382f934946ca962ca0dbb354371.jpg'},
      {id: 8, name: 'Abstract & Backgrounds' , category_url: 'https://i.pinimg.com/736x/e7/3e/6e/e73e6ea9dd6d40706e90b49ef2feb203.jpg'},
      {id: 9, name: 'Seasonal Themes' , category_url: 'https://i.pinimg.com/736x/9b/ab/f2/9babf26da1d9c07fa9852ab305305be7.jpg'},
      {id: 10, name: 'Sports & Fitness' , category_url: 'https://i.pinimg.com/736x/12/c7/4a/12c74a73f3511e41d0c63695bfe056d5.jpg'},
    ],
  });
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

export default routes