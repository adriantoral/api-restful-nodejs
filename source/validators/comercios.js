const {body, param} = require('express-validator')
const {validate} = require('.')

// Validador para coger el id de la URL y el tipo de eliminación
// El tipo es solo para la ruta de eliminación, asi me evito duplicación de validadores
const get_id = [
    param('id', 'Type: String').exists().notEmpty().isString(),
    body('tipo', 'Type: String').notEmpty().isString().optional(),
    validate
]

// Validadores para la creación de comercios, todos los campos son obligatorios
const create_comercio = [
    body('nombre', 'Type: String').exists().notEmpty().isString(),
    body('cif', 'Type: String').exists().notEmpty().isString(),
    body('direccion', 'Type: String').exists().notEmpty().isString(),
    body('email', 'Type: String').exists().notEmpty().isString(),
    body('telefono', 'Type: String').exists().notEmpty().isString(),
    body('id_pagina', 'Type: Number').exists().notEmpty().isInt(),
    validate
]

// Validadores para la actualización de comercios, todos los campos son opcionales
const update_comercio = [
    param('id', 'Type: String').exists().notEmpty().isString(),
    body('nombre', 'Type: String').optional().isString().optional(),
    body('direccion', 'Type: String').optional().isString().optional(),
    body('email', 'Type: String').optional().isString().optional(),
    body('telefono', 'Type: String').optional().isString().optional(),
    body('id_pagina', 'Type: Number').optional().isInt().optional(),
    validate
]

module.exports = {
    get_id,
    create_comercio,
    update_comercio
}