import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function WorkoutList(listofWorkouts) {

    let cards = []
    let workouts = listofWorkouts.workouts;

    for (var x in workouts) {
        cards.push(<WorkoutCard key={workouts[x]['movement'] + workouts[x]['date'] + x} value={workouts[x]}></WorkoutCard>)
    }
    return (
        <div key='workoutcardlist'>
            <h2 className="App-header">WODiT Workout List</h2>
            <br />
            {cards}
        </div>
    )

    function WorkoutCard(workoutItem) {
        let value = workoutItem.value;
        return (

            <Card>
                <CardContent>
                    <Typography>
                        {value['movement']}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        {value['date']}
                    </Typography>
                    <Typography color="textPrimary" gutterBottom>
                        Sets: {value['sets']}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        Reps: {value['reps']}
                    </Typography>
                </CardContent>
            </Card>

        )

    }

}