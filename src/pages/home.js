import React from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Todas las películas y series que desees y mucho más.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Disfruta donde quieras. Cancela cuando quieras.
                    </Feature.SubTitle>

                    <OptForm>
                        <OptForm.Input placeholder="Correo electrónico" />
                        <OptForm.Button>Empezar</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>
                            ¿Quieres ver algo ya? Escribe tu correo para crear o 
                            reactivar tu suscripción.
                        </OptForm.Text>
                    </OptForm>

                </Feature>
            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}
