import React from 'react';
import { 
    makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    margin: '15px'
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                src='hiii'
                title="Nasa Image of the Day"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Nasa Image of the Day
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
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
