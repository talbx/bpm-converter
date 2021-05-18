import React, {useState} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Card, Container, Grid, Input} from 'semantic-ui-react'
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
    const bpm = useSelector((state: BpmConverterState) => state.bpm)
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
                {
                    bpm > 0 &&

                    <Card centered={true}
                    size={"huge"}>
                        <p>hallo</p>
                    </Card>
                }
            </Container>
        </div>
    );
}


export default App;
