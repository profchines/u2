import React from 'react';
import { Container } from 'react-bootstrap';
import { Menu } from './../../components/Menu';
import {
    Footer
} from './../../components/Footer';

export const Home = () => {

    // github.com/profchines
    return (
        <>
            <Menu />

            <Container>
                <h2>Produtos em destaque:</h2>
            </Container>

            <Footer />
        </>
    );
}
