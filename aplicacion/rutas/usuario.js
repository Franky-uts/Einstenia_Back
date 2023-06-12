const express = require('express')

const controlador = require('../controlador/usuario')

const router = express.Router()

const path = 'usuario'

router.get(
    `/${path}`,
    controlador.getdata
)
router.get(
    `/${path}/:id`,
    controlador.getSingleData
)
router.get(
    `/${path}/search/:Nombre`,
    controlador.getdataSearch
)
router.post(
    `/${path}`,
    controlador.insertData
)
router.put(
    `/${path}/:id`,
    controlador.updateSingle
)
router.delete(
    `/${path}/:id`,
    controlador.deleteSingle
)
module.exports = router