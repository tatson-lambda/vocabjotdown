import React from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {FormControl, InputLabel, Input} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
});

class Profile extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                Basic information
                </Typography>
                
                <form className={classes.form} noValidate>
                
                    <FormControl fullWidth>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input id="name" fullWidth="true" aria-describedby="my-helper-text" />
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel htmlFor="email">Email address</InputLabel>
                        <Input id="email" fullWidth="true" readOnly aria-describedby="my-helper-text" />
                    </FormControl>

                    <br/>

                    <Button type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        Update profile
                    </Button>

                </form>

                <form className={classes.form} noValidate>
                    <Avatar alt="Remy Sharp" src="/images/avatar/1.jpg" className={classes.large} />

                    <Button type="submit"
                         variant="contained"
                        color="primary"
                        className={classes.submit}>
                        Update avatar
                    </Button>
                    
                </form>

                
            </div>

            <br/>


            <div className={classes.paper}>

            
                <Typography component="h1" variant="h5">
                Change password
                </Typography>

                <form>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Current password"
                    type="password"
                    id="oldpassword"
                    autoComplete="current-password"
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="New password"
                    type="password"
                    id="newpassword"
                    autoComplete="current-password"
                />


                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Confirm Password"
                    type="password"
                    id="confirmpassword"
                    autoComplete="current-password"
                />

                <Button type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}>
                    Update password
                </Button>

                </form>
            </div>
            </Container>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Profile);