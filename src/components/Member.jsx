import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
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
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom
                                    style={{
                                        fontFamily: "Roboto",
                                        fontStyle: "normal",
                                        fontWeight: "bold",
                                        fontSize: "50px",
                                        background: "linear-gradient(transparent 60%, #F6D047 60%)"
                                    }}
                        >
                            STINGの仲間たち
                        </Typography>
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
                            <Typography variant="caption" align="center" color="textPrimary" gutterBottom
                                        style={{
                                            fontFamily: "Roboto",
                                            fontStyle: "normal",
                                            fontWeight: 500,
                                            fontSize: "24px",
                                            background: "linear-gradient(transparent 60%, #F6D047 60%)"
                                        }}
                            >
                                {member.name}
                            </Typography>
                            </Grid>
                        ))}
                        </Grid>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {members.map((member,index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
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
                                                image="https://source.unsplash.com/random"
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
                                            好きなこと：{member.hobby}
                                        </Typography>
                                        <Typography className={classes.cardContentTypography}>
                                            バイト先：{member.job}
                                        </Typography>
                                        <Typography className={classes.cardContentTypography}>
                                            STINGの好きなイベント：{member.favoritePoint}
                                        </Typography>
                                        <Typography className={classes.cardContentTypography}>
                                            STINGの魅力：{member.attraction}
                                        </Typography>
                                        <Typography className={classes.cardContentTypography}>
                                            ひとこと：{member.note}
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
        name:"山田たくみ",
        role:"部長",
        faculty:"経済学部・経営学科",
        hobby:"音楽を聞く",
        job:"東京ディズニーランド",
        favoritePoint:"春合宿",
        attraction:"先輩・後輩関係なく仲が良い事",
        note:"一年生のみなさん！ご入学おめでとうござます！コロナウイルスの影響で影響で異例の大学生活スタートとなってしまいましたが、皆さんに早く会えることを心よりお待ちしています！",

    },

    {
        name:"山田たくみ",
        role:"部長",
        faculty:"経済学部・経営学科",
        hobby:"音楽を聞く",
        job:"東京ディズニーランド",
        favoritePoint:"春合宿",
        attraction:"先輩・後輩関係なく仲が良い事",
        note:"一年生のみなさん！ご入学おめでとうござます！コロナウイルスの影響で影響で異例の大学生活スタートとなってしまいましたが、皆さんに早く会えることを心よりお待ちしています！",

    },

    {
        name:"山田たくみ",
        role:"部長",
        faculty:"経済学部・経営学科",
        hobby:"音楽を聞く",
        job:"東京ディズニーランド",
        favoritePoint:"春合宿",
        attraction:"先輩・後輩関係なく仲が良い事",
        note:"一年生のみなさん！ご入学おめでとうござます！コロナウイルスの影響で影響で異例の大学生活スタートとなってしまいましたが、皆さんに早く会えることを心よりお待ちしています！",

    },
    {
        name:"山田たくみ",
        role:"部長",
        faculty:"経済学部・経営学科",
        hobby:"音楽を聞く",
        job:"東京ディズニーランド",
        favoritePoint:"春合宿",
        attraction:"先輩・後輩関係なく仲が良い事",
        note:"一年生のみなさん！ご入学おめでとうござます！コロナウイルスの影響で影響で異例の大学生活スタートとなってしまいましたが、皆さんに早く会えることを心よりお待ちしています！",

    },
    {
        name:"山田たくみ",
        role:"部長",
        faculty:"経済学部・経営学科",
        hobby:"音楽を聞く",
        job:"東京ディズニーランド",
        favoritePoint:"春合宿",
        attraction:"先輩・後輩関係なく仲が良い事",
        note:"一年生のみなさん！ご入学おめでとうござます！コロナウイルスの影響で影響で異例の大学生活スタートとなってしまいましたが、皆さんに早く会えることを心よりお待ちしています！",

    },
    {
        name:"山田たくみ",
        role:"部長",
        faculty:"経済学部・経営学科",
        hobby:"音楽を聞く",
        job:"東京ディズニーランド",
        favoritePoint:"春合宿",
        attraction:"先輩・後輩関係なく仲が良い事",
        note:"一年生のみなさん！ご入学おめでとうござます！コロナウイルスの影響で影響で異例の大学生活スタートとなってしまいましたが、皆さんに早く会えることを心よりお待ちしています！",

    },
    {
        name:"山田たくみ",
        role:"部長",
        faculty:"経済学部・経営学科",
        hobby:"音楽を聞く",
        job:"東京ディズニーランド",
        favoritePoint:"春合宿",
        attraction:"先輩・後輩関係なく仲が良い事",
        note:"一年生のみなさん！ご入学おめでとうござます！コロナウイルスの影響で影響で異例の大学生活スタートとなってしまいましたが、皆さんに早く会えることを心よりお待ちしています！",

    },
    {
        name:"山田たくみ",
        role:"部長",
        faculty:"経済学部・経営学科",
        hobby:"音楽を聞く",
        job:"東京ディズニーランド",
        favoritePoint:"春合宿",
        attraction:"先輩・後輩関係なく仲が良い事",
        note:"一年生のみなさん！ご入学おめでとうござます！コロナウイルスの影響で影響で異例の大学生活スタートとなってしまいましたが、皆さんに早く会えることを心よりお待ちしています！",

    },
    {
        name:"山田たくみ",
        role:"部長",
        faculty:"経済学部・経営学科",
        hobby:"音楽を聞く",
        job:"東京ディズニーランド",
        favoritePoint:"春合宿",
        attraction:"先輩・後輩関係なく仲が良い事",
        note:"一年生のみなさん！ご入学おめでとうござます！コロナウイルスの影響で影響で異例の大学生活スタートとなってしまいましたが、皆さんに早く会えることを心よりお待ちしています！",

    },
]

