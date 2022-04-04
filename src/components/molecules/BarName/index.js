import React from 'react';
import { BarNick } from '../../atoms/BarNick';
import { BarId } from '../../atoms/BarId';
import { Wrapper } from './styles';
import BarEdit from '../../atoms/BarEdit';

export const BarName = ({nick, id}) => {
    return (
        <Wrapper>
            <BarNick>{nick}</BarNick><BarId>{id}</BarId>
            <BarEdit>Edytuj profil użytkownika</BarEdit>
            {/* ZŁĄCZYĆ JE DO JEDNEJ LINIJKI BARTUS + #7376 */}
        </Wrapper>
    );
};