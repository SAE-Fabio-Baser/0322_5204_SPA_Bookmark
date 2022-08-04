import express from 'express'
import mongoose from 'mongoose'
import fs from 'fs'
import config from './config.js'
const { routesDirectory } = config
import setupSwagger from './setupSwagger.js'

const app = express()

app.use(express.json())

const routesFileNames = fs.readdirSync(routesDirectory)
routesFileNames.forEach(routeName => {
  import(routesDirectory + routeName).then(module => {
    module.default(app)
  })
})

setupSwagger(app)

function startExpress() {
  app.listen(config.port, () => {
    console.log('Server started on Port: ' + config.port)
  })
}

mongoose
  .connect(config.mongoConnUri)
  .then(startExpress)
  .catch(e => {
    console.error("Couldn't connect to MongoDB", e)
    process.exit(1)
  })