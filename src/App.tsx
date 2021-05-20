import React, {useState} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Card, Container, Grid, Input, Table} from 'semantic-ui-react'
import {Tempo} from "./Tempo";
import {Provider, useDispatch, useSelector} from "react-redux";
import {BpmConverterState, store} from "./store";
import {HeaderComponent} from "./header.component";
import {Actions} from "./Actions";

function App() {

    const tempo = new Tempo(123);
    const convert = () => {
        toggleConverted(!isConverted);
    }

    const [error, setError] = useState(false);
    const value = 1;
    const [isConverted, toggleConverted] = useState(false);
    const state = useSelector((state: BpmConverterState) => state)
    const dispatch = useDispatch();

    function update(value: string) {
        console.log(value);
        if (value) {
            /^\d+$/.test(value) ? setError(false) : setError(true)
            dispatch({
                type: Actions.BPM_CHANGED,
                payload: value
            });
        } else {
            setError(false)
        }
    }

    return (
        <div>
            <HeaderComponent/>
            <Container fluid={true}>
                <Grid columns={3}>
                    <Grid.Column>
                        <div/>

                    </Grid.Column>
                    <Grid.Column>
                        <Input
                            style={{"marginTop": "33%"}}
                            size={"massive"}
                            label={{basic: true, content: 'BPM'}}
                            type={"digits"}
                            error={error}
                            onChange={event => update(event.target.value)}
                            labelPosition='right'
                            placeholder='Enter BPM...'
                        />


                    </Grid.Column>
                    <Grid.Column>
                        <div/>
                    </Grid.Column>
                </Grid>
                <Grid columns={1}
                      centered={true}>
                    {
                        state.bpm > 0 &&

                        <Container size={"huge"}>
                            <Table style={{"marginTop": "3%"}} basic="very">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell as={"h3"}>Tempo</Table.HeaderCell>
                                        <Table.HeaderCell>1/4</Table.HeaderCell>
                                        <Table.HeaderCell>1/8</Table.HeaderCell>
                                        <Table.HeaderCell>1/8T</Table.HeaderCell>
                                        <Table.HeaderCell>1/16</Table.HeaderCell>
                                        <Table.HeaderCell>1/16T</Table.HeaderCell>
                                        <Table.HeaderCell>1/32</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>{state.bpm}</Table.Cell>
                                        <Table.Cell>{Math.round(state.conversion?.quarterMs)}</Table.Cell>
                                        <Table.Cell>{Math.round(state.conversion?.eighthMs)}</Table.Cell>
                                        <Table.Cell>{Math.round(state.conversion?.eightsTripletMs)}</Table.Cell>
                                        <Table.Cell>{Math.round(state.conversion?.sixteenth)}</Table.Cell>
                                        <Table.Cell>{Math.round(state.conversion?.sixteenthsTripletMs)}</Table.Cell>
                                        <Table.Cell>{Math.round(state.conversion?.demisemiquaverMs)}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Container>
                    }
                </Grid>
            </Container>
        </div>
    );
}


export default App;
