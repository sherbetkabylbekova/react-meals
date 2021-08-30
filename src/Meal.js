import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams, useHistory } from "react-router-dom"

const Meal = () => {
    const [food, setFood] = useState({})
    const params = useParams()
    const history = useHistory()
    const strIngredients = Array(20).fill(0).reduce((acc, item, idx) => {
        if (food[`strIngredient${idx + 1}`]) {
            return [...acc, food[`strIngredient${idx + 1}`]]
        }
        return acc
    }, [])
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then(({data}) => setFood(data.meals[0]))
    },[params.id])
    return (
        <div className="container" key="id.meal">
            <div className="row">
                <div  className="col-6">
                    <img src={food.strMealThumb} alt="" width={550}/>
                    <h3>Name: {food.strMeal}</h3>
                    <h4>Category: {food.strCategory}</h4>
                    <p>Instructions: {food.strInstructions}</p>
                    <button className="home__btn" onClick={()=>history.goBack()}>Back</button>
                </div>
                <div className="ingr col-6 box">
                    {
                        strIngredients.map(el => (
                            <div>
                                <img src={`https://www.themealdb.com/images/ingredients/${el}.png`} alt="" width={100}/>
                                <h5 className="name__ingr">{el}</h5>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Meal;