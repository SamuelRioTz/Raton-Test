import express from 'express'
import consign from 'consign'

const app = express()

consign({
    cwd: __dirname
})
    .then('libs/middlewares.js')
    .then('routes')
    .then('libs/boot.js')
    .into(app)

