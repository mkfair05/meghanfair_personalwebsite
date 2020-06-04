import React, {useState, useEffect} from 'react';
import { 
    Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography
} from '@material-ui/core';
import Styles from './Styles'

export default function ImgMediaCard() {
  const styles = Styles();
  const [date, setDate] = useState('');
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  
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
        setUrl(json.url)
        setTitle(json.title)
    };

    fetchMyAPI();
  }, []);

    return (
        <Card className={styles.cardRoot}>
            <CardActionArea>
                <CardMedia className={styles.cardMedia}
                //TODO: change component depending on url type
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
