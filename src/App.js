import {BrowserRouter as Router,Route} from "react-router-dom"
import Meals from "./Meals";
import Meal from "./Meal";


const App = () => {
  return (
    <div className="App">
      <Router>
          <Route exact path="/"><Meals /></Route>
          <Route path="/meal/:id"><Meal /></Route>

      </Router>

    </div>
  );
}

export default App;
