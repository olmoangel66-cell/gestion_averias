const contenedor = document.getElementById("contenedor-averias");

averias.forEach(averia => {

  contenedor.innerHTML += `
    <div class="card">
      <h3>${averia.maquina}</h3>
      <p>${averia.mensaje}</p>
    </div>
  `;

});

//inicio datos de prueba
const averias = [
  {
    id: 1,
    maquina: "ENV-03",
    mensaje: "Error E104",
    estado: "Avisada",
    prioridad: "Alta"
  },
  {
    id: 2,
    maquina: "PAL-01",
    mensaje: "Sensor salida",
    estado: "En Proceso",
    prioridad: "Media"
  }
];

console.table(averias);
//fin datos de prueba