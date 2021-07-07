import React from "react";
import { Typography, Menu, MenuItem } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '80%',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    break: {
        flexBasis: '100%',
        height: 0,
    },
    newButton: {
        margin: theme.spacing(3),
    },
    newButton: {
        margin: theme.spacing(3),
    }
  });

//this is to read, allow right click and also highlight some word which are add to my list

const initialState = {
    mouseX: null,
    mouseY: null,
  };

class Article extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState({
          mouseX: event.clientX - 2,
          mouseY: event.clientY - 4,
        });
      };
    
    handleClose = () => {
        this.setState(initialState);
    };

    render() {
        const { classes } = this.props;

        return (
            <div onContextMenu={this.handleClick} style={{ cursor: 'context-menu' }}>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit
                amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi
                finibus nec. Donec ac dolor sed dolor porttitor<mark> blandit</mark> vel vel purus. Fusce vel malesuada
                ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis
                finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet
                facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse
                lacinia tellus a libero volutpat maximus.
            </Typography>
            <Menu
                keepMounted
                open={this.state.mouseY !== null}
                onClose={this.handleClose}
                anchorReference="anchorPosition"
                anchorPosition={
                    this.state.mouseY !== null && this.state.mouseX !== null
                    ? { top: this.state.mouseY, left: this.state.mouseX }
                    : undefined
                }
            >
                <MenuItem onClick={this.handleClose}>Copy</MenuItem>
                <MenuItem onClick={this.handleClose}>Lookup</MenuItem>
            </Menu>
            </div>

        )
    }
}

export default withStyles(styles, { withTheme: true })(Article);