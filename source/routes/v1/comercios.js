const express = require("express")
const comercios_validators = require("../../validators/comercios")
const comercios_controllers = require("../../controllers/comercios")

const router = express.Router()

router.get("/", comercios_controllers.listar_comercios)
router.get("/:id", comercios_validators.get_id, comercios_controllers.listar_comercio)
router.post("/", comercios_validators.create_comercio, comercios_controllers.crear_comercio)
router.put("/:id", comercios_validators.update_comercio, comercios_controllers.editar_comercio)
router.delete("/:id", comercios_validators.get_id, comercios_controllers.eliminar_comercio)

module.exports = router