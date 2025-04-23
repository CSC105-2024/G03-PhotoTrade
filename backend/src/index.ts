import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import userRoutes from './routes/user.route.js'
import { HTTPException } from 'hono/http-exception'
import { type ErrorResponse } from './types/index.js'

const app = new Hono()

app.use('*', logger())
app.use('*', cors())

const routes = app
  .basePath('/api')
  .route('/users', userRoutes)


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

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

export default routes