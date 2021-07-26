import React from "react";
import { Grid, Paper, Container, CssBaseline, Typography, GridList, GridListTile, Card, CardContent, Button, CardActions, CardActionArea } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, ResponsiveContainer } from "recharts";

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

    const data = [
      {
        "date": "2021-07-20",
        "new": 10,
        "learn": 15,
        "new_article": 1,
      },
      {
        "date": "2021-07-21",
        "new": 11,
        "learn": 15,
        "new_article": 0,
      },
      {
        "date": "2021-07-22",
        "new": 9,
        "learn": 15,
        "new_article": 1,
      },
      {
        "date": "2021-07-23",
        "new": 5,
        "learn": 10,
        "new_article": 0,
      },
      {
        "date": "2021-07-24",
        "new": 1,
        "learn": 10,
        "new_article": 1,
      },
      {
        "date": "2021-07-25",
        "new": 3,
        "learn": 15,
        "new_article": 0,
      },
    ]


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

                <ResponsiveContainer width="95%" height={100}>
                  <LineChart
                    data={data}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                  >
                    <XAxis dataKey="date" />
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line type="monotone" dataKey="learn" stroke="#ff7300" yAxisId={0} />
                  </LineChart>
                </ResponsiveContainer>

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

                <ResponsiveContainer width="95%" height={100}>
                  <LineChart
                    data={data}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                  >
                    <XAxis dataKey="date" />
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line type="monotone" dataKey="new" stroke="#ff7300" yAxisId={0} />
                  </LineChart>
                </ResponsiveContainer>
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

                <ResponsiveContainer width="95%" height={100}>
                  <LineChart
                    data={data}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                  >
                    <XAxis dataKey="date" />
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line type="monotone" dataKey="new_article" stroke="#ff7300" yAxisId={0} />
                  </LineChart>
                </ResponsiveContainer>
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
              <Paper className={classes.paper}>
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
                </GridList>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className={classes.root}>
          <Typography component="h1" variant="h5">
            Recent Articles
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <GridList cellHeight={180} className={classes.gridList}>

                  <GridListTile key="1">
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary" onClick={(e) => this.handleSaveArticle(1)}>
                          Edit
                        </Button>
                        <Button size="small" color="primary" onClick={(e) => this.handleRemoveArticle(1)}>
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </GridListTile>

                  <GridListTile key="2">
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary" onClick={(e) => this.handleSaveArticle(2)}>
                          Edit
                        </Button>
                        <Button size="small" color="primary" onClick={(e) => this.handleRemoveArticle(2)}>
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </GridListTile>

                  <GridListTile key="3">
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary" onClick={(e) => this.handleSaveArticle(3)}>
                          Edit
                        </Button>
                        <Button size="small" color="primary" onClick={(e) => this.handleRemoveArticle(3)}>
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </GridListTile>
                </GridList>
              </Paper>
            </Grid>
          </Grid>
        </div>

      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Progress);
