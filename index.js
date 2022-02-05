// config inicial 
const express = require('express')
const mongoose = require('mongoose')
const app = express()



// forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

// rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)


// rota inicial / endpoint
app.get('/', (req, res) => {
    // mostrar req

    res.json({ message: 'OI Express!' })

    // IP coringa 0.0.0.0/0
    // cervejadementa123

    // mongodb+srv://caiocamargo:cervejadementa123@apicluster.e4y15.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

})

// entregar uma porta 
const DB_USER = 'caiocamargo'
const DB_PASSWORD = encodeURIComponent('cervejadementa123')

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.e4y15.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)

.then(() => {
    console.log("Conectamos ao MongoDB!")
    app.listen(3000)
})
.catch((err) => console.log(err))

