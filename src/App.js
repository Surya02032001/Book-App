import logo from './logo.svg';
import './App.css';
import AddBook from './Components/AddBook';
import SearchBook from './Components/SearchBook';
import DeleteBook from './Components/DeleteBook';
import ViewBook from './Components/ViewBook';

function App() {
  return (
    <div className="App">
    <AddBook/>
    <SearchBook/>
    <DeleteBook/>
    <ViewBook/>
    </div>
  );
}

export default App;
