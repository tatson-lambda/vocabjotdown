import React from "react";
import { Container, CssBaseline, List, ListItem, ListItemIcon, ListItemText, Drawer, Divider, Typography, Grid, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { TableContainer, Paper, Button } from '@material-ui/core';

import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const styles = (theme) => ({
    root: {
        marginTop: theme.spacing(2),
        display: 'flex',
      },

      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
});

function createData(name, type, explain) {
    return { name, type, explain};
  }
  
  const rows = [
    createData('test', 'noun', 'Hello'),
    createData('test', 'noun', 'Hello'),
    createData('test', 'noun', 'Hello'),
    createData('test', 'noun', 'Hello'),
    createData('test', 'noun', 'Hello'),
  ];




class Resources extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Container  component="main" maxWidth="md" className={classes.root}>
                <CssBaseline />
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <div className={classes.demo}>
                            <List dense={false}>
                                <ListItem>
                                    <ListItemText
                                        primary="A1"
                                        secondary="Hello"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="A2"
                                        secondary="Hello"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="B1"
                                        secondary="Hello"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="B2"
                                        secondary="Hello"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="C1"
                                        secondary="Hello"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="C2"
                                        secondary="Hello"
                                    />
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                    <Grid item md={9}>
                    <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="right">Word</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Explanation</TableCell>
                            <TableCell align="right">Add to my list</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.type}</TableCell>
                            <TableCell align="right">{row.explain}</TableCell>

                            <TableCell align="right">
                                <Button size="small" color="primary">
                                   Add
                                </Button>
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                    </Grid>
                </Grid>

            </Container>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Resources);