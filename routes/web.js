import express from 'express';
import StudentController from '../controllers/studentController.js';
const router = express.Router();


router.get('/student',StudentController.getAllDoc);
router.post('/student',StudentController.createDoc);
router.get('/edit/:id',StudentController.editDoc);
router.post('/update/:id',StudentController.updateDocById);
router.post('/delete/:id',StudentController.deleteDocById);
export default router;