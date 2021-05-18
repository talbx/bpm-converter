import React from "react";
import {Header, Icon} from "semantic-ui-react";

export const HeaderComponent = () => {
    return (
        <Header style={{"margin": "1%"}} as='h2'>
            <Icon name='exchange' />
            <Header.Content>BPM Converter</Header.Content>
        </Header>
    )
}