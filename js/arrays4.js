var Descripcion = {
  nombre: "Sebastian",
  apellido: "Guevara",
  dni: 43269772,
  edad: 20,
  sexo: "Masculino",
};

function MiDescripcion(Descripcion) {
  let objectValues = Object.values(Descripcion);
  objectValues.forEach((item) => {
    console.log(item);
  });
}

MiDescripcion(Descripcion);
