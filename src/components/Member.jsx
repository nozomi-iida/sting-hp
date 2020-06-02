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
    tag: {
        display: "block",
        paddingTop: "70px",
        marginTop: "-70px",
    },
    icon: {
        marginRight: theme.spacing(2),
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
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor:"#FDF3C3",
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
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
                            3年
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
                                    <Grid container style={{
                                        height:"171px"
                                    }}
                                          direction="row"
                                          justify="center"
                                          alignItems="center"
                                    >
                                        <Grid item xs={5}>
                                            <CardMedia
                                                style={{
                                                    height:"171px",
                                                    marginLeft:"6px"
                                                }}
                                                className={classes.cardMedia}
                                                // image={member.img}
                                                src= {member.img}
                                                title="Image title"
                                            />
                                        </Grid>
                                        <Grid item xs={7}
                                              style={{
                                                  paddingLeft:"20px"
                                              }}
                                        >
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
                                        </Grid>
                                    </Grid>
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
        id: "yamada",
        name:"山田たくみ",
        role:"部長",
        faculty:"経済学部・経営学科",
        note:"部長の愛称は「やまたく」！！STINGへの想いが人一倍強くて、常に色んな企画や楽しいことを考えてくれる部長！\nフレンドリーだから誰とでもすぐ打ち解けちゃうやまたく😊\n優しさのあまり後輩になんでも奢っちゃうからいっつも金欠💸笑\n単位は全然ないからそこは参考にならないかも🥺🥺\n戸塚に住んでるからみんなで遊びに行って、鍋パとかタコパしてたよ！！\nこれからも戸塚に住み続けるらしいから1年生のみんなも遊びに行っちゃおう😂",
        // img: "https://source.unsplash.com/random",
        img: "/baby-steps.jpeg"
    },

    {
        id: "nabeta",
        name:"鍋田篤希",
        ruby:"(なべたあつき)",
        role:"副部長・渉内部長・コーチ",
        faculty:"文学部・フランス文学科",
        note:"実はたっくさん役職についてるなべあつ！！\nコーチでテニス上手だからみんな勝負を挑んでみてっ🎾\n自称パーフェクトヒューマンNABETAくんはなんと誰もが知ってるアパレル店員！！\nお店のInstagramにも載ってるらしい🤭\nそんなあつきはお金たくさん持ってるみたいだから１年生は奢ってもらおう😘",
        img: {May},
    },

    {
        id: "iguti",
        name:"井口勇飛",
        ruby:"(いぐちゆうひ)",
        role:"渉外部長",
        faculty:"心理学部・心理学科",
        attraction:"先輩・後輩関係なく仲が良い事",
        note:"一大イベントの合宿を仕切ってくれる勇飛は実はとっても頼りになるの👊🏼\n３男でいちばんイケメンな勇飛はクールで優しい！\nしかもこの顔で歌がめちゃくちゃうまい！！\nいっしょにカラオケ行ったら惚れちゃうよ😳\n勇飛の歌声を聞きたい１年生はカラオケに連れて行ってもらおう🎤",
    },
    {
        id: "watanabe",
        name:"渡邉絢介",
        ruby:"(わたなべしゅんすけ)",
        role:"渉内・連盟",
        faculty:"経済学部・経済学科",
        attraction:"先輩・後輩関係なく仲が良い事",
        note:"「しゅんちゃん👼🏼」って呼ばれてみんなに可愛がられてるけど、実はブラックな一面もある「しゅんさん😈」\nそんなしゅんちゃんは白金祭を仕切ってくれたうちのひとり！\n表には出さないけどSTING愛が強いよ🥰\nあざといしゅんちゃんは甘いものダイスキだから、お洒落なカフェに連れて行ってもらおう☕️",
    },
    {
        id: "hasegawa",
        name:"長谷川冬馬",
        ruby:"(はせがわふゆま)",
        role:"渉外・四団体",
        faculty:"法学部・グローバル法学科",
        note:"「特技けん玉」の隠キャだけど、コミュ力高くて場を盛り上げる天才🤩\nでも平気な顔して嘘ばっかりつくから１年生のみんなは注意だよ🤥\n最近やっとバイトを始めて忙しいアピールしてるけど、基本暇人だから呼べばどこにでも来てくれるよ！\n１年生のみんなはたくさん遊んでもらおう！！😻",
    },
    {
        id: "umemura",
        name:"梅村京伸",
        ruby:"(うめむらけいしん)",
        role:"渉外・四団体",
        faculty:"心理学部・心理学科",
        note:"後輩想いで心優しいけーしん！！\nだけど、後輩から呼び捨てにされるほどなめられてるの🥺\nそんなけーしんの好物はラーメンだよ🍜\n毎日のようにラーメン食べてるからお腹がぽっこり🤰🏽\n戸塚にある「源泉」っていうラーメン屋さんがおすすめ！！\n１年生は連れて行ってもらおう🙌🏼",
    },
    {
        id: "terasima",
        name:"寺島楽",
        ruby:"(てらしまがく)",
        role:"ヘッドコーチ",
        faculty:"法学部・政治学科",
        note:"女の子にはとーっても優しいがくしゃん！！😍\nだけど男の子には厳しくて、自分よりイケメンだとすぐ嫉妬しちゃうの🤧\n実際そんなかっこよくないんだけどね！！笑\nテニスやってるときはかっこいいけど🤔\nそんながくしゃんは気さくで話しやすいから、みんな集まれ〜〜！",
    },
    {
        id: "taguti",
        name:"田口あかり",
        ruby:"(たぐちあかり)",
        role:"渉内・会計",
        faculty:"社会学部・社会学科",
        note:"人見知りで恥ずかしがり屋なあかりちゃん。\n純粋な心と体でみんなを癒してくれる最強の癒し系。\nここまでの話はうわべの姿、、、\n本当はうるさくて、いつも元気で、みんなを笑わせてくれるムードメーカー🥳\n頼まれたら断れない性格だからいっぱいおねだりしちゃおう！！😘",
    },
    {
        id: "nomoto",
        name:"野本葵",
        ruby:"(のもとあおい)",
        role:"渉内・連盟",
        faculty:"経済学部・経営学科",
        note:"STINGのふっ軽代表あおい😂\nとにかくフレンドリーで陽気🌈\n誘われた遊びは全力で参加しちゃうよ！！\nワンちゃんのように無邪気に遊びまわるあおいはみんなの癒し🐶❤︎\nバイトもしてるけどなによりおうちがお金持ちなの🤑\nふっ軽で羽振りがいいあおいにたっくさん遊んでもらおう！！",
    },
    {
        id: "haradaguti",
        name:"原田口泰子",
        ruby:"(はらだぐちやすこ)",
        role:"渉外・書記",
        faculty:"心理学部・心理学科",
        note:"３女のお姉さんキャラやすこ！！\nとっても優しくて、一見落ち着いてるように見えるけど、実はいじられキャラ？？🤫\nテニスは初心者だったけど、持ち前の運動神経でメキメキ上達！🎾\nバド部だったおかげかサーブがめちゃくちゃ速いの！それには男子もびっくりするんだとか🤯\n初心者の1年生はコツを伝授してもらおう！！",
    },
    {
        id: "wakabayasi",
        name:"若林京香",
        ruby:"わかばやしきょうか)",
        role:"渉外・保健",
        faculty:"社会学部・社会学科",
        note:"しっかり者に見えて、実は泣き虫のきょんちゃん😂\nたまに毒吐くときもあるから気をつけて⚠️笑\nおしゃれタウンに一人暮らししてて、料理がすっごく上手だよ👀\nそんな京香はテニスも上手！！🎾\nテニスを一緒にするも良し！遊ぶも良し！\nいっぱい話しかけちゃおう😘😘",
    },
    {
        id: "ikeda",
        name:"池田早織",
        ruby:"(いけださおり)",
        role:"渉外・会計",
        faculty:"経済学部・経営学科",
        note:"いつも元気いっぱいさおりちゃん！！\n常にテンション高いからみんなついていけないの😂😂\n鬼滅の刃が大好きで、アニメに詳しいからアニメ好きの子は話しかけてみて〜！！\nそんな早織はバイト経験豊富だから、まだバイトしてない子は話聞いてみるのもいいかも👀",
    },
    {
        id: "mimura",
        name:"三村妃子",
        ruby:"(みむらひこ)",
        role:"渉外・デジ",
        faculty:"社会学部・社会福祉学科",
        note:"いつも笑顔で明るく元気なひこ！！(ちょっとやかましいかも笑)\nそんなひこはスタバでバイトしてるよ〜〜！☕️\nスタバでバイトしたい子集合だよ🤚🏼🤚🏼\nしっかりしていて、面倒見がいい🧐から困ったことがあったらなんでも聞いてみよう！！😻",
    },
]

