import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Meals = () => {
    const [meals, setMeals] = useState([])
    const [search, setSearch] = useState("")
    const handleSearch = () => {


    }
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v2/1/randomselection.php`)
            .then(({data}) => setMeals(data.meals))
    }, [])

    return (
        <div className="container">
            <h1 className="menu__title">Menu with dishes</h1>
            <div className="menu__search">
                <input className="input__search" type="text" onChange={(e) => setSearch(e.target.value)}/>
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="row">
                {
                    meals.map(el => (
                        <div className="col-3">
                            <Link to={`/meal/${el.idMeal}`}>

                                <img src={el.strMealThumb} alt="" width={300}/>
                                <h4>Name: {el.strMeal}</h4>
                                <h5>Category: {el.strCategory}</h5>
                            </Link>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default Meals;