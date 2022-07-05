import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Navigation, Above, Menu, Logo, Form } from './styles'

import Banner from '../banner'

export const Header = () => {
    return <>
        <Container>
            <Navigation>
                <Above>
                    <Logo>
                        <Link to="/">🐶DevShop</Link>
                    </Logo>
                    <Form action="">
                        <input type="text" placeholder='Pesquise por Raça' />
                    </Form>
                </Above>

                    <Menu>
                        <ul>
                            <Link to="">Todos</Link>
                            <Link to="">cachorros</Link>
                            <Link to="">gatos</Link>
                            <Link to="">Peixes</Link>
                        </ul>
                    </Menu>
            </Navigation>
        </Container>
        <Banner />
    </>
}

export default Header