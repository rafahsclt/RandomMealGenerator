import styled, { css } from 'styled-components'
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
    padding: 10px;
    height: 100%;

    ${props => !props.initialState && css`
        height: 10%;
        border-bottom: 2px solid #000;
        flex-direction: row;
        justify-content: space-around;
    `}
`

export const Title = styled.h1`
    font-size: 38px;
    margin-bottom: 20px;
    font-weight: bold;
`

export const SubTitle = styled.h2`
    font-size: 26px;
    margin-bottom: ${props => props.initialState ? '20px' : '0' };
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
    display: flex;
    background-color: #fff;
    height: 90%;
    flex-direction: column;
`
export const MealTitleSection = styled.div`
    display: flex;
    height: 10%;
    width: 100%;

    align-items: center;
    justify-content: space-around;

    > h2 {
        font-size: 22px;
        font-weight: bold;
        color: #000;
        
        span {
            margin-left: 5px;
            font-weight: 400;
        }
    }
`

export const MealSection = styled.div`
    display: flex;
    flex-direction: row;
    height: 90%;
`

export const IngredientsSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    border-right: 2px solid #000;

    img {
        align-self: center;
        width: 80%;
        height: 300px;
        margin-bottom: 10px;
    }

    > div {
        padding: 0 60px;
        display: flex;
        flex-direction: column;
        h1 {
            align-self: center;
            font-size: 22px;
            color: #000;
            margin-top: 5px;
            margin-bottom: 10px;
            font-weight: bold;
            font-style: italic;
        }

        ul {
            color: #000;
            font-size: 18px;
            li {
                display: flex;
                justify-content: space-between;
            }
        }
    }
`

export const VideoSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 40px;

    iframe {
        align-self: center;
        width: 80%;
        height: 300px;
        margin-bottom: 10px;
    }

    > div {
        padding: 0 60px;
        display: flex;
        flex-direction: column;

        h1 {
            align-self: center;
            font-size: 22px;
            color: #000;
            margin-top: 5px;
            margin-bottom: 10px;
            font-weight: bold;
            font-style: italic;
        }

        p {
            margin-top: 10px;
            color: #000;
            font-size: 18px;
        }
    }
`
