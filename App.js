import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import Angular from './images/angular.jpg';
import bootstrap from './images/bootstrap5.png';
import ccsharp from './images/ccsharp.png';
import kompleweb from './images/kompleweb.jpg';
import { Course } from './course';

function App() {
  return (
    <div>
      <div className="container-fluid bg-primary p-5">
          <h2 className="text-center">Kurslar</h2>
      </div>

      <div className="container">
        <div className="row mt-3">
          <div className="col-3">
           <Course img={Angular} title="Angular" pgr="lSome quick example text to build on the card title and make up the bulk of the card's content." />
          </div>
          <div className="col-3">
          <Course img={bootstrap} title="bootstrap" pgr="lSome quick example text to build on the card title and make up the bulk of the card's content."/>
          </div>
          <div className="col-3">
          <Course img={ccsharp} title="ccsharp" pgr="lSome quick example text to build on the card title and make up the bulk of the card's content."/>
          </div>
          <div className="col-3">
          <Course img={kompleweb} title="kompleweb" pgr="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"/>
          </div>

        </div>
        
      </div>
    

    </div>
  
  );
}

export default App;
