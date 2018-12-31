import React from 'react';

const Recipes = (props) => (
    <div className="container">
     <div className="row">
       {props.recipes.map((recipe) => {
            return (
                <div key={recipe.title} className="col-md-4" style={{ marginBotton:"2rem" }}>
                    <div className="recipes__box">
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
                        <button className="recipe_buttons">View Recipe</button>
                    </div>
                </div>          
              );
        })}
    </div>    
</div>
);

export default Recipes;