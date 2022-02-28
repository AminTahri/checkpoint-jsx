import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Abonne from './components/Abonne';
import Main from './components/Main';
import NavBareee from './components/NavBareee';



function App() {
  return (
    <div className="App">
      <NavBareee/>
      
      <footer>
        <hr />
      </footer>
      
      <div className="row">
      <div className="col-8"><Main/> </div>
       <div className="col-4"><Abonne/></div>

       </div>
     
    </div>
  );
}

export default App;
