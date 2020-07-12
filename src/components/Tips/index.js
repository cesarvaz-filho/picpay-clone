import React from 'react';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';
import img13 from '../../images/13.png';
import { Container, Option, Title, Img } from './styles';

const items = [
    {
        key: String(Math.random()),
        img: img10,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#172c4a'
    },
    {
        key: String(Math.random()),
        img: img11,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#41c938'
    },
    {
        key: String(Math.random()),
        img: img12,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#6a0159'
    },
    {
        key: String(Math.random()),
        img: img13,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#00ab4b'
    },
];


const Tips = () => {
    return (
        <Container>
            {items.map(item => (
                <Option key={item.key} bgColor={item.bgColor}>
                    <Title>{item.title}</Title>
                    <Img source={item.img} />
                </Option>
            ))}
        </Container>
    );
}

export default Tips;