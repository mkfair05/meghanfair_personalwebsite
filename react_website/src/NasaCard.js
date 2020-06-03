import React, {useState, useEffect} from 'react';
import { 
    makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '30%',
    margin: '15px',
    height: '50%'
  },
  media: {
    height: '100%'
  },
  explanation: {
    padding: '10px'
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();
  const [date, setDate] = useState('');
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  // const [explanation, setExplanation] = useState('')
  
  useEffect(() => {

    function fetchNasaImage () {
        return fetch('https://api.nasa.gov/planetary/apod?api_key=UnfMWA36C3iNWiYftoHBzUf6bRzKN9seQy7Hrvn4')
            .then((response) => { 
                let json = response.json();
                return json;
        });
    }

    const fetchMyAPI = async () => {
        let json = await fetchNasaImage();
        console.log(json)
        setDate(json.date);
        // setExplanation(json.explanation);
        setUrl(json.url)
        setTitle(json.title)
    };

    fetchMyAPI();
  }, []);

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media}
                //TODO: if the url is a youtube video
                component="iframe"
                alt="Nasa Image"
                height="140"
                src={url}
                title="Nasa Image of the Day"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                    {title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    NASA Astronomy Picture of the Day
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                    {date}
                    </Typography>
                    {/* <Typography className={classes.explanation} gutterBottom variant="body2" component="p">
                    {explanation}
                    </Typography> */}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href="https://apod.nasa.gov/apod/astropix.html" target="_blank">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
