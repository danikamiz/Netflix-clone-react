import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function Signin() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';
    
    const handleSignIn = (event) => {
        event.preventDefault();

    return firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress, password)
        .then(() => {
            history.push(ROUTES.BROWSE);
        })
        .catch(( error ) => {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        });
    };

    return (
        <>
            <HeaderContainer>
                
                <Form>
                    <Form.Title>Iniciar sesión</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input
                            placeholder="Correo electrónico"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)} />
                        
                        <Form.Input
                            type="password"
                            placeholder="Contraseña"
                            autoComplete="off"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)} />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Iniciar Sesión
                        </Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        ¿Nuevo en Futureflix? <Form.Link to="/signup"> Regístrate </Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        Usamos diversas medidas de seguridad para asegurarnos de qué no eres un bot.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer>

            </FooterContainer>
        </>
    );
}