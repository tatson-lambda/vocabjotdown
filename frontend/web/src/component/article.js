import React from "react";
import { Typography, Menu, MenuItem, Container, Divider} from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import {Editor, EditorState, ContentState} from 'draft-js';
import 'draft-js/dist/Draft.css';

/*
useful link: https://stackoverflow.com/questions/63812903/how-to-give-typography-like-style-to-an-input-element-with-material-ui
*/

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
  },
  newButton: {
    margin: theme.spacing(3),
  },
  textArea: {
    width: '100%',
    minHeight: '50px',
    height: 'auto',
    border: '2px solid rgba(63,63,63,1)',
  }
});

//this is to read, allow right click and also highlight some word which are add to my list

const initialState = {
  mouseX: null,
  mouseY: null,
  editorState: EditorState.createEmpty(),

  title: "",
  content: "",
};

class Article extends React.Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };

  handleClose = () => {
    this.setState(initialState);
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleEditorChange = (e) => {
    this.setState({ editorState: e });
  }

  async loadArticle(id){
    var title = "This is a title";
    var content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta lacinia faucibus. Curabitur mattis arcu libero, eget sagittis leo sodales quis. Aliquam erat volutpat. Sed eu est neque. Curabitur volutpat elit est, in ultrices magna aliquam sit amet. Proin in eros id arcu posuere condimentum. Aliquam lorem dui, lacinia id metus ut, congue viverra nunc. Nunc lobortis augue sem, ut feugiat turpis ullamcorper ut. Maecenas placerat ullamcorper posuere. Donec vehicula imperdiet est, sit amet fringilla neque pellentesque vel. Aenean ante velit, aliquet eget eros ut, efficitur rutrum dui. Quisque volutpat, velit id varius egestas, odio diam efficitur massa, quis fermentum libero turpis eu elit.
    Nam sem nulla, vehicula eget finibus non, tempor sed ipsum. Fusce et auctor neque, id fermentum elit. Curabitur finibus vulputate erat. Donec in enim lacus. Morbi pulvinar leo eget erat dapibus euismod. Aliquam convallis augue id dictum porta. Maecenas interdum vestibulum lorem, sit amet sodales tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec massa ex, sodales et metus et, consectetur varius purus. Sed euismod nunc tellus. Nullam elementum nunc lorem, id ornare ex faucibus vel. Nam ullamcorper eu lacus nec interdum. Proin eget dapibus augue. Donec congue dignissim scelerisque. Pellentesque at odio mattis, aliquam eros id, convallis tellus.
    Aenean imperdiet tortor tempor turpis vehicula tincidunt. Morbi malesuada vehicula dictum. In a vestibulum lectus. Etiam tellus ante, egestas a eros sed, pellentesque porta nisi. Phasellus velit lectus, laoreet quis eleifend quis, egestas sit amet erat. Sed posuere ac dolor non placerat. Cras ac metus commodo, elementum leo sed, ullamcorper nunc. Suspendisse tristique erat vel metus interdum, vel viverra massa vehicula. Aenean eu purus nec massa maximus venenatis fermentum sed orci.
    Vestibulum in turpis interdum, rutrum dui nec, ultricies urna. Donec sem dui, rhoncus nec metus a, lacinia iaculis tortor. Mauris rhoncus feugiat cursus. Aenean ac magna metus. Suspendisse commodo sem mi, sit amet efficitur nulla pellentesque quis. Aliquam sit amet felis et nibh porttitor porttitor at quis justo. Vivamus eu elit neque. Vivamus ultricies blandit viverra. Aliquam viverra semper felis nec laoreet. Suspendisse sodales tempus nisi ut cursus. Praesent suscipit facilisis magna, sit amet ultrices turpis auctor in. Proin nec nulla vestibulum, faucibus erat maximus, commodo nisi.
    Nulla tempor vitae ipsum vitae scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam faucibus dolor vitae nisi tempus tristique. Phasellus quis porta felis. Aliquam mollis nibh et nisl molestie, et accumsan diam posuere. Praesent eleifend diam et lorem egestas, a elementum orci vestibulum. Suspendisse id porta nibh. Proin purus velit, sagittis non odio non, sodales tincidunt libero. Vestibulum est urna, scelerisque mattis nibh sed, volutpat interdum lorem. Maecenas efficitur velit eu posuere luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce faucibus dignissim quam, vel aliquet massa mollis at. Sed at posuere ligula. Integer odio mi, rhoncus eu purus ut, volutpat consequat odio. Pellentesque eu dolor non lectus ullamcorper congue.            `;


    this.setState({
      editorState: EditorState.createWithContent(ContentState.createFromText(content)),
      title: title,
      content: content});
  }

  componentDidMount() {
    this.loadArticle(0)
  }

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="md" style={{}}>

        <input
          className="MuiTypography-root MuiTypography-h4 MuiTypography-displayBlock"
          style={{ width: '100%', marginTop: 30, borderWidth: '0px', border: 'none' }}
          value={this.state.title}
          onChange={this.handleValueChange}
        />

        <Typography></Typography>

        <Divider light style={{ marginTop: 10, marginBottom: 10 }}/>
        

        <Editor editorState={this.state.editorState} onChange={this.handleEditorChange} placeholder="test"/>

      </Container>

    )
  }
}

export default withStyles(styles, { withTheme: true })(Article);