import React from "react";
import {Container, Header, Icon, Segment} from "semantic-ui-react";

const pjson = require('./../package.json');

export const HeaderComponent = () => {
    return (
        <Segment basic>
            <Header as='h2' floated={"left"} textAlign='left'>
                <Icon name='exchange'/>
                BPM Converter
            </Header>
            <Header floated={"right"} as='h5' textAlign='right'>
                v{pjson.version}
            </Header>
        </Segment>
    );
}