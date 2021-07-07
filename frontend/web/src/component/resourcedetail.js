import React from "react";
import {Container, CssBaseline, Typography, TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody, Button} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
    table: {
        minWidth: 700,
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



class ResourceDetail extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <Container component="main" maxWidth="md" >
                <CssBaseline />

                <Typography component="h1" variant="h5">
                    A2
                </Typography>

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
            </Container>

        );
    }
}

export default withStyles(styles, { withTheme: true })(ResourceDetail);
