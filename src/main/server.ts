import 'module-alias/register'
import dbConnection from '@infrastructure/db/mongodb/helpers/db-connection'
import env from '@main/config/env'
import setupApp from '@main/config/app'

dbConnection.connect(env.mongoUrl).then(() => {
  console.log('MongoDB Connected')
  const app = setupApp()
  app.listen(env.port, () => { console.log(`Server running on port ${env.port}`) })
}).catch(console.error)
