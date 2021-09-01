import {BrowserRouter as Router, Route} from "react-router-dom"
import Meals from "./views/Meals";
import MealDetails from "./views/MealDetails";
import Browse from "./views/Browse";
import Header from "./components/Header";
import Ingredients from "./views/Ingredients";

const App = () => {

        return (
            <div className="App">
                <Router>
                    <Header />
                    <Route exact path="/"><Meals/></Route>
                    <Route path="/meal/:id"><MealDetails/></Route>
                    <Route path="/browse/:name"><Browse/></Route>
                    <Route path="/ingredient/:name"><Ingredients /></Route>
                </Router>
            </div>
        );
    };

export default App;
