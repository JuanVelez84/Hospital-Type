import  express  from "express"

const router = express.Router()

router.get('/', (_req, res) => {
    res.send('Ingreso al Hospital')
})

router.post('/', (_req, res) => {
    res.send('Datos Hospitalarios guardados')
})

export default router