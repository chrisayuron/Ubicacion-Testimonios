import Navbar from './Navbar';
import { testimonios } from '../utils/generate_data'

// function Testimonio() {
   
//   }




const Testimonio = () => {
  const dataTestimonio = testimonios
  return (
    <>
      <Navbar />
      <h1 className='bajarTexto'>TESTIMONIOS</h1>
      <div className="container">
      {dataTestimonio.map(testimonio => (        
          <div className="card" style={{ "--clr": "#77F80C" }} key={testimonio.id}>
          <div className="box">
            <div className="icon">
              <div className="iconBx"><ion-icon name="chatbubble-ellipses-outline"></ion-icon></div>
            </div>
            <div className="content">
                <h3>ID: {testimonio.id}</h3>
                <p>
                   {testimonio.texto} <br/>
                </p>
                <p>
                   {testimonio.nombre} <br/>
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

  
export default Testimonio