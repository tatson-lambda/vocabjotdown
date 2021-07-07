import React from "react";
import {Grid, Paper, Container, CssBaseline, Typography} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
    root: {
      padding: theme.spacing(3),
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class Progress extends React.Component {
    render() {

        const { classes } = this.props;
        
        return (
            <Container component="main" maxWidth="md">
                <CssBaseline />
                <div className={classes.root}>
                    <Typography component="h1" variant="h5">
                        Recent activity in this week
                    </Typography>
                        
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>
                            <Typography component="h3" variant="h5">
                            13
                            </Typography>
                            <Typography>
                            Learnt vocab
                            </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <Typography component="h3" variant="h5">
                                10
                                </Typography>
                                <Typography>
                                New vocabs
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>
                                <Typography component="h3" variant="h5">
                                3
                                </Typography>
                                <Typography>
                                New articles
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>

                <div className={classes.root}>
                    <Typography component="h1" variant="h5">
                    Recent Vocabularies
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>xs=12</Paper>
                        </Grid>
                    </Grid>
                </div>

                <div className={classes.root}>
                    <Typography component="h1" variant="h5">
                    Recent Articles
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>xs=12</Paper>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Progress);
