import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';
import { Card } from '../../components/Card';


interface interfaceProdutos {
    id: string,
    "id_categoria": number,
    "nome": string,
    "valor": string,
    "promo": string,
    "promoNumber": string,
    "imagemg": string,
    "imagemp": string
}

export const AddAndUpdateCategoria = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const refForm: any = useRef();

    const [isEdit, setIsEdit] = useState<boolean>(false)

    useEffect(() => {

        const idCategoria = Number(id)

        if (Number.isInteger(idCategoria)) {
            setIsEdit(true)
            axios.get('http://localhost:3001/categorias?id=' + id)
                .then((response) => {
                    refForm.current['categoria'].value = response.data[0].categoria
                })
                .catch((error) => {
                    console.log(error)
                })
        }



    }, [id])

    function onSubmit(e: any) {
        e.preventDefault();
        let categoria = e.target.categoria.value

        if (isEdit) {

            axios.put('http://localhost:3001/categorias/'+id,
                { categoria },
                {
                    headers: { 'Authorization': 'Bearer reuytherouytgt' }
                }
            )
                .then((res) => {

                    navigate('/listagemCategoria')
                })
                .catch((error) => {
                    console.log(error)
                })

        } else {



            axios.post('http://localhost:3001/categorias',
                { categoria },
                {
                    headers: { 'Authorization': 'Bearer reuytherouytgt' }
                }
            )
                .then((res) => {

                    navigate('/listagemCategoria')
                })
                .catch((error) => {
                    console.log(error)
                })
        }

        // let formData = new FormData()
        // formData.append('imagem', images)
        // formData.append('categoria', categoria)

        // axios.post('http://localhost:3001/categorias',
        //     formData,
        //     {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //             'Authorization': 'Bearer reuytherouytgt'
        //         }
        //     }
        // )
        //     .then((res) => {

        //         navigate('/listagemCategoria')
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })


    }


    // github.com/profchines
    return (
        <>
            <Menu />
            <Container
                style={{
                    marginTop: 20,
                    marginBottom: 40,
                }}
            >
                <h2>
                    Categoria:
                </h2>
                <div
                    className='row'
                >
                    <div
                        className='col-md-8'
                    >
                        <form
                            onSubmit={onSubmit}
                            ref={refForm}
                        >
                            <div
                                className='input-group'
                            >
                                <input
                                    type='text'
                                    name='categoria'
                                    className='form-control'
                                    // defaultValue={1}
                                    required
                                />
                                <div className='input-group-append'>
                                    <button
                                        type='submit'
                                        className='btn btn-success'
                                    >
                                        Salvar
                                    </button>
                                </div>

                            </div>

                        </form>
                    </div>
                </div>

            </Container>
            <Footer />
        </>
    );
}
