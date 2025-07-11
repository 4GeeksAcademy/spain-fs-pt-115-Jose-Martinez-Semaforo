import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import Semaforo from "./Semaforo.jsx"; // Asegúrate de que el archivo se llame exactamente "Semaforo.jsx"

const Home = () => {
    return (
        <div className="text-center">
            {/* Semáforo */}
            <div className="d-flex justify-content-center my-5">
                <Semaforo />
            </div>

            <h1 className="text-center mt-5">Hello Rigo!</h1>
            <p>
                <img src={rigoImage} />
            </p>
            <a href="#" className="btn btn-success">
                If you see this green button... bootstrap is working...
            </a>
            <p>
                Made by{" "}
                <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!
            </p>
        </div>
    );
};

export default Home;
