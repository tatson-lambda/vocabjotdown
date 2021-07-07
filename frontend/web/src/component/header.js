import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Button, ButtonBase, InputBase, Link, Avatar, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../logo.png'
import './header.css';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
}));


function Header() {

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [searchVal, setSearchVal] = React.useState("");

  const  handleSearchChange = (e) => {
    setSearchVal(e.target.value)
  }

  const  handleSearchKeypress = (e) => {
    if(e.keyCode == 13){
      console.log('value', e.target.value);
   }
  }

  const  switchLanguage = (e) => {
    setSearchVal(e.target.value)
  }


  return (
    <AppBar position="static">
      <Toolbar>
        <ButtonBase>
        <img src={logo}  alt="logo" className="header-logo" />
        </ButtonBase> 

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            value={searchVal}
            onKeyDown={handleSearchKeypress}
            onChange={handleSearchChange}

          />
        </div>
          
        <Button color="inherit" onClick={switchLanguage}>
          Current: English
        </Button>

        <Button color="inherit" component={RouterLink} to="/resources">
          Resource
        </Button>

        <Button color="inherit" component={RouterLink} to="/progress">
          Progress
        </Button>

        <Button color="inherit" component={RouterLink} to="/articles">
          Article
        </Button>

        <Button color="inherit" component={RouterLink} to="/vocabulary">
          Vocabulary
        </Button>

        <Button color="inherit" component={RouterLink} to="/about">
          About
        </Button>

        <div className={classes.grow} />

        <Avatar onClick={handleClick}>A</Avatar>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}

        >
          <MenuItem onClick={handleClose} component={RouterLink} to='/profile'>Profile</MenuItem>
          <MenuItem onClick={handleClose} component={RouterLink} to='/login'>Login</MenuItem>
          <MenuItem onClick={handleClose} component={RouterLink} to='/logout'>Logout</MenuItem>
        </Menu>

      </Toolbar>
    </AppBar>
  );
}
export default Header;