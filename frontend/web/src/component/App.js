import logo from '../logo.svg';
import './App.css';
import { withStyles } from "@material-ui/core/styles";
import { Container, CssBaseline, TextField, Divider, Typography, Grid, Link, Button, Paper } from '@material-ui/core';
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';

function App() {
  return (
    <Grid container maxWidth="md" spacing={3} alignItems="center" alignContent="center" style={{flexGrow: 1}}>
        <CssBaseline />
        <Grid item xs={2}></Grid>
        <Grid item xs={8}  style={{marginTop: 50}}>
          <Typography variant="h2" align="center" gutterBottom>Effective way to learn vocabulary</Typography>
        </Grid> 
        <Grid item xs={2}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Learning language can be frustrated. Reading books and article which are beyond your level is painful.
            Using this app, we try to brush up your language as quickly as possible so that you can read whatever your like.
            We also keep track of your language level and your common vocabulary list. so that you can be ready for any foreign language exam.
          </Typography>
        </Grid> 
        <Grid item xs={1} />
        
        
        <Grid item xs={4} />
        <Grid item xs={4} style={{marginTop: 20}} alignItems="center">
          <Button variant="contained" color="primary" >Signup for VocabJotDown</Button> 
        </Grid>
        <Grid item xs={4} />
        
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Paper >
          <Typography variant="h4" align="left" gutterBottom>A way to keep all your vaocabulary</Typography>
          <Typography variant="subtitle1" align="left" gutterBottom>
            Every word you lookup in this app is recorded and add to your leanring list for your later reference. 
            You don't have to keep papers and notebooks anymore.
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={10}>
          <Paper >
          <Typography variant="h4" align="right" gutterBottom>Read article in our application</Typography>
          <Typography variant="subtitle1" align="right" gutterBottom>
            What you read define you. When you read in our application, you can add word you don't understand to your vocabulary list instantly.
            You can prioritized your learning toward the word you frequently encounter.
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={10}>
          <Paper >
          <Typography variant="h4" align="left" gutterBottom>Support different platform</Typography>
          <Typography variant="subtitle1" align="left" gutterBottom>Our application support web, android and iphone. You can access your vocabulary anyway anytime.</Typography>
          <AndroidIcon></AndroidIcon>
          <AppleIcon></AppleIcon>
          </Paper>
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={10}>
          <Paper >
          <Typography variant="h4" align="right" gutterBottom>Measure your level</Typography>
          <Typography variant="subtitle1" align="right" gutterBottom>
            You can find out what level you are in and find reading material according to your level.
            You can also study for the next level to read more interesting articles. Whatever path you take, our app is here to support your learning jounery.
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={1} />

      </Grid>
  );
}

export default App;
