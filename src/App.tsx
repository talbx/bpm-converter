import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css'
import {Container, Header, Input, Table} from 'semantic-ui-react'
import {useDispatch, useSelector} from "react-redux";
import {BpmConverterState} from "./store";
import {HeaderComponent} from "./header.component";
import {Actions} from "./Actions";

function App() {

    const [error, setError] = useState(false);
    const state = useSelector((state: BpmConverterState) => state)
    const dispatch = useDispatch();

    const determineError = (value: string): boolean => {
        if (value) {
            console.log("the val", value)
            if (/^\d+$/.test(value)) {
                const num = parseInt(value)
                if (num < 200) {
                    console.log("num is", num)
                    return false
                }
            }
        }
        console.log("returning error")
        return true;
    }

    function update(value: string) {
        console.log(value);
        let b = determineError(value);
        console.log("error will be set to", b)
        setError(b);
        console.log("dispatching bpm", value)
        dispatch({
            type: Actions.BPM_CHANGED,
            payload: !b ? value : 0
        });

    }

    return (
        <div>
            <HeaderComponent/>
            <Container textAlign={"center"} fluid={true}>
                <Header style={{"marginTop": "10%"}} as={"h2"}>Convert BPM to ms</Header>
                <Input
                    style={{"marginTop": "2%"}}
                    size={"massive"}
                    label={{basic: true, content: 'BPM'}}
                    type={"digits"}
                    error={error}
                    onChange={event => update(event.target.value)}
                    labelPosition='right'
                    placeholder='Enter BPM...'
                />

                {
                    state.bpm !== 0 &&

                    <Container size={"huge"}>
                        <Table style={{"marginTop": "10%"}} basic="very">
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Tempo</Table.HeaderCell>
                                    <Table.HeaderCell>1/4</Table.HeaderCell>
                                    <Table.HeaderCell>1/8</Table.HeaderCell>
                                    <Table.HeaderCell>1/8T</Table.HeaderCell>
                                    <Table.HeaderCell>1/16</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>{state.bpm} BPM</Table.Cell>
                                    <Table.Cell>{Math.round(state.conversion?.quarterMs)}</Table.Cell>
                                    <Table.Cell>{Math.round(state.conversion?.eighthMs)}</Table.Cell>
                                    <Table.Cell>{Math.round(state.conversion?.eightsTripletMs)}</Table.Cell>
                                    <Table.Cell>{Math.round(state.conversion?.sixteenth)}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Container>
                }
            </Container>
        </div>
    );
}


export default App;
