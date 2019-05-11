import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class WoditAppBar extends React.Component {
    render() {
        return (
            <div className={this.props.root}>
                <AppBar position="static">
                    <Toolbar>
                        <SimpleMenu key="menu" onMenuItemChange={this.props.onMenuItemChange} />
                        <Typography variant="h6" color="inherit" className={this.props.grow}>
                            Welcome to Wodit!
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

class SimpleMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,

        };

    }


    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    handleClose = (mode) => (event) => {
        this.setState({
            anchorEl: null,

        });
        this.props.onMenuItemChange(mode);
        console.log("Selected Mode changed on menu to: " + mode);
    };

    render() {
        const { anchorEl } = this.state;
        return (
            <div>
                <Button onClick={this.handleClick}>
                    <MenuIcon />
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose('home')}
                >
                    <MenuItem key="home" onClick={this.handleClose('home')}>Home</MenuItem>
                    <MenuItem key="workouts" onClick={this.handleClose('workouts')}>Show Workouts</MenuItem>
                    <MenuItem key="addworkout" onClick={this.handleClose('addworkout')}>Add Workouts</MenuItem>
                    <MenuItem key="list" onClick={this.handleClose('list')}>List Movements</MenuItem>
                    <MenuItem key="add" onClick={this.handleClose('add')}>Add Movements</MenuItem>
                </Menu>

            </div>
        );
    }
}


WoditAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WoditAppBar);