import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import NewPage from './components/NewPage';
import NewComponentePage from './components/NewComponentePage';
import Mascotas from './components/Mascotas';
import Persona from './components/Persona';
import Especies from './components/Especies';
import Ubicacion from './components/Ubicacion';
import Testimonio from './components/Testimonio';

function App() {


  return (
    <>
      <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/about" element={<AboutPage/>}/>
        <Route exact path="/contact" element={<ContactPage/>}/>
        <Route exact path="/new" element={<NewPage/>}/>
        <Route exact path="/newPage" element={<NewComponentePage/>}/>
        <Route exact path="/especies" element={<Especies/>}/>
        <Route exact path="/mascota" element={<Mascotas/>}/>
        <Route exact path="/persona" element={<Persona/>}/>
        <Route exact path="/ubicaciones" element={<Ubicacion/>}/>
        <Route exact path="/testimonios" element={<Testimonio/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

// Implementar las funcionalidades para visualizar la informacion de: 
// - ubicaciones. 
// - testimonios.
// para esto, se debe generar dos pestañas nuevas, para visualizar el contenido.

// tecnical detail:
// 1) Crear las funciones en `generate_data` para popular la informacion. Ejmplo: 
//    generarUbicaciones () => {# your code is here}  definir la logica para crear informacion que se visualiza en los componente  
//    generarTestimonios () => {# your code is here}  definir la logica para crear informacion que se visualiza en los componente  
// 2) Crear los componentes con la respectivo render de informacion. (cambien los iconos, colores del card)
// 3) Definir la Ruta en APP js
// 4) Definir el enlace en el Nav 