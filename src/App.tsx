import React, {useState} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Button, Container, GridColumn, GridRow, Header, Input, Statistic} from 'semantic-ui-react'
import {Tempo} from "./Tempo";

function App() {

    const tempo = new Tempo(123);
    const convert = () => {
        toggleConverted(!isConverted);
    }
    const [isConverted,toggleConverted] = useState(false);
    return (
        <Container>
            <GridColumn>
                <GridRow style={{margin: "5%"}}>
                    <Input
                        label={{ basic: true, content: 'BPM' }}
                        labelPosition='right'
                        placeholder='Enter beats per minute'

                    />
                    <Button onClick={() => convert()}>Convert</Button>
                    {
                        isConverted &&
                        <Statistic>
                            <Statistic.Value>{tempo.bpm}</Statistic.Value>
                            <Statistic.Label>BPM</Statistic.Label>
                        </Statistic>
                    }
                </GridRow>
            </GridColumn>
            <Header as='h1'>Convert BPM to ms</Header>
        </Container>
    );
}



export default App;
