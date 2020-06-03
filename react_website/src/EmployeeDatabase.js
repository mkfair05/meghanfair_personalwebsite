import React, {useState, useEffect} from 'react';
import { 
    makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography
} from '@material-ui/core';

// This file is called EmployeeDatabase because once I complete set up of an RDS instance through AWS, I will either move this website to
// an Apache webserver hosted on EC2, or I will create a small web app on this website that will show the mock database. For now,
// this file shows in image media card that describes my journey learning AWS.

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
  const [url, setUrl] = useState('')
  
  useEffect(() => {

    function fetchRandomImage () {
        return fetch('https://picsum.photos/300')
            .then((response) => { 
              return response;
        });
    }

    const fetchMyAPI = async () => {
        let randomImage = await fetchRandomImage();
        setUrl(randomImage.url)
    };

    fetchMyAPI();
  }, []);

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media}
                component="img"
                alt="In Progress"
                src={url}
                title="In Progress"
                height="140"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                      In Progress
                    </Typography>
                    <Typography className={classes.explanation} gutterBottom variant="textSecondary" component="p">
                      While I apply for Full Stack Developer positions, I am learning how to set up a database through Amazon Web Services.
                      I am doing this to show that I have the skill set for both front end and back end applications.

                      So far, I have completed creating an RDS and EC2 instance through AWS. I have also set up an Apache web server
                      to host this database. The database will be created and populated (with fake employee data) in PHP.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href="ec2-3-21-21-224.us-east-2.compute.amazonaws.com" target="_blank">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
