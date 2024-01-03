const express = require('express');
const router = express.Router();
const EmployessController = require('../controllers/employees.controller');

router.get('/employees', EmployessController.getAll);
router.get('/employees/random', EmployessController.getRandom);
router.get('/employees/:id', EmployessController.getById);
router.post('/employees', EmployessController.post);
router.put('/employees/:id', EmployessController.put);
router.delete('/employees/:id', EmployessController.delete);
module.exports = router;
