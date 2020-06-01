import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme) =>({
  header: {
    position: 'fixed',
    background: '#fff',
    width: '100%',
    zIndex: theme.zIndex.mobileStepper,
  },
  title: {
    marginBottom: theme.spacing(3),
    fontWeight: 'bold',
    borderBottom: 'solid 2px #000',
    display: 'block',
    textAlign: 'center'
  },
  titleLast: {
    fontWeight: 'bold',
    borderBottom: 'solid 2px #000',
    display: 'block',
    textAlign: 'center',

  },
  hdBox: {
    padding: theme.spacing(1, 6),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1, 3)
    }
  },
  logo: {
    color: '#FDD000',
    fontWeight: 'bold'
  },
  list: {
    alignItems: 'flex-end',
    padding: theme.spacing(3)
  },
  item: {
    marginRight: '30px',
  },
  fullList: {
    width: 'auto',
  },
  icon: {
    marginTop: '20px'
  },
  listItemText: {
    fontSize: '20px',
  },
}));

function Header() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        {['Home', 'About', 'Event', 'Member(2)','Member(3)', 'Q&A'].map((text) => (
          <ListItem button key={text} divider={true}>
            <ListItemText 
              primary={text}
              classes= {{
                primary: classes.listItemText,
              }}
            />
          </ListItem>
        ))}
      </List> */}
      <Box fontSize={24}>
        <NavLink to="/" variant="h4" className={classes.title} exact={true} >Home</NavLink>
        <NavLink to="/about" variant="h4" className={classes.title}>About</NavLink>
        <NavLink to="/event" variant="h4" className={classes.title}>Event</NavLink>
        <NavLink to="/member-2" variant="h4" className={classes.title}>Member(2)</NavLink>
        <NavLink to="/member-3" variant="h4" className={classes.item}>Member(3)</NavLink>
        <NavLink to="/question" variant="h4" className={classes.titleLast}>Q&A</NavLink>
      </Box>
    </div>
  );
      
  return (
    <header className={classes.header}>
      <Box display="flex" justifyContent="space-between" className={classes.hdBox}>
        <Typography variant="h1" className={classes.logo}>STING</Typography>
        <Hidden smDown>
          <Box display="flex" className={classes.list}>
            <NavLink to="/sting-hp" variant="h4" className={classes.item} exact={true} >Home</NavLink>
            <NavLink to="/about" variant="h4" className={classes.item}>About</NavLink>
            <NavLink to="/event" variant="h4" className={classes.item}>Event</NavLink>
            <NavLink to="/member-2" variant="h4" className={classes.item}>Member(2)</NavLink>
            <NavLink to="/member-3" variant="h4" className={classes.item}>Member(3)</NavLink>
            <NavLink to="/question" variant="h4">Q&A</NavLink>
          </Box>
        </Hidden>
        <Hidden mdUp>
        <div>
          {['top'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)} className={classes.icon} ><MenuIcon fontSize="large" /></Button>
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
        </Hidden>
      </Box>
    </header>
  );
};

export default Header