import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {GridList, GridListTile, Card, CardActionArea, CardContent, Typography, CardActions, Button, Container} from '@material-ui/core';

const styles = (theme) => ({
    root: {
        margin: '2px',
       minWidth: 200,
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
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
  });


class Vocabulary extends React.Component {
    render() {
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;

        return (
            <Container component="main" maxWidth="md" >

                <Typography component="h3" variant="h5">
                    There are 100 vocabulary in my list
                </Typography>

                <GridList cellHeight={200} className={classes.gridList}>

                    <GridListTile key="1">
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                benevolent
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                adjective
                                </Typography>
                                <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">OK</Button>
                                <Button size="small">Remove</Button>
                            </CardActions>
                        </Card>
                    </GridListTile>
                    <GridListTile key="2">
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                benevolent
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                adjective
                                </Typography>
                                <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">OK</Button>
                                <Button size="small">Remove</Button>
                            </CardActions>
                        </Card>
                    </GridListTile>

                    <GridListTile key="3">
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                benevolent
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                adjective
                                </Typography>
                                <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">OK</Button>
                                <Button size="small">Remove</Button>
                            </CardActions>
                        </Card>
                    </GridListTile>

                    <GridListTile key="4">
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                benevolent
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                adjective
                                </Typography>
                                <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">OK</Button>
                                <Button size="small">Remove</Button>
                            </CardActions>
                        </Card>
                    </GridListTile>
                </GridList>

                <GridList cellHeight={150} className={classes.gridList}>

                    <GridListTile key="1">
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                benevolent
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                adjective
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">OK</Button>
                                <Button size="small">Remove</Button>
                            </CardActions>
                        </Card>
                        
                    </GridListTile>
                    <GridListTile key="1">
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                benevolent
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                adjective
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">OK</Button>
                                <Button size="small">Remove</Button>
                            </CardActions>
                        </Card>
                        
                    </GridListTile>
                    <GridListTile key="1">
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                benevolent
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                adjective
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">OK</Button>
                                <Button size="small">Remove</Button>
                            </CardActions>
                        </Card>
                        
                    </GridListTile>
                    <GridListTile key="1">
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                benevolent
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                adjective
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">OK</Button>
                                <Button size="small">Remove</Button>
                            </CardActions>
                        </Card>
                        
                    </GridListTile>
                </GridList>



            </Container>
        );
    }
}


export default withStyles(styles, { withTheme: true })(Vocabulary);