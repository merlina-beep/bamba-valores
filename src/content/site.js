// Contenido de la sección Inversiones (mismo formato que la web de Bamba).
//
//   groups: [{ id, label, funds: [{ name, type, liquidity }] }]
//     - 'otros' muestra el listado de administradoras (OtrosFondos, lee content/fondos.js).
//     - Cualquier otro grupo aparece como pestaña solo si tiene fondos cargados
//       (por ej. agregá fondos a 'usd' y aparece "En dólares").
//   mep:  bloque verde oscuro. Si queda vacío, no se muestra.
//   note: bloque de Mercado de Capitales (acciones, bonos, cedears; lee content/mercado.js).
//
// Los textos y los 4 fondos en pesos salen de la web de Bamba: revisá que apliquen a Valores.

export const inversiones = {
  kicker: 'Inversiones',
  title: 'Los pesos y los dólares de la empresa, trabajando.',
  groups: [
    {
      id: 'ars',
      label: 'En pesos',
      funds: [
        { name: 'Fima Premium', type: 'Money market en pesos', liquidity: 'Rescate inmediato' },
        { name: 'Zofingen Factoring Pyme', type: 'Renta fija mediana', liquidity: 'Rescate 24hs' },
        { name: 'Axis Lecap', type: 'Renta fija corta · Lecap', liquidity: 'Rescate 48 h' },
        { name: 'Fondo Soja MatbaRofex', type: 'Agro · commodity', liquidity: '24 hs' },
      ],
    },
    { id: 'usd', label: 'En dólares', funds: [] },
    { id: 'otros', label: 'Otros fondos', funds: [] },
  ],
  mep: {
    kicker: 'Dólar MEP',
    title: 'Comprá dólares en blanco, desde la cuenta.',
    body: 'Dólar Mep y Contado con Liquidación (CCL) desde y hacia tu cuenta local o del exterior.',
  },
  note: {
    kicker: 'Mercado de capitales',
    title: 'Acciones, bonos y Cedears',
    body: 'Una alternativa para optimizar la caja de tu PyME, directamente desde tu cuenta BAMBA.',
  },
};
