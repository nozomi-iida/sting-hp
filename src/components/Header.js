import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';



const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function Header() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <header>
      <div className="hd-wrap">
        <h1 className="hd-logo">STING</h1>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
          <BottomNavigationAction label="" value="recents" icon={'Home'} />
          <BottomNavigationAction label="" value="favorites" icon={'About'} />
          <BottomNavigationAction label="" value="nearby" icon={'Event'} />
          <BottomNavigationAction label="" value="folder" icon={'Member'} />
          <BottomNavigationAction label="" value="Q&A" icon={'Q&A'} />
        </BottomNavigation>
      </div>
    </header>
  );
}

export default Header