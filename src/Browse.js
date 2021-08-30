import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const Browse = () => {
    const params = useParams()
    const [search,setSearch] = useState([])
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
            .then(({data}) => setSearch(data.meals))
    })
    return (
        <div className="container">
            <div className="row">
                {
                    search.map(el => (
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

export default Browse;