// import 'dotenv/config'
require('dotenv').config()


export const config = 

{
    PORT :  process.env.PORT || 3000,
    JWT_SECRET : process.env.JWT_SECRET || "secretForToken"

}

// console.table(config)