import Navbar from './Navbar'
import { ubicaciones } from '../utils/generate_data'


function Ubicacion () {
  const dataUbicacion = ubicaciones
  return (
    <>
      <Navbar />
      <h1 className='bajarTexto'>UBICACION</h1>
      <div className="container">
      {dataUbicacion.map(ubicacion => (        
          <div className="card" style={{ "--clr": "#F1C40F " }} key={ubicacion.id}>
          <div className="box">
            <div className="icon">
                
              <div className="iconBx"><ion-icon name="location-outline"></ion-icon></div>
            </div>
            <div className="content">
                <h3>ID: {ubicacion.id}</h3>
                <p>
                   Direccion: {ubicacion.direccion} <br/>
                </p>
                <p>
                   Ciudad: {ubicacion.ciudad} <br/>
                </p>
                <a href="#">Read More</a>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

  
export default Ubicacion