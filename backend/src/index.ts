import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import userRoutes from './routes/user.routes.js'

const app = new Hono()

app.use('*', logger())
app.use('*', cors())

app.route('/api/users', userRoutes)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})