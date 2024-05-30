import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../paginas/Home';
import Sobre from '../paginas/Sobre';
import Sabores from '../paginas/Sabores';

export default function Rota(){
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Home/> }/>
	  <Route path='/paginaSobre' element={ <Sobre/> }/>
	  <Route path='/paginafinal' element={ <Sabores/> }/>
      </Routes>
    </BrowserRouter>
  )
}