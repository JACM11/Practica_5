import { Router } from "express";

import {equipoController} from '../controllers'

const router = Router();

router.get('/',equipoController.getAllEquipo)

router.post('/',equipoController.create);

router.patch('/:id',equipoController.update);

router.delete('/:id',equipoController.delete);

export default router;
 