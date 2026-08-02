const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType, BorderStyle, ShadingType, HeadingLevel, Tab, TabStopType, TabStopPosition, ImageRun, VerticalAlign, PageBreak } = require('docx');
const fs = require('fs');

// A4 in DXA (1 inch = 1440 DXA, 1 mm = 56.7 DXA)
const A4_W = 11906; // 210mm
const A4_H = 16838; // 297mm
const MARGIN = 510; // ~9mm margins

const GOLD = 'B8953A';
const DARK = '1A1A1A';
const GRAY = '666666';
const LIGHT_GRAY = 'F7F6F3';
const WHITE = 'FFFFFF';

const doc = new Document({
  sections: [{
    properties: {
      page: {
        size: { width: A4_W, height: A4_H },
        margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN }
      }
    },
    children: [
      // ===== HEADER =====
      new Paragraph({
        spacing: { after: 80 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: DARK } },
        children: [
          new TextRun({ text: 'HERNANDO CARRILLO SANCHEZ', bold: true, size: 48, font: 'Segoe UI', color: DARK }),
        ]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: 'Arquitecto Fundador  |  CARQUIDEC  |  Barcelona, Espana', size: 18, font: 'Segoe UI', color: GRAY }),
        ]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ text: '+34 612 484 854  |  carqdisantos@gmail.com  |  carquidec.com  |  Colombia - Espana - Italia', size: 16, font: 'Segoe UI', color: GRAY }),
        ]
      }),

      // ===== PERFIL =====
      sectionTitle('PERFIL'),
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ text: 'Arquitecto por la Universidad Autonoma del Caribe (Barranquilla, 1988) y especialista en arquitectura bioclimatica. Mas de ', size: 20, font: 'Segoe UI', color: DARK }),
          new TextRun({ text: '38 anos de trayectoria', bold: true, size: 20, font: 'Segoe UI', color: DARK }),
          new TextRun({ text: ' liderando proyectos residenciales de lujo, hoteleros y comerciales en Colombia, Espana e Italia. Fundador de CARQUIDEC, estudio especializado en diseno parametrico, bioclimatico e IA aplicada a arquitectura.', size: 20, font: 'Segoe UI', color: DARK }),
        ]
      }),

      // ===== HITOS =====
      sectionTitle('HITOS PROFESIONALES'),
      ...([
        ['38+ anos de experiencia', '60+ proyectos ejecutados', '3 mercados internacionales'],
        ['100% satisfaccion del cliente', 'Fundacion CARQUIDEC 2020', '4 premios internacionales']
      ].map(row => new Paragraph({
        spacing: { after: 40 },
        children: row.flatMap((item, i) => [
          new TextRun({ text: item, bold: true, size: 20, font: 'Segoe UI', color: DARK }),
          new TextRun({ text: i < row.length - 1 ? '     |     ' : '', size: 20, font: 'Segoe UI', color: GRAY }),
        ])
      }))),
      new Paragraph({ spacing: { after: 150 }, children: [] }),

      // ===== TRAYECTORIA =====
      sectionTitle('TRAYECTORIA PROFESIONAL'),
      
      // Job 1
      new Paragraph({
        spacing: { after: 20 },
        children: [
          new TextRun({ text: 'FUNDADOR  |  DIRECTOR CREATIVO', bold: true, size: 20, font: 'Segoe UI', color: DARK }),
        ]
      }),
      new Paragraph({
        spacing: { after: 20 },
        children: [
          new TextRun({ text: 'CARQUIDEC - Arquitectura & Decoracion  |  2020 - Presente  |  Barcelona, Espana', size: 16, font: 'Segoe UI', color: GOLD }),
        ]
      }),
      new Paragraph({
        spacing: { after: 30 },
        children: [
          new TextRun({ text: 'Direccion integral de proyectos residenciales de lujo, hoteleros y comerciales en Colombia, Espana e Italia. Diseno parametrico, bioclimatico e IA aplicada a arquitectura.', size: 18, font: 'Segoe UI', color: DARK }),
        ]
      }),
      tagLine(['Parametrico', 'Bioclimatico', 'Lujo', 'Residencial', 'Hotelero']),
      new Paragraph({ spacing: { after: 100 }, children: [] }),

      // Job 2
      new Paragraph({
        spacing: { after: 20 },
        children: [
          new TextRun({ text: 'ARQUITECTO SENIOR  |  DIRECTOR INTERNACIONAL', bold: true, size: 20, font: 'Segoe UI', color: DARK }),
        ]
      }),
      new Paragraph({
        spacing: { after: 20 },
        children: [
          new TextRun({ text: 'Proyectos Independientes  |  Espana, Italia, Colombia  |  2005 - 2020', size: 16, font: 'Segoe UI', color: GOLD }),
        ]
      }),
      new Paragraph({
        spacing: { after: 30 },
        children: [
          new TextRun({ text: 'Expansion internacional fusionando arquitectura tropical colombiana con diseno mediterraneo. Integracion BIM y gemelos digitales.', size: 18, font: 'Segoe UI', color: DARK }),
        ]
      }),
      tagLine(['Internacional', 'Hotelero', 'BIM', 'Mediterraneo']),
      new Paragraph({ spacing: { after: 100 }, children: [] }),

      // Job 3
      new Paragraph({
        spacing: { after: 20 },
        children: [
          new TextRun({ text: 'ARQUITECTO  |  PAISAJISTA', bold: true, size: 20, font: 'Segoe UI', color: DARK }),
        ]
      }),
      new Paragraph({
        spacing: { after: 20 },
        children: [
          new TextRun({ text: 'Proyectos Residenciales  |  Colombia  |  1995 - 2005', size: 16, font: 'Segoe UI', color: GOLD }),
        ]
      }),
      new Paragraph({
        spacing: { after: 30 },
        children: [
          new TextRun({ text: 'Formacion en Japon, Italia y Costa Rica. Paisajismo como arte independiente. Integracion agua-piedra-vegetacion.', size: 18, font: 'Segoe UI', color: DARK }),
        ]
      }),
      tagLine(['Paisajismo', 'Bioclimatismo', 'Residencial']),
      new Paragraph({ spacing: { after: 150 }, children: [] }),

      // ===== PROYECTOS =====
      sectionTitle('PROYECTOS DESTACADOS'),
      ...projectRow('2024', 'Corozal, Colombia', 'Complejo Residencial Multifamiliar', '8,500 m2 | 50+ unidades', 'Diseno parametrico bioclimatico. 40% ahorro energetico.'),
      ...projectRow('2022', 'Monteria, Colombia', 'Villa Contemporanea de Lujo', '650 m2 + 1,200 m2 jardin', 'Villa bioclimatica con estrategias pasivas y materiales nobles.'),
      ...projectRow('2019', 'Valencia, Espana', 'Villa Mediterranea de Verano', '420 m2 | Alquiler vacacional', 'Reinterpretacion contemporanea mediterranea con patios ajardinados.'),
      ...projectRow('2018', 'Monteria, Colombia', 'Remodelacion Hotel Boutique', '1,800 m2 | 4 estrellas', 'Renovacion integral con iluminacion escenografica y mobiliario ergonomico.'),
      ...projectRow('2017', 'Barranquilla', 'Cine Independiente', '850 m2 | LEED Platinum', 'Acustica parametrica, proyeccion 4K Dolby Vision.'),
      new Paragraph({ spacing: { after: 150 }, children: [] }),

      // ===== PREMIOS =====
      sectionTitle('PREMIO Y RECONOCIMIENTOS'),
      ...([
        ['2024 - Finalista Premio Latinoamericano de Arquitectura Sostenible'],
        ['2022 - Mencion de Honor, Bienal de Arquitectura de Colombia'],
        ['2019 - Premio FAD de Arquitectura Internacional'],
        ['2017 - Certificacion LEED Platinum']
      ].map(([text]) => new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({ text: '  ' + text, size: 18, font: 'Segoe UI', color: DARK }),
        ]
      }))),
      new Paragraph({ spacing: { after: 150 }, children: [] }),

      // ===== EDUCACION =====
      sectionTitle('EDUCACION'),
      eduRow('Grado en Arquitectura', 'UAC, Barranquilla', '1982-1988'),
      eduRow('Especializacion en Arquitectura Bioclimatica', 'Convention Center, Monteria', '2005'),
      eduRow('Certificacion Passivhaus Designer', 'Passivhaus Institut, Darmstadt', '2018'),
      eduRow('Master en Diseno Parametrico', 'IAAC, Barcelona', '2020'),
      new Paragraph({ spacing: { after: 150 }, children: [] }),

      // ===== COMPETENCIAS =====
      sectionTitle('COMPETENCIAS'),
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({ text: 'Diseno: ', bold: true, size: 18, font: 'Segoe UI', color: DARK }),
          new TextRun({ text: 'AutoCAD, Revit/BIM, Rhino/Grasshopper, SketchUp', size: 18, font: 'Segoe UI', color: DARK }),
        ]
      }),
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({ text: 'Visualizacion: ', bold: true, size: 18, font: 'Segoe UI', color: DARK }),
          new TextRun({ text: 'V-Ray, Corona, Lumion, Enscape, Adobe Suite', size: 18, font: 'Segoe UI', color: DARK }),
        ]
      }),
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({ text: 'Analisis: ', bold: true, size: 18, font: 'Segoe UI', color: DARK }),
          new TextRun({ text: 'EnergyPlus, Python/IA, Datos parametricos', size: 18, font: 'Segoe UI', color: DARK }),
        ]
      }),
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({ text: 'Idiomas: ', bold: true, size: 18, font: 'Segoe UI', color: DARK }),
          new TextRun({ text: 'Espanol (nativo), Ingles (profesional), Italiano (conversacional)', size: 18, font: 'Segoe UI', color: DARK }),
        ]
      }),
    ]
  }]
});

