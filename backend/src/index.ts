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

// async function main() {
//   const name = await prisma.category.createMany({
//     data: [
//       { name: 'Lifestyle' },
//       { name: 'Food & Drink' }
//     ],
//   })
//   console.log(name)
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

export default routes