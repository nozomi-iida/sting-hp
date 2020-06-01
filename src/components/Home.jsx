import React from 'react';
import FirstviewImg from '../imgs/IMG_8922.JPG';
import Button from '@material-ui/core/Button';
import placeImg from '../imgs/tennis.JPG';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyle = makeStyles((theme) => ({
  inner: {
    margin: theme.spacing(3),
    padding: theme.spacing(2, 0),
  },
  title: {
    lineHeight: '1',
    position: 'relative',
    display: 'inline-block',
    fontWeight: 'bold',
    background: 'linear-gradient(transparent 75%, #F6D047 25%)',
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px"
    }
  },
  aboutText: {
    lineHeight: "45px",
  },
  fvImgWrap: {
    width: '100%',
    paddingTop: '80px',
  },
  fvImg: {
    width: '100%'
  },
  attractiveBox: {
    padding: theme.spacing(2),
  },
  attractiveContainer: {
    position: "relative",
  },
  attractiveText: {
    marginTop: theme.spacing(1),
  },
  video: {
    width: '100%',
  },
  placeWrap: {
    position: "relative",
  },
  placeBox: {
    marginTop: theme.spacing(4),
    lineHeight: "2",
  },
  placeImg: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
}));

export default () => {
  const classes = useStyle();
  return (
    <main>
        <section id="firstview">
          <div className={classes.fvImgWrap}>
            <img className={classes.fvImg} src={FirstviewImg} alt="" />
          </div>
          <Box className={classes.inner}>
            <Typography variant="h2" className={classes.title}>STINGとは？</Typography>
            <p className={classes.aboutText}>STINGは42年目を迎える明治学院大学公認のテニスサークルです。<br/>
            学年関係なくとっても仲が良いサークルでまるで家族のような雰囲気が特徴！<br/>
            テニサーってなんか怖い・・・世間体が・・・っていうのは全く当てはまらないし、入って続けている人はみんなSTINGを愛してる❤️<br/>
            一緒にSTINGで大学生活を楽しく、充実した時間にしよう!</p>
          </Box>
        </section>

      <section id="attractive">
        <Box className={classes.inner}>
          <Typography variant="h2" className={classes.title}>STINGの3つの魅力</Typography>
          <Grid container className={classes.attractiveContainer}>
            <Grid item xs={12} sm={4} className={classes.attractiveBox}>
              <Typography variant="h3">1.テニス</Typography>
              <Typography variant="h4" className={classes.attractiveText}>コーチが１から教えてくれるから初心者でも大丈夫！<br/>
                初心者、経験者関係なく、みんなが楽しめます！</Typography>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.attractiveBox}>
              <Typography variant="h3">2.イベント</Typography>
              <Typography variant="h4" className={classes.attractiveText}>幹部が楽しいイベントを企画してくれます！<br/>
                イベントを通じてサークルのみんなと仲良くなろう！</Typography>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.attractiveBox}>
              <Typography variant="h3">3.プライベート</Typography>
              <Typography variant="h4" className={classes.attractiveText}>プライベートでもサークルでよく遊ぶよ!<br/>
                STINGに入ればプライベートが充実すること間違いなし！？</Typography>
            </Grid>
          </Grid>
          <div className="button-box">
            <Button 
              variant="contained" 
              href="#contained-buttons" 
              className={classes.button}
              style={{
                backgroundColor:"#FDD000",
                padding: '10px 25px',
                fontSize: '20px'
              }}
            >
              詳しく知りたい！
            </Button>
          </div>
        </Box>
      </section>

      <section id="movie">
        <Box className={classes.inner}>
          <Typography variant="h2" className={classes.title}>STING紹介動画</Typography>
          <Box className="movie-wrap">
            <iframe title="movie" className="movie-wrap-iframe" width="560" height="315" src="https://www.youtube.com/embed/hQbe_Ib8np4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Box>
        </Box>
      </section>

      <section id="place">
        <div Box className={classes.inner}>
          <Typography variant="h2" className={classes.title}>STINGの活動場所</Typography>
          <Grid wrap="wrap-reverse" container className={classes.placeWrap}>
            <Grid item xs={12} sm={6}>
              <Box className={classes.placeBox}>
                <p>
                  活動場所：<br/>
                  立場テニスコート<br/>
                  （東京都大田区仲六郷２−６−７）<br/>
                </p>
              </Box>
              <Box className={classes.placeBox}>
                <p>
                  活動日：<br/>
                  毎週水曜日 16:00~18:00<br/>
                  （月に１〜２回ほど土曜日もあります）<br/>
                </p>
              </Box>
            </Grid>
            <Grid xs={12} sm={6} item >
              <img src={placeImg} alt="" className={classes.placeImg} />
            </Grid>
          </Grid>
        </div>
      </section>
    </main>
  )
};
