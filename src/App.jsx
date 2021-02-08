import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/navBar';
import ItemListContainer from './container/ItemListContainer';
import ItemCount from './components/ItemCount';


const App = () => {
  return (
    <>

      <NavbarComponent/>
      <ItemListContainer product="Curso de Literatura" productDescription="Curso para profesores de Literatura" price="$15.000" />
      <ItemCount/>

    </>
  );
}

export default App;
