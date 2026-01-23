import Tarjeta from "./components/tarjeta/Tarjeta.jsx";
import GalicianEmpanada from "./assets/img/GalicianEmpanada.jpg";
import GalicianBroth from "./assets/img/GalicianBroth.jpg";
import HamHockWithTurnipGreens from "./assets/img/HamHockWithTurnipGreens.jpg";
import SantiagoCake from "./assets/img/SantiagoCake.jpg";
import GalicianStyleOctopus from "./assets/img/GalicianStyleOctopus.jpg";
import "./App.css";

function App() {
  const platos = [
    {
      nombre: "Pulpo a la gallega",
      tipo: "Plato principal",
      descripcion: "Pulpo cocido servido con patatas, aceite de oliva y pimentón.",
      imagen: GalicianStyleOctopus,
    },
    {
      nombre: "Empanada gallega",
      tipo: "Entrante",
      descripcion: "Masa rellena de atún, carne o marisco.",
      imagen: GalicianEmpanada,
    },
    {
      nombre: "Lacón con grelos",
      tipo: "Plato principal",
      descripcion: "Lacón cocido acompañado de grelos y patatas.",
      imagen: HamHockWithTurnipGreens,
    },
    {
      nombre: "Caldo gallego",
      tipo: "Sopa",
      descripcion: "Caldo tradicional con grelos, patatas y alubias.",
      imagen: GalicianBroth,
    },
    {
      nombre: "Tarta de Santiago",
      tipo: "Postre",
      descripcion: "Bizcocho de almendra típico de Galicia.",
      imagen: SantiagoCake,
    },
  ];

  return (
    <div className="app">
      <h1>Comida gallega</h1>

      <div className="contenedor-tarjetas">
        {platos.map((plato, index) => (
          <Tarjeta
            key={index}
            nombre={plato.nombre}
            tipo={plato.tipo}
            descripcion={plato.descripcion}
            imagen={plato.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default App;