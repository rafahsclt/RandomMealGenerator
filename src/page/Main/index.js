import React, { useState, useCallback } from 'react';
import api from '../../services/api';

import { Container, Title, SubTitle, GetRecipeButton, Interactive, Content, MealTitleSection, MealSection, IngredientsSection, VideoSection } from './style';
import { FaHamburger } from 'react-icons/fa'

function Main() {
  const [initialState, setInitialState] = useState(true)
  const [recipe, setRecipe] = useState([])

  const getRecipe = useCallback(async () => {
    const response = await api.get('')
    setRecipe(response.data)
    setInitialState(false);
  }, [])

  return (
    <Container >
      <Interactive initialState={initialState}>
        <Title>Sentindo fome?</Title>
        <SubTitle>Aprenda uma nova receita aleatória</SubTitle>
        <GetRecipeButton
          onClick={getRecipe}
        >
          {initialState ? 'Receber receita' : 'Próxima receita'}
          <FaHamburger color="#EA1D2C" size={24} />
        </GetRecipeButton>
      </Interactive>
      <Content>
        <MealTitleSection>

        </MealTitleSection>
        <MealSection>
          <IngredientsSection>

          </IngredientsSection>
          <VideoSection>

          </VideoSection>
        </MealSection>
      </Content>
    </Container>
  );
}

export default Main;
