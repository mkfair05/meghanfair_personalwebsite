import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '30%',
    margin: '15px',
    height: '75%'
  },
  media: {
    height: '100%'
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          //TODO: get photo of me
        //   image="https://picsum.photos/200/300"
          title="About Meghan"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            About Me
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            I am a graduate from the University of Victoria, with a Bachelor of Science in Economics and a minor in computer science.
            I am looking for a full stack developer position in a city in British Columbia.
            Outside of work, I enjoy doing outdoor activities such as camping, swimming, and skiing. My other hobbies include crochet,
            bingeing Netflix, and learning the newest Javascript framework. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}