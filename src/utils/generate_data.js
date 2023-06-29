const personas = [
  { id: 3, nombre: 'Sonia', edad: 40, numeroMascotas: 3 },
  { id: 2, nombre: 'Valentina', edad: 30, numeroMascotas: 3 },
  { id: 7, nombre: 'Carlos', edad: 55, numeroMascotas: 4 },
  { id: 4, nombre: 'Laura', edad: 47, numeroMascotas: 4 },
  { id: 6, nombre: 'Andrés', edad: 66, numeroMascotas: 3 },
  { id: 1, nombre: 'Natalia', edad: 42, numeroMascotas: 2 },
  { id: 9, nombre: 'Saray', edad: 52, numeroMascotas: 4 },
  { id: 8, nombre: 'María', edad: 30, numeroMascotas: 2 },
  { id: 5, nombre: 'Camila', edad: 25, numeroMascotas: 3 },
  { id: 10, nombre: 'Valentina', edad: 30, numeroMascotas: 3 },
];

export const ESPECIES = ["Perro", "Gato", "Conejo", "Pájaro", "Tortuga"];
export const testimonios = [
  {
    id: 1,
    texto: "Muy bueno",
    nombre: "Natalia"
  },
  {
    id: 2,
    texto: "Excelente",
    nombre:"Julian"
  },
  {
    id: 3,
    texto: "Genial",
    nombre:"Lilibeth"
  }
]
export const ubicaciones = [
  {
    id:1,
    direccion:"Cra 1 #1-1",
    ciudad:"Bucaramanga"
  },
  {
    id:2,
    direccion:"Cra 30 #1-1",
    ciudad:"Medellin"
  },
  {
    id:3,
    direccion:"Cra 50 #1-1",
    ciudad:"Bogota"
  },
]
function generarDataPersona() {
  const dataPersona = [];
  for (let i = 0; i < personas.length; i++) {
    const persona = personas[i];
    const id = persona.id;
    const nombre = persona.nombre;
    const edad = persona.edad;
    const numeroMascotas = Math.floor(Math.random() * 6);
    dataPersona.push({ id, nombre, edad, numeroMascotas });
  }

  return dataPersona;
}

function generarDataMascota(cantidadMascotas) {
  const nombres = ["Danna", "Bambi", "Lucas", "Toby", "Simba", "Thor", "Max", "Linda", "Chispa", "Luna"];
  const sexos = ["Macho", "Hembra"];
  const dataPersona = generarDataPersona();

  const dataMascota = [];
  for (let i = 0; i < cantidadMascotas && i < dataPersona.length; i++) {
    const nombreMascota = nombres[Math.floor(Math.random() * nombres.length)];
    const especie = ESPECIES[Math.floor(Math.random() * ESPECIES.length)];
    const id_dueño = dataPersona[i].id;
    const sexo = sexos[Math.floor(Math.random() * sexos.length)];
    dataMascota.push({ nombreMascota, especie, id_dueño, sexo });
  }

  return dataMascota;
}

export const dataPersona = generarDataPersona();
export const dataMascota = generarDataMascota(10);
