import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export class AddMovement extends Component {
    constructor(props) {
        super(props);
        this.state = {            
            movementText: null,
            movementType: '',
        };
    }

    handleChange(event, propertyName) {
        this.setState({ propertyName: event.target.value })
    };
    
    handleAdd(event){        
        this.props.onMovementItemChanged(this.state.movementText, this.state.movementType);
    }

    render() {
        return (
            <div>
                <TextField id="MovementText" onChange={(event) => this.setState({ movementText: event.target.value })}></TextField>
                <br /><br />
                <Select value={this.state.movementType} onChange={(event) => this.setState({ movementType: event.target.value })}>
                    <MenuItem key='wl' value={"Weight Lifting"}>Weight Lifting</MenuItem>
                    <MenuItem key='gym' value={"Gymnastics"}>Gymnastics</MenuItem>
                    <MenuItem key='cardio' value={"Cardio"}>Cardio</MenuItem>
                </Select>
                <br /><br />
                <Button variant="contained" color="primary" onClick={(event) => this.handleAdd(event)}                    
                    >
                    Add Movements
                </Button>
                <br /><br />
            </div>
        );

    }
}

export default AddMovement;

