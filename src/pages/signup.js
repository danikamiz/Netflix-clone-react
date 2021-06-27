import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function Signup() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = firstName === '' || password === '' || emailAddress === '';

    const handleSignup = (event) => {
        event.preventDefault();
        // firebase
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) =>
                result.user.updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) +1,
                }).then(() => {
                    history.push(ROUTES.BROWSE);
                })
            )
            .catch((error) => {
                setFirstName('');
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
    };


    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Registro</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            placeholder="Nombre"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        <Form.Input
                            placeholder="Correo electrónico"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            autoComplete="off"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Registro
                        </Form.Submit>

                        <Form.Text>
                            ¿Ya eres usuario? <Form.Link to="/signin">
                                Iniciar sesión
                            </Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            Usamos diversas medidas de seguridad para asegurarnos de qué no eres un bot
                            (mensaje disuasorio)
                        </Form.TextSmall>

                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    );
}