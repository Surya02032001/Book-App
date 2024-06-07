import logo from './logo.svg';
import './App.css';
import AddBook from './Components/AddBook';
import SearchBook from './Components/SearchBook';
import DeleteBook from './Components/DeleteBook';
import ViewBook from './Components/ViewBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<AddBook/>}/>
   <Route path='/SearchBook' element={<SearchBook/>}/>
   <Route path='/DeleteBook' element={<DeleteBook/>}/>
   <Route path='/viewBook' element={<ViewBook/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
