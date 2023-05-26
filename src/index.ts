import express from 'express'
import HospitalRouter from './routes/datos_Hospital' 

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
     console.log('Puerto corriendo' + new Date().toLocaleDateString())
     res.send('API HOSPITAL')
})

app.use('/api/datos_Hospital',HospitalRouter)

app.listen(PORT, () => {
    console.log( `Servidor corriendo en el puerto ${PORT}`)
})
