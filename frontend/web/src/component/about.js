import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Container, CssBaseline, TextField, Divider, Typography, Grid, Link } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const styles = (theme) => ({

});


class About extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container maxWidth="md" alignItems="center" alignContent="center" direction="column">
        <CssBaseline />
        <Grid item xs={8}  style={{marginTop: 50}}>
          <Typography variant="h2" align="center" gutterBottom>Effective way to learn vocabulary</Typography>
        </Grid> 
        <Grid item xs={10}>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Learning language can be frustrated. Reading books and article which are beyond your level is painful.
            Using this app, we try to brush up your language as quickly as possible so that you can read whatever your like.
            We also keep track of your language level and your common vocabulary list. so that you can be ready for any foreign language exam.
          </Typography>
        </Grid> 
        
        <Grid item xs={6}  style={{marginTop: 50}}>
          <Container style={{border: '2px solid grey', borderRadius: '5px', padding: 30}}>
            <Typography display="inline" style={{verticalAlign: 'middle'}}>Follow us on </Typography> 

            <Link href="http://www.twitter.com" className={classes.link} target="_blank" >
              <TwitterIcon style={{verticalAlign: 'middle', marginLeft: 5, marginRight: 5 }}></TwitterIcon>
            </Link>

            <Link href="http://www.facebook.com" className={classes.link} target="_blank" >
              <FacebookIcon style={{verticalAlign: 'middle', marginLeft: 5, marginRight: 5 }}></FacebookIcon>
            </Link>

            <Link href="http://www.linkedin.com" className={classes.link} target="_blank" >
              <LinkedInIcon style={{verticalAlign: 'middle', marginLeft: 5, marginRight: 5 }}></LinkedInIcon>
            </Link>

            
            
            
          </Container>

        </Grid>

        <Grid item  style={{marginTop: 20}}>
          <Typography  variant="caption" display="block">A tatson lambda production 2021</Typography>
        </Grid>
        
        
      </Grid>
    )
  }
}

export default withStyles(styles, { withTheme: true })(About);