import  React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import May from '../imgs/May.JPG';

const useStyles = makeStyles((theme) => ({
    title: {
        lineHeight: '1',
        position: 'relative',
        display: 'inline-block',
        fontWeight: 'bold',
        background: 'linear-gradient(transparent 75%, #F6D047 25%)',
    },
    container: {
        paddingTop: theme.spacing(12),
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(0, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    names: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "24px",
        background: "linear-gradient(transparent 60%, #F6D047 60%)",
        [theme.breakpoints.down("sm")]: {
            fontSize: "16px",
        },
    },
    card: {
        height: '100%',
        backgroundColor:"#FDF3C3",
    },
    cardContent: {
        flexGrow: 1,
    },
    cardMediaSideTypography:{

        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "1.75rem",
        lineHeight: "29px",
        color:"#00000f",
    },
    cardContentTypography: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "1.64rem",
        lineHeight: "23px",
        color:"#00000f",
    }
}));


export default function Member() {
    const classes = useStyles();

    return (
        <React.Fragment>
            {/* <CssBaseline /> */}
            <main className={classes.container}>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Box textAlign="center">
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.title}>
                                STINGの仲間たち
                            </Typography>
                        </Box>
                        <Typography variant="h5" component={"p"} align="center" color="textSecondary" paragraph
                                    style={{
                                        fontFamily: "Roboto",
                                        fontStyle: "normal",
                                        fontWeight: "500",
                                        fontSize: "30px",
                                        color: "#000000",
                                    }}
                        >
                            2年
                        </Typography>
                        <Grid container>
                        {members.map(member=>(
                            <Grid item xs={3}>
                            <Typography variant="caption" align="center" color="textPrimary" gutterBottom className={classes.names}>
                                <a href={`#${member.id}`} >
                                    {member.name}
                                </a>
                            </Typography>
                            </Grid>
                        ))}
                        </Grid>
                    </Container>
                </div>
                <Container className={classes.cardGrid, classes.tag} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {members.map((member,index) => (
                            <Grid item key={index} xs={12} sm={6} md={4} id={member.id}>
                                <Card className={classes.card}>
                                    <Grid container 
                                          direction="row"
                                          justify="center"
                                          alignItems="center"
                                    >
                                        <Box item >
                                            <img
                                                style={{
                                                    height:"171px",
                                                    marginTop:"10px"
                                                }}
                                                className={classes.cardMedia}
                                                src={member.img}
                                                alt="Image title"
                                            />
                                        </Box>
                                    </Grid>
                                    <CardContent >
                                        <Typography className={classes.cardMediaSideTypography}>
                                            {member.name}
                                        </Typography>
                                        <Typography className={classes.cardMediaSideTypography}>
                                            {member.ruby}
                                        </Typography>
                                        <Typography className={classes.cardMediaSideTypography}>
                                            {member.role}
                                        </Typography>
                                        <Typography className={classes.cardMediaSideTypography}
                                                    style={{
                                                        fontSize:"14px"
                                                    }}
                                        >
                                            {member.faculty}
                                        </Typography>
                                    </CardContent>
                                    <CardContent className={classes.cardContent}>
                                        <Typography className={classes.cardContentTypography}>
                                            {member.note.split('\n').map((str, index) => (
                                                <React.Fragment key={index}>{str}<br /></React.Fragment>
                                            ))}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const members = [
    {
        id: "suzuki",
        name:"鈴木了介",
        ruby:"(すずきりょうすけ)",
        role:"渉内補佐・コーチ",
        faculty:"法学部・消費情報環境学科",
        note:"やまたくの弟子一人目、鈴木了介🙋🏽\nSTING大好きなリョウスケはいつも遊びの計画を立ててくれるよ！\n盛り上げ上手なリョウスケと遊べば楽しいこと間違いなし🤩\nやまたくの弟子だから、なんでも奢ってくれるはずだよ😉",
        img: `${May}`
    },

    {
        id: "ookuma",
        name:"大熊勇輝",
        ruby:"(おおくまゆうき)",
        role:"渉内補佐・連盟",
        faculty:"文学部・フランス文学科",
        note:"愛称はクマ🐻\nインスタでSTINGのアーカイブ投稿をこっそりしている実はサークル愛が深い系男子🐻❤️\nそんなクマは千葉に住んでるレアものだよ！🐻\nザイザイと千葉住みは集まれ〜！！🐻💫",
        img: `${May}`
    },

    {
        id: "kurokawa",
        name:"黒川龍司",
        ruby:"(くろかわりょうじ)",
        role:"渉外補佐",
        faculty:"心理学部・心理学科",
        attraction:"先輩・後輩関係なく仲が良い事",
        note:"見た目通りの優しさとノリの良さから''子牛君''って呼ばれてるよ🐮\nマジメとおバカを兼ね備えた逸材😂😂\n素直で泣き虫なところも可愛いよ😬\n出会った人を虜にする謎の魅力がある？？🧐\nそんなりょじくんは年中彼女募集中だから１女のみんなは今がチャンス！！🌟",
        img: `${May}`
    },
    {
        id: "takaoka",
        name:"高岡大智",
        ruby:"(たかおかたいち)",
        role:"渉外補佐・四団体",
        faculty:"経済学部・経済学科",
        attraction:"先輩・後輩関係なく仲が良い事",
        note:"四団体のイケメンたいち🕺🏽💕\n服が趣味のたいちは、古着巡りやショッピングが大好きなの！！\nハイブランドすぎてトータルコーディネート○○万円のときもあるらしい？！🤑\nそんなたいちといっしょにショッピングしたい子は集まれっ😻😻",
        img: `${May}`
    },
    {
        id: "egasira",
        name:"江頭柚衣",
        ruby:"(えがしらゆい)",
        role:"渉内補佐・連盟",
        faculty:"文学部・英文学科",
        note:"やまたくの弟子二人目、江頭柚衣🙋🏽‍♀️\n極度の人見知りゆいちゃん。\n初対面だと全く話さないし控えめなのに、仲良くなるとよくしゃべる？？😆\n一人暮らししてるからたくさん遊びに行って、ゆいちゃんの本性知っちゃおう😍",
        img: `${May}`
    },
    {
        id: "nakamura",
        name:"中村友美",
        ruby:"(なかむらともみ)",
        role:"渉内補佐・コーチ",
        faculty:"国際学部・国際学科",
        note:"ともみの愛称は「てぃも」🧚‍♀️\nテニスがうまくて、スタイル抜群で、とーっても美人さんだけど、残念ながら単位なし🤦🏽‍♀️🤦🏽‍♀️\n２年はまともに過ごすみたいだけど、STINGのみんなといると単位のことなんて忘れちゃうからたくさん遊んでくれるはず！！😂\n今から留年しないか心配だよ🤧",
        img: `${May}`
    },
    {
        id: "kaneko",
        name:"金子莉帆",
        ruby:"(かねこりほ)",
        role:"渉外補佐",
        faculty:"文学部・フランス文学科",
        note:"テニスがとっても上手なりほ！！🎾\n初心者の子はりほに教えてもらえば絶対うまくなるよっ😻\nそんなりほは優しくて、話しやすいの！！\n１年生はフレンドリーなりほのところに集合❣️",
        img: `${May}`
    },
    {
        id: "hamada",
        name:"濱田彩摘",
        ruby:"(はまだあつみ)",
        role:"渉外補佐",
        faculty:"社会学部・社会福祉学科",
        note:"あつみの愛称は「あったん」👼🏼可愛いくて、ちょっぴり天然なあったんのことがみんなだーいすきなの🤤❤️そんなあったんは巫女さんのバイトしてて、実は双子っていうウワサだよ🤭いっしょに遊んだらイチコロ😏あったんと遊びたい１年生は集合❤︎❤︎",
        img: `${May}`
    },
    {
        id: "akeno",
        name:"明野響香",
        ruby:"あけのきょうか)",
        role:"渉内補佐",
        faculty:"社会学部・社会福祉学科",
        note:"あったんとニコイチきょうか👩‍❤️‍👩\nきょうかのあざとさに男子はみんな騙されちゃう🤦🏽‍♀️🤦🏽‍♀️\n１男は気をつけるべし！！⚠️笑\nそんなきょうかはすっごいお金持ちだからたくさん奢ってもらおう！！🤑！！",
        img: `${May}`
    },
    {
        id: "harada",
        name:"原田莉里",
        ruby:"(はらだりり)",
        role:"渉外補佐",
        faculty:"社会学部・社会学科",
        note:"愛されキャラのりり！！💖\nフレンドリーで誰とでもすぐ仲良くなっちゃう😘\nそんなりりは怒ると、ふぐみたいに口を膨らますからみんなから''ふぐ🐡''って呼ばれてるよ😉\n怒ったりりから発射されるちぇるちぇるびーむ⚡️を見たい子は集まれ〜！🙋🏽‍♀️🙋🏽‍♀️",
        img: `${May}`
    },
    {
        id: "an",
        name:"安紀香",
        ruby:"(あんきひゃん)",
        role:"渉外補佐",
        faculty:"社会学部・社会学科",
        note:"がんちゃんことあんちゃん！！😆\nとーっても優しいあんちゃんは最近２年生のみんなを引っ張ってくれてるみたい❣️\nテニス初心者だけど、どんどんうまくなってるよ！！🎾\nそんなあんちゃんはお洒落なカフェに詳しいから連れて行ってもらおう☕️💗",
        img: `${May}`
    },
    {
        id: "abe",
        name:"阿部星空",
        ruby:"(あべせいら)",
        role:"渉内補佐",
        faculty:"国際学部・国際学科",
        note:"ラストはタリーズでバイトしてるオシャレガールせいら☕️💕\nそんなせいらは人見知りで、いつも機嫌悪そうだよ😂😂\nだけどホントはすっごい良い子で、１年生のみんなから話しかけられたら喜ぶと思う！！笑\nいつも金欠って騒いでるけど、かわいい１年生のためならたくさん奢ってくれるよ😘",
        img: `${May}`
    },
]