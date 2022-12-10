const express = require("express")
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const data = require('./data.json')

app.get('/' , (req , res)=>{
    res.send('server running')
})

app.get('/users' , (req , res)=>{
    const oder = req.query.oder ;
    const result =  data.Sheet1.slice().sort((a, b) =>  oder === "dsc" ? b.id - a.id : a.id - b.id   )
    res.send(result)

})
// b.id - a.id

app.listen(port , ()=>{
    console.log('server running');
})
