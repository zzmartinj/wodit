import React, { useState} from 'react';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
var moment = require('moment');

export function AddWorkout(params) {
    let movements = params['movements'];
    const [sets, calculateSet] = useState("0");
    const [reps, calculateReps] = useState("0");
    const [workouts, setWorkouts] = useState(params['workouts']);
    const [selectedMovement, changeSelected] = useState(movements[0]['name']);
    const updateMenuState = params['onMenuItemChanged'];    

    return (
        <div key="AddWorkout">
        <h2 className="App-header">Add a Workout to your Log:</h2>
        <br/>
            <MovementSelect movements={movements} selectedMovement={selectedMovement} onSelectedChange={changeSelected}></MovementSelect>
            <br /><br />
            Sets: <TextField id="txtSets" onChange={e => calculateSet(e.target.value)} ></TextField>
            <br /><br />
            Reps: <TextField id="txtReps" onChange={e => calculateReps(e.target.value)} ></TextField>
            <br /><br />
            <Button variant="contained" color="primary"
                onClick={
                    () => {
                        setWorkouts(workouts.push(
                            { 'date': moment().format('l'), 'movement': selectedMovement, 'reps': reps, 'sets': sets })
                        );
                        updateMenuState('workouts');
                    }}>
                Add Workout
                </Button>
            <br /><br />
        </div>
    );
}

function MovementSelect(params) {
    let movementlist = params['movements'];
    let movements = [];
    const selectedMovement = params['selectedMovement'];
    const changeSelected=params['onSelectedChange'];
    let selects = []
    //Let's de-dupe and then create a card for each distinct type of movement
    movementlist.forEach(movement => {
        if (!movements.includes(movement['name'])) {
            movements.push(movement['name']); // Add the type to the list of found movement types
            selects.push(<MenuItem key={movement['name']} value={movement['name']}>{movement['name']}</MenuItem>)
        }
    });
                        
    return (
        <div key="MovementSelect" id="MovementSelect">
            <Select value={selectedMovement} onChange={(e) => {                
                
                changeSelected(e.target.value);
                console.log(e.target.value);                
                }}>
                {selects}
            </Select>
        </div>
    )
}

export default AddWorkout;

