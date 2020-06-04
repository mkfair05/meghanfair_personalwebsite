import React from 'react';
import Styles from './Styles'
import { 
    Card, CardActionArea, CardContent, CardMedia, Typography
} from '@material-ui/core';
import img from './resume_photo2.jpg'

export default function MediaCard() {
  const styles = Styles();

  return (
    <Card className={styles.cardRoot}>
      <CardActionArea>
        <CardMedia className={styles.cardMedia}
          component="img"
          //TODO: get photo of me
          image={img}
          title="About Meghan"
          height="140"
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