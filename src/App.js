import "./App.css";
import AddNewTodo from "./Components/AddNewTodo";
import Calender from "./Components/Calender";
import EditTodo from "./Components/EditTodo";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Projects from "./Components/Projects";
import Todos from "./Components/Todos";
import User from "./Components/User";

function App() {
  return (
    <div className="App">
      <Header>
        <User />
        <AddNewTodo />
        <Calender />
        <Projects />
      </Header>
      <Main>
        <Todos />
        <EditTodo />
      </Main>
    </div>
  );
}

export default App;
