import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';


const useStyle = makeStyles((theme) =>({
  inner: {
    padding: theme.spacing(2, 2, 0, 2),
    background: "#F2F2F2",
    marginTop: theme.spacing(3)
  },
  logo: {
    color: '#FDD000',
    fontWeight: 'bold',
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px"
    }
  },
  listItem: {
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      fontSize: "11px",
      marginRight: theme.spacing(2),
    }
  },
  icon: {
    fontSize: '35px',
    color: '#000',
    marginRight: theme.spacing(3)
  }
}))

export default () => {
  const classes = useStyle();
  return (
    <section id="footer">
      <Box className={classes.inner} >
        <Box display="flex">
          <Typography variant="h4" className={classes.listItem}>Home</Typography>
          <Typography variant="h4" className={classes.listItem}>About</Typography>
          <Typography variant="h4" className={classes.listItem}>Event</Typography>
          <Typography variant="h4" className={classes.listItem}>Member(2)</Typography>
          <Typography variant="h4" className={classes.listItem}>Member(3)</Typography>
          <Typography variant="h4" className={classes.listItem}>Q&A</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h1" className={classes.logo} align="center" >STING</Typography>
          <Box display="flex" alignItems="flex-end">
            <ListItem>
              <Link href="https://twitter.com/mgu_sting2020" >
                  <TwitterIcon className={classes.icon} />
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/mgu_sting2020/?hl=ja">
                <InstagramIcon className={classes.icon} />
              </Link>
            </ListItem>
          </Box>
        </Box>
      </Box>
    </section>
  )
} 