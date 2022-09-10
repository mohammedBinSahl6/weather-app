if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const API_KEY = process.env.API_KEY
const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json())
app.use(express.static('public'))

app.post('/weather' , (req , res)=>{
   const url = `http://api.weatherstack.com/forecast/${API_KEY}/${req.body.latitude},${req.body.longitude}?units=auto`
    axios({
        url : url,
        responseType : 'json'
    }).then(res.json(data => data.data.current))
})

app.listen(3000,()=>{
    console.log('server started !')
})