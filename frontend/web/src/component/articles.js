import React from "react";
import { GridList, GridListTile, Card, CardActionArea, CardContent, Typography, CardActions, Button, Container } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

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
  }
});

class Articles extends React.Component {

  handleNewArticle = () => {
    this.props.history.push("/article/0");
  }

  handleSaveArticle = (id) => {
    this.props.history.push("/article/" + id);
  }

  handleRemoveArticle = (id) => {
    console.log("remove article " + id)
  }

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="md">

        <Button variant="contained" color="primary" className={classes.newButton} onClick={this.handleNewArticle}>
          Add a new article
        </Button>

        <div className={classes.break}></div>

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
                <Button size="small" color="primary" onClick={(e) => this.handleSaveArticle(1) }>
                  Edit
                </Button>
                <Button size="small" color="primary" onClick={(e) => this.handleRemoveArticle(1) }>
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
                <Button size="small" color="primary" onClick={(e) => this.handleSaveArticle(2) }>
                  Edit
                </Button>
                <Button size="small" color="primary" onClick={(e) => this.handleRemoveArticle(2) }>
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
                <Button size="small" color="primary" onClick={(e) => this.handleSaveArticle(3) }>
                  Edit
                </Button>
                <Button size="small" color="primary" onClick={(e) => this.handleRemoveArticle(3) }>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </GridListTile>

          <GridListTile key="4">
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
                <Button size="small" color="primary" onClick={(e) => this.handleSaveArticle(4) }>
                  Edit
                </Button>
                <Button size="small" color="primary" onClick={(e) => this.handleRemoveArticle(4) }>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </GridListTile>

          <GridListTile key="5">
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
                <Button size="small" color="primary" onClick={(e) => this.handleSaveArticle(5) }>
                  Edit
                </Button>
                <Button size="small" color="primary" onClick={(e) => this.handleRemoveArticle(5) }>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </GridListTile>
        </GridList>
      </Container>
    );
  }
}


export default withRouter(withStyles(styles, { withTheme: true })(Articles));