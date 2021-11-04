import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useApiContext } from 'contexts/ApiContext';
import { addFavorites } from 'services/userServices';
import starIcon from 'assets/icons/star.svg';
import starIconFavorite from 'assets/icons/star-favorite.svg';
import shareIcon from 'assets/icons/share.svg';
import saveIcon from 'assets/icons/save.svg';
import Ingredients from './Ingredients';
import './DetailsPage.scss';

export default function DetailsPage() {
  const [recipe, setRecipe] = useState();
  const [favorite, setFavorite] = useState();
  let { id } = useParams();
  const { deleteOneRecipeNoDispatch, displayRecipeDetails } = useApiContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    displayRecipeDetails(id).then((data) => {
      setFavorite(data.isFavorite);
      setRecipe(data);
    });
  }, []);

  const handleClick = () => {
    favorite
      ? deleteOneRecipeNoDispatch(recipe)
      : addFavorites({ ...recipe, isFavorite: true });
    setFavorite(!favorite);
  };

  return (
    <section className="details">
      {recipe && (
        <>
          <header className="details-header">
            <h2 className="details-header__title">{recipe.name}</h2>
            <img
              className="details-picture"
              src={recipe.picture}
              alt={recipe.name}
            />
          </header>
          <div className="details-body">
            <ul className="details-menu">
              <li className="details-menu__item">
                <button onClick={handleClick}>
                  <img
                    className="details-menu__image"
                    src={favorite ? starIconFavorite : starIcon}
                    alt="favorite star icon"
                  />
                </button>
              </li>
              <li className="details-menu__item">
                <img
                  className="details-menu__image"
                  src={shareIcon}
                  alt="share icon"
                />
              </li>
              <li className="details-menu__item">
                <img
                  className="details-menu__image"
                  src={saveIcon}
                  alt="print icon"
                />
              </li>
            </ul>
            <div className="details-ingredients">
              <h3 className="details-ingredients__title">Ingredients</h3>
              <div className="details-ingredients-list">
                <Ingredients ingredients={recipe.ingredients} />
              </div>
            </div>
            <div className="details-recipe">
              <h3 className="details-recipe__title">Recipe</h3>
              <p className="details-recipe__text">{recipe.instructions}</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
