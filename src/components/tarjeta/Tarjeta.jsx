import "./Tarjeta.css";

function Tarjeta({ imagen, nombre, tipo, descripcion }) {
  return (
    <div className="tarjeta">
      <img className="tarjeta__imagen" src={imagen} alt={nombre} />
      <h2 className="tarjeta__titulo">{nombre}</h2>
      <p className="tarjeta__tipo">{tipo}</p>
      <p className="tarjeta__descripcion">{descripcion}</p>
    </div>
  );
}

export default Tarjeta;
