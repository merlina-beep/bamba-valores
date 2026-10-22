// Textos del hero, contacto y footer. En los textos, { resaltado: '...' } se muestra en verde claro.

export const hero = {
  titulo: ['Tu Puente del ', { resaltado: 'Campo' }, ' al Mercado de Capitales'],
  bajada: ['Potencia el valor de tu Producción con ', { resaltado: 'Bamba Valores' }],
  cta: 'Contactate con nosotros',
  ctaSecundario: 'Conocé más',
};

export const contacto = {
  titulo: 'Contactate con nosotros',
  texto: 'Escribinos y conversamos sobre cómo potenciar el valor de tu producción.',
  // Completar lo que corresponda. Lo que quede vacío no se muestra.
  email: 'info@bambavalores.ar',
  telefono: '',
  whatsapp: '"https://wa.me/5491166008935">', // 
};

// Footer legal. Los links de "enlaces" solo se muestran si tienen href (ruta a un PDF o URL).
// Ej: pasar los PDFs a public/docs/ y poner href: '/docs/tabla-de-aranceles.pdf'
export const footer = {
  nombre: 'Bamba Valores',
  enlaces: [
    { label: 'Tabla de Aranceles', href: '' },
    { label: 'Personal Idóneo', href: '' },
  ],
  legal:
    'Bamba Valores S.A. es Agente de Negociación con matrícula N° 1735 de la Comisión Nacional de Valores (CNV). Bamba Valores S.A. mantiene un convenio con Rosario Valores S.A., Agente de Liquidación y Compensación, quien realiza la liquidación de las operaciones negociadas por Bamba Valores S.A.',
  miembro: [
    'Miembro del Mercado Argentino de Valores (MAV) – Agente 447',
    'Miembro de Bolsas y Mercados Argentinos (BYMA) - Agente 821',
    'Miembro de Matba Rofex - Agente 1735',
  ],
  direccion: ['Arellano 152, San Antonio de Areco (2760)', 'Buenos Aires, Argentina'],
  cnv: { alt: 'Comisión Nacional de Valores (CNV)', href: '' }, // href opcional: link del logo
};
