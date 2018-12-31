import React from 'react';


// link is like an anchor tag
import { Link } from "react-router-dom";

const Recipes = (props) => (
    <div className="container">
     <div className="row">
     {/* mapping through the whole recipe API array */}
       {props.recipes.map((recipe) => {
            return (
                <div key={recipe.title} className="col-md-4" style={{ marginBotton:"2rem" }}>
                    <div className="recipes__box" style={{ paddingBotton:"2rem" }}>
                        <img
                            className="recipe__box-img"
                            src={recipe.image_url}
                            alt={recipe.title} />
                          <div className="recipe__text">
                          <h5 className="recipes__title">
                            {/* used when title is too large and makes boxes weird heights */}
                              {/* for if and else statement below .. ? stands for then.. : stands for else */}
                              { recipe.title.length < 20 ? `${recipe.title}` 
                                // second number in substring is for trimming
                                : `${recipe.title.substring(0, 25)}...` }
                          </h5>
                          <p className="recipes__subtitle">Publisher: <span>
                            { recipe.publisher }
                            </span></p>
                        </div>
                        <button className="recipe_buttons">
                        {/* recipe refers to the whole API array */}
                        <Link to={{ pathname: `/recipe/${recipe.recipe_id}`, state: { recipe: recipe.title }
                    }}>View Recipe</Link>
                        </button>
                    </div>
                </div>          
              );
        })}
    </div>    
</div>
);

export default Recipes;