import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import AddMovement from './Components/AddMovement';
import MovementList from './Components/MovementList';
import MenuBar from './Components/MenuBar';
import WorkoutList from './Components/WorkoutList';
import AddWorkout from './Components/AddWorkout';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movements: [
        { 'name': 'Squat', 'type': 'Weight Lifting' },
        { 'name': 'Front squat', 'type': 'Weight Lifting' },
        { 'name': 'Push-ups', 'type': 'Gymnastics' },
        { 'name': 'Muscle-ups', 'type': 'Gymnastics' },
        { 'name': 'Pistol Squats', 'type': 'Gymnastics' },
        { 'name': 'Running', 'type': 'Cardio' },
        { 'name': 'Rowing', 'type': 'Cardio' },
      ],
      workouts: [

        { 'date': '01/01/2019', 'movement': 'Squat', 'reps': '3', 'sets': '1' },
        { 'date': '01/01/2019', 'movement': 'Push-ups', 'reps': '10', 'sets': '3' },
        { 'date': '01/01/2019', 'movement': 'Muscle-ups', 'reps': '5', 'sets': '3' }

      ],

      selectedMenuItem: 'list',

    }
    this.onMenuItemChange = this.onMenuItemChange.bind(this);
    this.onMovementItemChanged = this.onMovementItemChanged.bind(this);
  }

  onMenuItemChange(newValue) {
    this.setState({ selectedMenuItem: newValue });
  }

  onMovementItemChanged(newMovement, movementType) {
    var newArray = this.state.movements.slice();
    newArray.push({ 'name': newMovement, 'type': movementType });
    this.setState({
      movements: newArray,
      selectedMenuItem: 'list',
    })
  }

  getMenu() {
    return (
      <div key="MenuDiv">
        <header>
          <MenuBar selectedMenuItem={this.state.selectedMenuItem} onMenuItemChange={this.onMenuItemChange} />
        </header>
      </div>
    );
  }

  render() {
    let returnels = [];
    returnels.push(this.getMenu());    
    switch (this.state.selectedMenuItem) {
      case 'list':
      
        returnels.push(
          <Grid item xs={8}>
          <div key="ListDiv" className="App">
            <MovementList movements={this.state.movements}></MovementList>
            <br/>
          </div>
          </Grid>
        );
        break;
      case 'add':
        returnels.push(
          <div key="AddDiv" className="App">
            <AddMovement
              onMovementItemChanged={this.onMovementItemChanged} />
          </div>
        );
        break;
      case 'workouts':
        returnels.push(
          <div key="WorkoutListDiv" className="App">
            <WorkoutList
              workouts={this.state.workouts} />
          </div>
        );
        break;
      case 'addworkout':          
          returnels.push(
            <div key="AddWorkoutDiv" className="App">
              <AddWorkout workouts={this.state.workouts} movements={this.state.movements} onMenuItemChanged={this.onMenuItemChange}/>
            </div>
          )
          break;
      default:
        console.log('defaulting to home state');
        break;
    }
    return (returnels);
  }
};

export default App;
