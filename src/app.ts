import express, { Express, Request, Response, NextFunction} from "express";
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'

// Import Middlewares
import errorHandler from "./middlewares/errorHandler";

//Import routers
import blogRouter from './routes/Blog/blogRoute'


const app: Express = express()

// Middlewarey
app.use(helmet())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/blog',blogRouter)

app.use(errorHandler)

export default app