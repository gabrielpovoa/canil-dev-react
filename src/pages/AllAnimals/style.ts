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

export const Item = styled.img`
    max-width: 25rem;
    object-fit: cover;
    border-radius: .3rem;
    width: 100%;
`;