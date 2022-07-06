import styled from 'styled-components';

export const Container = styled.div`
    padding: 2rem 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #F2F2F2;

`;

export const Title = styled.div`
    margin-bottom: 3rem;
    text-align: center;
`;

export const Heading = styled.h1`
    font-size: 3rem;
    color: #454545;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
    place-items: center;
    gap: 1rem;
`;

export const ImageInfo = styled.div`
    padding-block: 1rem;
`;

export const Item = styled.img`
    max-width: 25rem;
    object-fit: cover;
    border-radius: .3rem;
    width: 100%;

    &:hover {
        opacity: .8;
    }

    @media screen and (max-width:45rem){
        max-width: 30rem;

    }
`;

export const Content = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: .2rem;

    & h2 {
        color: #333;
        font-size: 1.8rem;
        position: relative;
    }
    & h2:before {
            content: '';
            display: inline-block;
            position: absolute;
            width: 6rem;
            height: 2.5rem;
            background-color: #333;
            border-radius: .5rem;
            opacity: .2;
        }

`;