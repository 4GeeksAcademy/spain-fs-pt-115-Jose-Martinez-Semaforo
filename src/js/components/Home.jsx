import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import Semaforo from "./Semaforo.jsx"; 
import Container from './Container.jsx';
const Home = () => {
    return (
        
   
    <div className="text-center"> 
      <Semaforo />
      <Container>
        <h2>Semáforo Interactivo</h2>
        <p>
          Este proyecto demuestra un semáforo funcional construido con React.
          Puedes controlar las luces, añadir dinámicamente el color púrpura y
          generar tonos aleatorios. Es un extra que me ha pedido Alcides. 
          No he querido meterle glow al color porque queria que se note el randomize.
        </p>
      </Container>
    </div>
  );
}

export default Home;
