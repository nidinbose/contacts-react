import { Router } from "express";
import * as request from './requestHandler.js'
const router=Router()

router.route('/add').post(request.addContact)
router.route('/get').get(request.getContact)

router.route('/getforedit/:id').get(request.getforedit)
router.route('/getdataforedit/:id').get(request.getdataforedit)

router.route('/update/:id').patch(request.updateContact)
router.route('/delete/:id').delete(request.deleteContact);

export default router;