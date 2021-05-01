import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import React from 'react';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    marginRight: theme.spacing(),
    fontWeight: 900, 
  },

  welcome: {
    flex: 1,
  }
}));


export default function Nav(props) {
  const classes = useStyles();
  const { currentUser, handleLogout } = props;
  return (
    <div className={classes.root}>
    <AppBar position="static" style={{backgroundColor: "yellow"}}>
      <Toolbar>
        <Typography variant="h6" className={classes.title} style={{color: "black"}}>
            goodBooks
        </Typography>
        {currentUser ? (
            <>
              <p className={classes.welcome} style={{ color: "black" }}>Hi {currentUser.username}, Welcome!</p>
              <br />
              <Button onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <Link to="/SignIn" style={{ textDecoration: "none" }}>
              Sign In
            </Link>       
          )}
          {
            currentUser &&
            <>
              <Link to='/' style={{ textDecoration: "none", color: "black" }}>Books</Link>
            </>
          
          }
      </Toolbar>
    </AppBar>
    </div>
  )
}
