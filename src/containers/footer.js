import React from 'react';
import { Footer } from '../components';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title> ¿Dudas? Contacta con nosotros. Dummy Links </Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQ</Footer.Link>
                    <Footer.Link href="#">Trabaja con nosotros</Footer.Link>
                    <Footer.Link href="#">Dispositivos</Footer.Link>
                    <Footer.Link href="#">Información corporativa</Footer.Link>
                    <Footer.Link href="#">Futflix originals</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Centro de ayuda</Footer.Link>
                    <Footer.Link href="#">Sedes</Footer.Link>
                    <Footer.Link href="#">Condiciones</Footer.Link>
                    <Footer.Link href="#">Contacto</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Cuenta</Footer.Link>
                    <Footer.Link href="#">Privacidad</Footer.Link>
                    <Footer.Link href="#">Test de velocidad</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Media</Footer.Link>
                    <Footer.Link href="#">Tarjetas regalo</Footer.Link>
                    <Footer.Link href="#">Preferencias</Footer.Link>
                </Footer.Column>
                
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Futureflix Spain v1.0</Footer.Text>
        </Footer>
    );
}