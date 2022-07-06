import styled from 'styled-components';

export const Container = styled.header`
    background-color: #FFF;
    position: relative;
`;

export const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 2rem 5%;
`;

export const Above = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`;

export const Logo = styled.div`
    font-size: 3rem;
    font-weight: 600;

    & a {
        color: #454545;
        text-decoration: underline;
    }
    @media screen and (max-width:45rem){
        font-size: 2rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content:end;
    & input {
        border: .1rem solid #ccc;
        padding: .8rem;
        width: 20rem;
        border-radius: .4rem;
    }
`;

export const Menu = styled.div`
    padding: 2rem 5%;

    background-color: #454545;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

    position: absolute;
    top: 100%;
    left: 0; right: 0;

    & ul {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & a {
            color: #fff;
            font-weight: 600;
            font-size: 1.3rem;
            padding: .8rem
        }
        & a:hover {
            background-color: #333;
            border-radius: .4rem;
        }
    }
`;