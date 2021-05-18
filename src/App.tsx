import React, {useState} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Container, Grid, Input} from 'semantic-ui-react'
import {Tempo} from "./Tempo";
import {Provider} from "react-redux";
import {store} from "./store";
import {HeaderComponent} from "./header.component";

function App() {

    const tempo = new Tempo(123);
    const convert = () => {
        toggleConverted(!isConverted);
    }

    const [error, setError] = useState(false);
    const value = 1;
    const [isConverted, toggleConverted] = useState(false);

    function update(value: string) {
        console.log(value);
        if (value) {
            console.log(value.length, "length")
            if (value.length < 4 && value.length > 1) {
                /^\d+$/.test(value) ? setError(false) : setError(true)
            }
        } else {
            setError(false)
        }
    }

    return (
        <Provider store={store}>
            <HeaderComponent/>
            <Container fluid={true}>
                <Grid centered columns={3}>
                    <Grid.Column>
                        <div/>

                    </Grid.Column>
                    <Grid.Column>
                        <Input centered
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
            </Container>
        </Provider>
    );
}


export default App;
