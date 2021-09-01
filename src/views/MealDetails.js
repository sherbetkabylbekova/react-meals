import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams, useHistory, Link} from "react-router-dom"

const MealDetails = () => {
    const [food, setFood] = useState({})
    const [video, setVideo] = useState("")
    const [ingredients, setIngredients] = useState([])
    const params = useParams()
    const history = useHistory()
    const [readMore, setReadMore] = useState(false)

    useEffect(async () => {
        const {data: {meals}} = await axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
        const ingredientsList = Array(20).fill(0).reduce((acc, item, idx) => {
            const ingredients = meals[0][`strIngredient${idx + 1}`]
            return ingredients ? [...acc, ingredients] : acc
        }, [])
        setVideo(meals[0].strYoutube.slice(meals[0].strYoutube.indexOf("v=") + 2, meals[0].strYoutube.length))
        setFood(meals[0])
        setIngredients(ingredientsList)
    }, [params.id])
    const extraContent = <div>
        <p>{food.strInstructions}</p>
    </div>
    const linkName = readMore ? 'Read Less << ' : 'Instruction >> '

    return (
        <div className='bg'>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={food.strMealThumb} alt="" width={550}/>
                        <h3>Name: {food.strMeal}</h3>
                        <h4>Category: {food.strCategory}</h4>
                        <button className="home__btn my-3" onClick={() => history.goBack()}>Back</button>
                      <div>
                          <a className="read-more-link" onClick={() => {
                              setReadMore(!readMore)
                          }}><button className="search__btn">{linkName}</button></a>
                      </div>
                        {readMore && extraContent}
                    </div>
                    <div className="col-6">
                        <div className="box">
                            <div className="ingr">
                                <div className="row">
                                    {
                                        ingredients.map(el => (
                                            <div className="col-3" key={el.idMeal}>
                                                <Link to={`/ingredient/${el}`}>
                                                    <img src={`https://www.themealdb.com/images/ingredients/${el}.png`}
                                                         alt=""
                                                         width={100}/>
                                                    <h5 className="name__ingr">{el}</h5>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video}`}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MealDetails;