import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Container, CssBaseline, TextField, TextareaAutosize, Button} from '@material-ui/core';

const styles = (theme) => ({
    root: {
        marginTop: theme.spacing(3),  
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    content: {
        marginTop: theme.spacing(2),  
         width: '95%',
    },
    title: {
        marginTop: theme.spacing(2),  
        width: '95%',
    },
    form: {
        width: '100%',
    },
    submit: {
        marginTop: theme.spacing(1),  
    },

  });


class NewArticle extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="md" className={classes.root} >
                <CssBaseline/>

                <form className={classes.form} noValidate autoComplete="off" fullwidth>
                    <Button type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        Save
                    </Button>

                    <TextField id="title" label="Title"  className={classes.title}/>
                    <TextareaAutosize aria-label="minimum height" rowsMin={10} placeholder="Please enter your text here..." className={classes.content} />
                </form>
            </Container>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NewArticle);