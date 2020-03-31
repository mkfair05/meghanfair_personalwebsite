import React, {useState, useEffect} from 'react';
import { 
    makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '50%',
    margin: '15px'
  },
  media:{
      height:'100%'
  }
});

function fetchNasaImage() {
    return fetch('https://api.nasa.gov/planetary/apod?api_key=UnfMWA36C3iNWiYftoHBzUf6bRzKN9seQy7Hrvn4') // fetch a response from the api
        .then((response) => { 
            let json = response.json(); // then assign the JSON'd response to a var
            return json; // return that bad boy
    });
}

export default function ImgMediaCard() {
  const classes = useStyles();
  const [date, setDate] = useState('');
  const [explanation, setExplanation] = useState('')
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')


  const fetchMyAPI = async () => {
    let json = await fetchNasaImage();
    setDate(json.date);
    setExplanation(json.explanation);
    setUrl(json.url)
    setTitle(json.title)
  }

  useEffect(() => {
   fetchMyAPI();
  }, []);

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media}
                component="img"
                alt="Contemplative Reptile"
                height="140"
                src={url}
                title="Nasa Image of the Day"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {title}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="h2">
                    {date}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {explanation}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
