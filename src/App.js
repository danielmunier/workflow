import Card from "./components/Card";
import "./App.css"
import Task from "./components/Task";
function App() {


  return (
    <div className="App">
      <Card status="To do"/>
      <Card status="In progress"/>
      <Card status="Done"/>
 
  
    </div>
  );
}

export default App;
