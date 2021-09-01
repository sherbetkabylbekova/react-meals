import React, {useEffect, useState} from 'react';
import {Link, useHistory, useParams} from "react-router-dom";
import axios from "axios";

const Ingredients = () => {
    const [dishes, setDishes] = useState([])
    const params = useParams()
    const history = useHistory()
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.name}`)
            .then(({data}) => setDishes(data.meals))
    }, [params.name])
    const back = () => {
        history.push("/")
    }
    return (
        <div className="container">
            <div className='row'>
                {
                    dishes.map(el => (
                            <div className="col-3">
                                <Link to={`/meal/${el.idMeal}`}>
                                    <img src={el.strMealThumb} width={350} alt=""/>
                                    <h3>{el.strMeal}</h3>
                                </Link>
                            </div>
                        )
                    )
                }
            </div>
            <button className="search__btn" onClick={back}>BACK</button>
        </div>
    );
};

export default Ingredients;