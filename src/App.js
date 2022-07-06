// import logo from './logo.svg';
import Todo from './components/Todo';
import './App.css';
import Sidenav from './components/Sidenav';
import Addtask from './components/Addtask';



function App() {
  return (
    <div className="App">
      <Todo/>
     
      <Sidenav/>
    </div>
  );
}

export default App;
