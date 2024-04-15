import React, { useState } from "react";

import "./App.css";

import FiltroVistas from "./components/Elementos/FiltroVistas";
import SampleView from "./components/Elementos/SampleView";
import Usuarios from "./components/Elementos/Usuarios";
import Peliculas from "./components/Elementos/Peliculas";
import Rentas from "./components/Elementos/Rentas";
  
  const DUMMY_USERS = [
    {
      nombre: "Pancho",
      apellido: "Sanchez",
      genero: "Masculino",
      edad: 19
    },
    {
      nombre: "Laura",
      apellido: "Torres",
      genero: "Femenino",
      edad: 24
    },
    {
      nombre: "Paco",
      apellido: "Perez",
      genero: "Masculino",
      edad: 16
    }
  ]

  const DUMMY_MOVIES = [
    {
      nombre: "Silent Hill",
      genero: "Terror",
      anio: 2001,
      director: "no se .-.",
      inventario: 6
    },
    {
      nombre: "El laberinto del Fauno",
      genero: "Drama",
      anio: 2003,
      director: "Guillermo del Toro",
      inventario: 2
    },
    {
      nombre: "Into the Spiderverse",
      genero: "Acción",
      anio: 2018,
      director: "-------",
      inventario: 8
    }
  ]

  const DUMMY_RENTALS = [
    {
      pelicula: "Into the Spiderverse",
      usuario: "Laura Torres",
      fecha: '2023-04-15',
      dias: 21
    },
    {
      pelicula: "El laberinto del Fauno",
      usuario: "Paco Pérez",
      fecha: '2024-06-12',
      dias: 9
    }
  ]



  const App = () => {

    const [peliculas, setPeliculas] = useState(DUMMY_MOVIES);

    const [usuarios, setUsuarios] = useState(DUMMY_USERS);

    const [rentas, setRentas] = useState(DUMMY_RENTALS);

    const [selectedView, setSelectedView] = useState('SampleView');

    const filterChangeHandler = (selectedView) => {
      setSelectedView(selectedView);
    };




    return(
      <div className="App">
        <h1>Servicio de Renta de Peliculas</h1>
        <FiltroVistas 
          selected={selectedView}
          onChangeFilter={filterChangeHandler}
        />
        {selectedView == "SampleView" && <SampleView/>}
        {selectedView == "Usuarios" && <Usuarios usuarios={DUMMY_USERS}/>}
        {selectedView == "Peliculas" && <Peliculas peliculas={DUMMY_MOVIES}/>}
        {selectedView == "Rentas" && <Rentas rentas={DUMMY_RENTALS}/>}
      </div>
    );

  };

  //return (
  //  <div className="App">
  //    <NuevoAlumno onAgregarAlumno={agregarAlumno} />
  //    <Alumnos alumnos={alumnos} />
  //  </div>
  //);


export default App;
