import {BrowserRouter as Router,Route} from "react-router-dom"
import Meals from "./Meals";
import Meal from "./Meal";
import Browse from "./Browse";


const App = () => {
  return (
    <div className="App">
      <Router>
          <Route exact path="/"><Meals /></Route>
          <Route path="/meal/:id"><Meal /></Route>
          <Route path="/browse/:name"><Browse /></Route>

      </Router>

    </div>
  );
}

export default App;
