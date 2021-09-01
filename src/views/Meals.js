import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Meals = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v2/1/randomselection.php`)
            .then(({data}) => setMeals(data.meals))
    }, [])

    return (
        <div className="container">
            <div className="row">
                {
                    meals.map(el => (
                        <div className="col-3" key={el.idMeal}>
                            <Link to={`/meal/${el.idMeal}`}>
                                <div className='box-meals'>
                                    <img src={el.strMealThumb} alt="" className='meals-img'/>
                                    <h4 className='my-2'>Name: {el.strMeal}</h4>
                                    <h5>Category: {el.strCategory}</h5>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}
export default Meals;