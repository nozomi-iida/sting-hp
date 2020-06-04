import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import yamada2 from '../memberImages/yamada2.png';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(12),
    },
    title: {
        lineHeight: '1',
        position: 'relative',
        display: 'inline-block',
        fontWeight: 'bold',
        background: 'linear-gradient(transparent 75%, #F6D047 25%)',            
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
    fontSize: '16px',
    fontWeight: 'bold',
    display:'flex',
    alignItems: 'center',
    marginLeft:'30px',
    [theme.breakpoints.down("sm")]: {
    lineHeight: '19px',
    marginLeft:'10px',
},
},
tag:{
    lineHeight: '2',
    fontSize:'16px',
    fontWeight: '500',
    [theme.breakpoints.down("sm")]: {
    fontSize:'16px',
    }
  },
  tagimage:{
    width:'70px',
    height:'70px',
    padding:'10px',
    margin:'10px',
    // [theme.breakpoints.down("sm")]: {
    // width:'20px',
    // height:'20px',
    // padding:'5px',
    // margin:'5px',
    // },
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
            <div className={classes.container}>
                <Box textAlign="center">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.title} >
                        Q&A
                    </Typography>
                </Box>
                <div className={classes.root}>
                    <ExpansionPanel style={{backgroundColor:'#FFF3BD'}}>
                        <ExpansionPanelSummary className={classes.ExpansionPanelSummary} expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <Avatar className={classes.headingimage} src="/broken-image.jpg" />
                            <Typography className={classes.heading}>経験者と未経験者の比率を知りたいです！</Typography>
                            <div className={classes.plus}></div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails >
                        <Typography className={classes.tag} style={{backgroundColor:'white',display:'flex', width:'100%' }}>
                            <Avatar className={classes.tagimage} alt="Remy Sharp" src={yamada2} />
                            <p className={classes.tagtext}>
                                経験者が24人初心者が16人と比率は3：2ほどとなっております！😁<br/>
                                経験者だけでなく初心者も沢山います！<br/>
                                また初心者コートと言ってテニス初心者の方も気軽にテニスを楽しめるものも用意しているので初心者の方も大歓迎してます！🎾
                            </p>
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
                        <Typography className={classes.tag} style={{backgroundColor:'white',display:'flex', width:'100%' }}>
                            <Avatar className={classes.tagimage} alt="Remy Sharp" src={yamada2} />
                            <p className={classes.tagtext}>
                            僕も大学入学当初はテニスサークルに対してチャラいなどのマイナスイメージを持ってました笑😅でも！STINGの動画や幹部紹介などを見ていただければわかるのですが本当に面白く優しい人ばかりです！🥰それを踏まえつつ公開練習などで雰囲気を直に味わってもらうのが1番だと思います！！🤲<br/>
                            百聞一見にしかずです！😁
                            </p>
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
                <div className={classes.root}>
                    <ExpansionPanel style={{backgroundColor:'#FFF3BD'}}>
                        <ExpansionPanelSummary className={classes.ExpansionPanelSummary} expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <Avatar className={classes.headingimage} src="/broken-image.jpg" />
                            <Typography className={classes.heading}>新歓行きたいんですけどいつ行われますか？</Typography>
                            <div className={classes.plus}></div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails >
                        <Typography className={classes.tag} style={{backgroundColor:'white',display:'flex', width:'100%' }}>
                            <Avatar className={classes.tagimage} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <p className={classes.tagtext}>
                            今のところ未定です🙇‍♂️<br/>
                            予定が決まり次第Twitterや公式LINEですぐにお知らせするので少々お待ち下さい🤲<br/>
                            早くコロナが治って欲しいです😭
                            </p>
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
                <div className={classes.root}>
                    <ExpansionPanel style={{backgroundColor:'#FFF3BD'}}>
                        <ExpansionPanelSummary className={classes.ExpansionPanelSummary} expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <Avatar className={classes.headingimage} src="/broken-image.jpg" />
                            <Typography className={classes.heading}>今まで書いてないサークルの楽しさとか良いところあったら教えてください！</Typography>
                            <div className={classes.plus}></div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails >
                        <Typography className={classes.tag} style={{backgroundColor:'white',display:'flex', width:'100%' }}>
                            <Avatar className={classes.tagimage} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <p className={classes.tagtext}>
                            サークルのいい所は、サークルに入らなかったら絶対に交れなかった先輩後輩同期と繋がれて仲良くなれることやサークルに入っているからこそ、通常の大学生活では体験できないようなことが思い出を作ることが出来ることです！！😁<br/>
                            色々な人と交わることができて本当に毎日が楽しいです🎾
                            </p>
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </div>
            <div className={classes.root}>
                    <ExpansionPanel style={{backgroundColor:'#FFF3BD'}}>
                        <ExpansionPanelSummary className={classes.ExpansionPanelSummary} expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <Avatar className={classes.headingimage} src="/broken-image.jpg" />
                            <Typography className={classes.heading}>公開練習やお食事会に定員とかありますか？</Typography>
                            <div className={classes.plus}></div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails >
                        <Typography className={classes.tag} style={{backgroundColor:'white',display:'flex', width:'100%' }}>
                            <Avatar className={classes.tagimage} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <p className={classes.tagtext}>
                            今のところ定員などは設けておりません！お気軽にご参加ください！😁<br/>
                            今後の新歓の予定などの連絡はLINEの方で行うので是非公式LINEお友達追加お願いします！🤲🎾
                            </p>
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            <div className={classes.root}>
                    <ExpansionPanel style={{backgroundColor:'#FFF3BD'}}>
                        <ExpansionPanelSummary className={classes.ExpansionPanelSummary} expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                            <Avatar className={classes.headingimage} src="/broken-image.jpg" />
                            <Typography className={classes.heading}>ラケット持ってなくても大丈夫ですか？</Typography>
                            <div className={classes.plus}></div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails >
                        <Typography className={classes.tag} style={{backgroundColor:'white',display:'flex', width:'100%' }}>
                            <Avatar className={classes.tagimage} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            <p className={classes.tagtext}>
                            初心者の方も沢山いますので是非きてください！！😁<br/>
                            ラケットはこちらで貸し出しするつもりなので手ぶらでも大丈夫ですよー👍
                            </p>
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
        </React.Fragment>
    )
}

export default Question