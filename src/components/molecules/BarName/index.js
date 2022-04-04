import React from 'react';
import { Wrapper, WrapperInner } from './styles';
import Button from '../../atoms/Button';
import Head from '../../atoms/Head';

export const BarName = ({nick, id}) => {
    return (
        <Wrapper>
            <WrapperInner>
                <Head fontSize="18">{nick}</Head>
                <Head color="gray" fontSize="18">{id}</Head>
            </WrapperInner>
            <Button>Edytuj profil użytkownika</Button>
            {/* ZŁĄCZYĆ JE DO JEDNEJ LINIJKI BARTUS + #7376 */}
        </Wrapper>
    );
};