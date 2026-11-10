// controllers/stockController.js
const Producto = require('../models/productModels');

// Obtener reporte de stock
exports.obtenerReporteStock = async (req, res) => {
  try {
    const productos = await Producto.find();  // Obtiene todos los productos

    res.status(200).json(productos);  // Devuelve el listado de productos
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener reporte de stock', error: error.message });
  }
};
