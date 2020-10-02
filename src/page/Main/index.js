import React, { useState, useCallback } from 'react';
import api from '../../services/api';

import { Container, Title, SubTitle, GetRecipeButton, Interactive, Content, MealTitleSection, MealSection, IngredientsSection, VideoSection } from './style';
import { FaHamburger } from 'react-icons/fa'

function Main() {
  const [initialState, setInitialState] = useState(true)
  const [recipe, setRecipe] = useState({})
  const [ingredients, setIngredients] = useState([])
  const [measures, setMeasures] = useState([])

  const getRecipe = useCallback(async () => {
    const response = await api.get('')
    setRecipe(response.data.meals[0])
    setInitialState(false);

    const ingr = []
    const meas = []

    Object.keys(response.data.meals[0]).forEach(key => {
      if(key.startsWith('strIngredient')) ingr.push(response.data.meals[0][key])
      if(key.startsWith('strMeasure')) meas.push(response.data.meals[0][key])
    })

    setIngredients(ingr)
    setMeasures(meas)
  }, [])

  return (
    <Container >
      <Interactive initialState={initialState}>
        {initialState && <Title>Sentindo fome?</Title> }
        <SubTitle initialState={initialState}>Aprenda uma nova receita aleatória</SubTitle>
        <GetRecipeButton
          onClick={getRecipe}
        >
          {initialState ? 'Receber receita' : 'Próxima receita'}
          <FaHamburger color="#EA1D2C" size={24} />
        </GetRecipeButton>
      </Interactive>
      {!initialState && 
      <Content>
        <MealTitleSection>
          <h2>
            Name: 
            <span>{recipe.strMeal} ({recipe.strCategory})</span>
          </h2>
          <h2>
            From:
            <span>{recipe.strArea}</span>
          </h2>
        </MealTitleSection>
        <MealSection>
          <IngredientsSection>
            <img src={recipe.strMealThumb} />
            <div>
              <h1>Ingredientes</h1>
              <ul>
                {ingredients.map((ingred, index) => {
                  if(ingred) {
                    return <li key={index}><span>{ingred}</span><span>{measures[index]}</span></li>
                  }
                  else {
                    return
                  }
                })
                }
              </ul>
            </div>
          </IngredientsSection>
          <VideoSection>
            <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} />
            <div>
              <h1>Como preparar</h1>
              <p>{recipe.strInstructions}</p>
            </div>
          </VideoSection>
        </MealSection>
      </Content>
      }
    </Container>
  );
}

export default Main;
