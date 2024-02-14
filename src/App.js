import Card from "./components/Card";
import "./App.css"
import Task from "./components/Task";
function App() {


  return (
    <div className="container">
      <div className="cards">

        <div className="card_item">
          <Card status="In progress" />
        </div>
        <div className="card_item">
          <Card status="In progress" />
        </div>
        <div className="card_item">
          <Card status="Done" />
        </div>
      </div>


    </div>




  );
}

export default App;
