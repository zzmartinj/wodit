import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class MovementList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movements: this.props.movements,
        }
    }
    render() {
        let cards = [];
        for (var x in this.props.movements) {
            cards.push(<MovementCard key={this.props.movements[x]['name'] + x} value={this.props.movements[x]['name']} movement_type={this.props.movements[x]['type']}></MovementCard>)
        }
        return (
            <div >
                <h2 className="App-header">WODiT Movement List</h2>
                <br />
                {cards}
            </div>
        );
    }
}

function MovementCard (props) {
    
        return (
            <Card>
                <CardContent>
                    <Typography>
                        {props.value}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        {props.movement_type}
                    </Typography>

                </CardContent>
            </Card>
        )
    };