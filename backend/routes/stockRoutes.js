// routes/stockRoutes.js
const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

// Obtener reporte de stock
router.get('/stock-report', stockController.obtenerReporteStock);

module.exports = router;
