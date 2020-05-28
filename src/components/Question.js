import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  title:{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    margin:'0 auto',
    marginBottom:'26px',
    width:'120px',
    height:'55px',
    fontSize:'50px',
    lineHeight:'59px', 
    background: "linear-gradient(transparent 60%, #F6D047 60%)",
    [theme.breakpoints.down("sm")]: {
    fontSize:'30px',
    width:'75px',
    height:'40px',
    background: "linear-gradient(transparent 80%, #F6D047 80%)",
    },                
  },
   root: {
    width: '80%',
    margin:' 0 auto',
    marginBottom:'40px',
    [theme.breakpoints.down("sm")]: {
    width:'100%',
    marginBottom:'15px',
    },
  },
  ExpansionPanelSummary:{
    [theme.breakpoints.down("sm")]: {
    padding:'5px',
    },
  },
  headingimage:{
    width:'50px',
    height:'50px',
    padding:'10px',
    [theme.breakpoints.down("sm")]: {
    width:'30px',
    height:'30px',
    padding:'0',
    },
  },
  heading: {
    fontSize: '30px',
    fontWeight: 'bold',
    display:'flex',
    alignItems: 'center',
    marginLeft:'30px',
    [theme.breakpoints.down("sm")]: {
    fontSize:'16px',
    lineHeight: '19px',
    marginLeft:'10px',
    },
  },
  tag:{
    fontSize:'30px',
    fontWeight: '500',
    [theme.breakpoints.down("sm")]: {
    fontSize:'16px',
    }
  },
  tagimage:{
    width:'50px',
    height:'50px',
    padding:'10px',
    margin:'10px',
    [theme.breakpoints.down("sm")]: {
    width:'20px',
    height:'20px',
    padding:'5px',
    margin:'5px',
    },
  },
  tagtext:{
    width:'85%',
    [theme.breakpoints.down("sm")]: {
    width:'90%',
    height:'100%',
    lineHeight:'19px',
    padding:'14px 0',
    },
  },
}));


const Question = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <h1 className={classes.title} align={'center'}>
                Q&A
            </h1>
            <div className={classes.root}>
                <ExpansionPanel style={{backgroundColor:'#FFF3BD'}}>
                    <ExpansionPanelSummary className={classes.ExpansionPanelSummary} expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Avatar className={classes.headingimage} src="/broken-image.jpg" />
                        <Typography className={classes.heading}>テニスサークルってチャラいですか？</Typography>
                        <div className={classes.plus}></div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                    <Typography className={classes.tag} style={{backgroundColor:'white',display:'flex'}}>
                        <Avatar className={classes.tagimage} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <div className={classes.tagtext}>
                        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
                        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
                        </div>
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel style={{backgroundColor:'#FFF3BD'}}>
                    <ExpansionPanelSummary className={classes.ExpansionPanelSummary} expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Avatar className={classes.headingimage} src="/broken-image.jpg" />
                        <Typography className={classes.heading}>テニスサークルってチャラいですか？</Typography>
                        <div className={classes.plus}></div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                    <Typography className={classes.tag} style={{backgroundColor:'white',display:'flex'}}>
                        <Avatar className={classes.tagimage} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <div className={classes.tagtext}>
                        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
                        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
                        </div>
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel style={{backgroundColor:'#FFF3BD'}}>
                    <ExpansionPanelSummary className={classes.ExpansionPanelSummary} expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Avatar className={classes.headingimage} src="/broken-image.jpg" />
                        <Typography className={classes.heading}>テニスサークルってチャラいですか？</Typography>
                        <div className={classes.plus}></div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                    <Typography className={classes.tag} style={{backgroundColor:'white',display:'flex'}}>
                        <Avatar className={classes.tagimage} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <div className={classes.tagtext}>
                        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
                        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
                        </div>
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            <div className={classes.root}>
                <ExpansionPanel style={{backgroundColor:'#FFF3BD'}}>
                    <ExpansionPanelSummary className={classes.ExpansionPanelSummary} expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Avatar className={classes.headingimage} src="/broken-image.jpg" />
                        <Typography className={classes.heading}>テニスサークルってチャラいですか？</Typography>
                        <div className={classes.plus}></div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                    <Typography className={classes.tag} style={{backgroundColor:'white',display:'flex'}}>
                        <Avatar className={classes.tagimage} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <div className={classes.tagtext}>
                        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
                        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。
                        </div>
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </React.Fragment>
    )
}

export default Question