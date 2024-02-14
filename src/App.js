import Card from "./components/Card";
import "./App.css"
import "./style/Stars.sass"
import Task from "./components/Task";
function App() {


  return (
    <div className="container">
            #stars
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
    

        <div className="cards">

          <div className="card_item">
            <Card status="To do" />
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
