import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import May from '../imgs/May.JPG';
import June from '../imgs/June.JPG';
import July from '../imgs/July.JPG';
import August from '../imgs/August.JPG';
import December from '../imgs/December.JPG';
import September from '../imgs/September.JPG';
import November from '../imgs/November.JPG';
import March from '../imgs/September.JPG';
import October from '../imgs/October.jpg'

const useStyle = makeStyles ((theme) => ({
    container: {
        paddingTop: theme.spacing(12),
    },
    inner: {
        margin: theme.spacing(3),
        padding: theme.spacing(2, 0),
        [theme.breakpoints.down("sm")]: {
            margin: theme.spacing(2),
        },
    },
    title: {
        lineHeight: '1',
        position: 'relative',
        display: 'inline-block',
        fontWeight: 'bold',
        background: 'linear-gradient(transparent 75%, #F6D047 25%)',
    },
    description: {
        fontWeight: "bold",
        backgroundColor: "#FFF3BD",
        alignItems: "center",
        padding: theme.spacing(7),
        display: "flex",
        justifyContent: "center",
        lineHeight: "40px",
        width: "50%",
        boxSizing: "border-box",
        [theme.breakpoints.down("sm")]: {
            fontSize: "16px",
            width: "100%",
            lineHeight: "30px",
            padding: "7px",
        },
    },
    boxRight: {
        display: "flex",
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column-reverse"
        }
    },
    boxLeft: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row-reverse",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column-reverse"
        }
    },
    imgBox: {
        width: "50%",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        }
    },
    img: {
        width: "100%",
        height: "100%",
    },
    monthTitle: {
        display: "flex",
        marginBottom: theme.spacing(3),
        fontWeight: "bold",
        fontSize: "24px"
    },
    orangeBlock: {
        width: "5px",
    backgroundColor: "#FDD000",
    },
}));

const EventCardRight = (props) => {
    const classes = useStyle();

    return (
        <Box className={classes.inner} >
            {/* タイトル */}
            <Box className={classes.monthTitle}>
                <span>{props.Month}</span>  <div className={classes.orangeBlock}></div>    <span>{props.Title}</span>
            </Box>
            {/* //写真と説明 */}
            <Box className={classes.boxRight}>
                <Typography variant="h5" className={classes.description}>{props.exp}</Typography>
                {/* //説明文をpropsで受け取る */}
                <Box className={classes.imgBox}>
                    <img
                        src={props.img}    //imgをpropsで受け取る
                        alt="イベント写真"
                        className={classes.img}
                    />
                </Box>
            </Box>
        </Box>
    )
}


const EventCardLeft = (props) => {
    const classes = useStyle()
    return (
        <Box className={classes.inner} >
            {/* タイトル */}
            <Box className={classes.monthTitle}>
                <span>{props.Month}</span>  <div className={classes.orangeBlock}></div>    <span>{props.Title}</span>
            </Box>
            {/* //写真と説明 */}
            <Box className={classes.boxLeft}>
                <Typography variant="h5" className={classes.description}>{props.exp}</Typography>
                {/* //説明文をpropsで受け取る */}
                <Box className={classes.imgBox}>
                    <img
                        src={props.img}    //imgをpropsで受け取る
                        alt="イベント写真"
                        className={classes.img}
                    />
                </Box>
            </Box>
        </Box>
    );
}


const Event = ()=>{
    const classes = useStyle();
    return(
        <div className={classes.container}>
            {/* 
                imgはpublicフォルダ内に入れてパスしています
            */}
            <Box textAlign="center">
                <Typography variant="h2" className={classes.title}>イベント</Typography>
            </Box>
            <EventCardRight
                Month='4月'
                Title='BBQ'
                img={May}
                exp='先輩とたくさんお話できるし、みんなでわいわいできるよっ！！ 1年生は無料でお肉がたくさん食べられるのがポイント！笑 このあと1.2年でカラオケにいくよー！！'
            />

            <EventCardLeft
                Month='5月'
                Title='新歓合宿'
                img={June}
                exp='5月にある1年生初めての合宿！ たっくさんテニスできるよ！！ 初心者の子はコーチがいつも以上に丁寧に教えてくれるし、経験者の子は上手な人と打ち合えるし、試合もできるよ！ 一泊二日で短いけど、4年生やOB.OGも来てくれるので、積極的に話しかけてみよう！！ 優しくて面白い先輩がたくさんいるよ'
            />

            <EventCardRight
                Month='6月'
                Title='フレッシュマン'
                img={July}
                exp='フレッシュでキラキラな1.2年生だけでやる試合だよ 2年生の先輩と組んでダブルスをするよ！ ほかのテニスサークルと対戦するから、交友関係を広げる大チャンスだよ！ 勝ち進めば豪華な景品がもらえるかも？！'
            />

            <EventCardLeft
                Month='8月'
                Title='強化練'
                img={August}
                exp='夏合宿に向けてテニスを強化するよ！！ あっつい夏休みにみんな汗びしょびしょになりながら全力でテニスするよ '
            />
            <EventCardRight
                Month='9月'
                Title='夏合宿'
                img={September}
                exp='９月に行われる夏合宿！！ テニスはもちろんのこと、夏らしいこともたくさんするよ！ BBQ、肝試し、レクリエーションでは水風船をして楽しいことが盛り沢山！！ 夏休みでいちばんの思い出になること間違いなし'
            />
            <EventCardLeft
                Month='10月'
                Title='女ハロ'
                img={October}
                exp='女子だけでやるハロウィンパーティー🥳❤️みんなでかわいい仮装して女子会しちゃおう❤︎❤︎どんな仮装する〜〜？？🥰'
            />
            <EventCardRight
                Month='11月'
                Title='白金祭'
                img={November}
                exp='11月のはじめにある文化祭、白金祭！！
                STINGはパイナップルを売りました😘
                1.2年だけの行事は初めてだったけど、めちゃくちゃ楽しかった！！
                みんなのおかげでパイナップルを無事完売することができました👏🏼
                連盟のふたり、本当に疲れ様でした！！ありがとう😊'
            />
            <EventCardLeft
                Month='12月'
                Title='クリスマスミックス'
                img={December}
                exp='男女でペアを組んで試合をするよ １年生が組みたい先輩を誘うんだよ ドキドキだね クリスマスミックスは、ペアの先輩とコスプレの買い出しに行くのも楽しみのひとつ！！ 本当のカップルで組むリアルミックスがあったりして？！ '
            />
            <EventCardRight
                Month='3月'
                Title='春合宿'
                img={March}
                exp='２月に行われる春合宿は、２年生初仕切りの合宿！！ １年生のこと、２年生が楽しませてくれること間違いなし！！ 途中から先輩も遊びに来てくれるよっ！ 雪が積もってるときもあって少し寒いけど、たくさんテニスしてあったまろう！！'
            />
            
        </div>
    );
}

export default Event;