function sectionTitle(text) {
  return new Paragraph({
    spacing: { before: 60, after: 80 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: GOLD } },
    children: [
      new TextRun({ text, bold: true, size: 20, font: 'Segoe UI', color: DARK, allCaps: true }),
    ]
  });
}

function tagLine(tags) {
  return new Paragraph({
    spacing: { after: 20 },
    children: [
      new TextRun({ text: tags.join('  |  '), size: 14, font: 'Segoe UI', color: GRAY }),
    ]
  });
}

function projectRow(year, location, name, specs, desc) {
  return [
    new Paragraph({
      spacing: { after: 10 },
      children: [
        new TextRun({ text: year + '  ', bold: true, size: 22, font: 'Segoe UI', color: GOLD }),
        new TextRun({ text: location.toUpperCase(), bold: true, size: 14, font: 'Segoe UI', color: GRAY }),
      ]
    }),
    new Paragraph({
      spacing: { after: 10 },
      children: [
        new TextRun({ text: name, bold: true, size: 20, font: 'Segoe UI', color: DARK }),
      ]
    }),
    new Paragraph({
      spacing: { after: 10 },
      children: [
        new TextRun({ text: specs, size: 14, font: 'Segoe UI', color: GRAY }),
      ]
    }),
    new Paragraph({
      spacing: { after: 60 },
      children: [
        new TextRun({ text: desc, size: 17, font: 'Segoe UI', color: DARK }),
      ]
    }),
  ];
}

function eduRow(title, school, year) {
  return new Paragraph({
    spacing: { after: 30 },
    children: [
      new TextRun({ text: title, bold: true, size: 18, font: 'Segoe UI', color: DARK }),
      new TextRun({ text: `  |  ${school}  |  ${year}`, size: 16, font: 'Segoe UI', color: GRAY }),
    ]
  });
}

async function main() {
  const buffer = await Packer.toBuffer(doc);
  const outPath = 'C:\\Users\\USER\\Downloads\\mesmo\\curriculum-CARQUIDEC-WORD.docx';
  fs.writeFileSync(outPath, buffer);
  console.log('DOCX creado:', outPath);
  console.log('Tamano:', (buffer.length / 1024).toFixed(0), 'KB');
}

main().catch(console.error);
