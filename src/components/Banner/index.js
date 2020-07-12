import React from 'react';
import img13 from '../../images/13.png';
import { Container, Details, Img, Title, Description } from './styles';

const Banner = () => {
    return (
        <Container>
            <Details>
                <Title>Cobre um amigo</Title>

                <Description>
                    Mantenha suas parcerias em dia. Use o PicPay para fazer suas cobranças.
                </Description>
            </Details>
            <Img source={img13} />
        </Container>
    );
}

export default Banner;