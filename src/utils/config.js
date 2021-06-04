import dotenv from 'dotenv'

dotenv.config()

export const tokenSecret = process.env.TOKEN_SECRET || 'wasaskikabubka'
export const dbUrl = process.env.DB_URL

export const port = process.env.port || 3030