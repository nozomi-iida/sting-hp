import React from "react";
import { Box, Typography } from "@material-ui/core";
import tennisImg from "../imgs/tennisPicture.JPG";
import eventImg from "../imgs/event.JPG";
import privaetImg from "../imgs/private.JPG";
import { makeStyles } from "@material-ui/core/styles";

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
  section: {
    width: "84%",
    margin: "0 auto 100px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      margin: "0 auto 30px",
    },
  },
  secTitleBox: {
    display: "inline-block",
    // width: "100%",
    height: "70px",
    borderLeft: "16.8px solid #FDD000",
    backgroundColor: "#FFF3BD",
    boxShadow: "3px 3px 3px",
    padding: "0 5%",
    lineHeight: "70px",
    position: "relative",
    top: 0,
    left: 0,
    [theme.breakpoints.down("sm")]: {
      // width: "100%",
      height: "40px",
      lineHeight: "40px",
      borderLeft: "8px solid #FDD000",
      backgroundColor: "#FFF3BD",
    },
  },
  secTitle: {
    display: "inline-block",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "35px",
    textAlign: "center",
    verticalAlign: "middle",
    // lineHeight: "100%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  img: {
    width: "84%",
    margin: "37px auto",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      margin: "15px auto",
    },
  },
  description: {
    width: "84%",
    margin: "37px auto",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: "24px",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      margin: "15px auto",
      fontSize: "16px",
    },
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <main id="about-page" className={classes.container}>
      {/* <Box textAlign="center">
        <h1 className={classes.ttl}>STINGの3つの魅力</h1>
      </Box> */}
      <Box textAlign="center">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.title} >
            STINGの3つの魅力
          </Typography>
      </Box>
      <section className={classes.section}>
        <div className={classes.secTitleBox}>
          <h2 className={classes.secTitle}>テニス</h2>
        </div>
        <div className={classes.img}>
          <img
            src={tennisImg}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </div>
        <p className={classes.description}>
          毎週水曜日に練習があります。
          一つのコートに一人ずつコーチがつき、コーチが毎回楽しい練習メニューを考えてくれます！
          テニスが初心者の人でもコーチが１から丁寧に教えてくれるから安心です！
          経験者はもちろん、初心者も大歓迎です！！
        </p>
      </section>
      <section className={classes.section}>
        <div className={classes.secTitleBox}>
          <h2 className={classes.secTitle}>イベント</h2>
        </div>
        <div className={classes.img}>
          <img
            src={eventImg}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </div>
        <p className={classes.description}>
          STINGにはテニス以外にもBBQをしたり、球技大会をしたりとイベントが盛り沢山です！
          イベントを通じてサークルのメンバー全員と仲良くなれること間違いなし？！
          イベントを通じて達成感や団結力といった普段の大学生活では得られない体験ができます！
        </p>
      </section>
      <section className={classes.section}>
        <div className={classes.secTitleBox}>
          <h2 className={classes.secTitle}>プライベート</h2>
        </div>
        <div className={classes.img}>
          <img
            src={privaetImg}
            alt=""
            style={{
              width: "100%",
            }}
          />
        </div>
        <p className={classes.description}>
          STINGは先輩・後輩関係なく色々な人と遊んだり色々な場所に出かけたりします。
          ドライブに行ったり、ディズニーにいったりとSTINGに入れば遊びに困ることはないでしょう（笑）
          STINGに入ればプライベートも充実させちゃおう！
        </p>
      </section>
    </main>
  );
};

export default About;
