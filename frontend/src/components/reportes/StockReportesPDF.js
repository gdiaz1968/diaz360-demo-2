import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generarReporte = () => {
  const docDefinition = {
    content: [
      { text: 'Reporte de Stock', style: 'header' },
      {
        table: {
          body: [
            ['#', 'Producto', 'Descripción', 'Stock'],
            [1, 'Producto 1', 'Descripción producto 1', 100],
            [2, 'Producto 2', 'Descripción producto 2', 200],
            [3, 'Producto 3', 'Descripción producto 3', 150],
          ]
        }
      }
    ],
    styles: {
      header: { fontSize: 18, bold: true, alignment: 'center' }
    }
  };

  pdfMake.createPdf(docDefinition).download('reporte_stock.pdf');
};

generarReporte();
