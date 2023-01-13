interface EnvInterface {
  port: number
  mongoUrl: string
}

const env: EnvInterface = {
  port: Number(process.env.PORT) ?? 3000,
  mongoUrl: process.env.MONGO_URL ?? 'mongodb://mongodb:27017/catalog'
}

export default env
