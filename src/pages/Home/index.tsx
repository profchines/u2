import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Menu } from './../../components/Menu';
import { Card } from './../../components/Card';
import {
    Footer
} from './../../components/Footer';
import axios from 'axios';

interface interfaceProdutos {
    id: string,
    "id_categoria": number,
    "nome": string,
    "valor": string,
    "promo": string,
    "imagemg": string,
    "imagemp": string
}

export const Home = () => {

    // github.com/profchines
    const [produtos, setProdutos] = useState<Array<interfaceProdutos>>([])

    useEffect(() => {
        axios.get('http://localhost:3001/produtos')
            .then((response) => {
                setProdutos(response.data)
            })
            .catch((erro) => {
                console.log(erro)
            })
    }, [])

    return (
        <>
            <Menu />

            <Container>
                <h2>Produtos em destaque:</h2>
                <div
                    className='row justify-content-center text-center'
                >
                    {
                        produtos.map((produto) => (
                            <Card
                                key={produto.id}
                                id={produto.id}
                                img={
                                    'https://raw.githubusercontent.com/profchines/imagensProjetoU2/main/' +
                                    produto.imagemp
                                }
                                nome={produto.nome}
                                preco={produto.valor}
                                promocao={produto.promo}
                            />
                        ))
                    }
                </div>
            </Container>

            <Footer />
        </>
    );
}
