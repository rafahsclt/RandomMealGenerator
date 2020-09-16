import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
    height: 100%;
    width: 100%;
`

export const Interactive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;

    height: ${props => props.initialState ? '100%' : '20%'};
`

export const Title = styled.h1`
    font-size: 38px;
    margin-bottom: 20px;
    font-weight: bold;
`

export const SubTitle = styled.h2`
    font-size: 26px;
    margin-bottom: 20px;
`

export const GetRecipeButton = styled.button`
    height: 35px;
    width: 300px;
    border: 1px solid #fff;
    border-radius: 8px;

    color: #EA1D2C;
    background-color: #fff;
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        margin-left: 10px;
    }

    &:hover {
        background-color: ${shade(0.2, '#fff')}
    }
`

export const Content = styled.div`
    display: ${props => props.initialState ? 'none' : 'flex'};
    background-color: #fff;
`
export const MealTitleSection = styled.div`

`

export const MealSection = styled.div`

`

export const IngredientsSection = styled.div`

`

export const VideoSection = styled.div`

`
