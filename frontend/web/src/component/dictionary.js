import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Container, CssBaseline, TextField, Divider, Typography} from '@material-ui/core';

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
    word: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    divider: {
        margin: theme.spacing(1),
    }
  });

class Dictionary extends React.Component {
    render() {

        const { classes } = this.props;

        return (
            <Container component="main" maxWidth="md" >
                <CssBaseline/>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="search"
                        label="Search term"
                        name="search"
                        autoComplete="search"
                        autoFocus
                    />
                </form>

                <Divider className={classes.divider}></Divider>


                <Typography component="h3" variant="h5" className={classes.word} >Test</Typography>


                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit
                    amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi
                    finibus nec. Donec ac dolor sed dolor porttitor<mark> blandit</mark> vel vel purus. Fusce vel malesuada
                    ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis
                    finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet
                    facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse
                    lacinia tellus a libero volutpat maximus.
                </Typography>

                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit
                    amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi
                    finibus nec. Donec ac dolor sed dolor porttitor<mark> blandit</mark> vel vel purus. Fusce vel malesuada
                    ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis
                    finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet
                    facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse
                    lacinia tellus a libero volutpat maximus.
                </Typography>

            </Container>
            
        );
    }
}

export default withStyles(styles, { withTheme: true })(Dictionary);