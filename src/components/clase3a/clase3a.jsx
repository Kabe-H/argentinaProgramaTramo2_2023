export default function Clase3a() {
  let nombre = "fideos";
  let SKU = 1;
  let descripcion = "fideos para comer";
  let precio = 500;
  let producto = {
    nombre: "Arroz",
    SKU: 1,
    descripcion: "arroz blanco",
    precio: 500,
  };
  return (
    <div>
      <p>{nombre}</p>
      <p>{SKU}</p>
      <p>{descripcion}</p>
      <p>{precio}</p>
      <p>{producto.nombre}</p>
      <p>{producto.SKU}</p>
      <p>{producto.descripcion}</p>
      <p>{producto.precio}</p>
    </div>
  );
}
