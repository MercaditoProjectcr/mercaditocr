import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 260,
    width: "20vw"
  },
  media: {
    height: 240,
  },
});

const FeatureCard = (props) => {
  const classes = useStyles();

  const cardContent = props.content; 
  const title = props.title;    
  const image = props.image;    
  const text = props.text;    
  const action = props.text;    
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cardContent.image}
          title="cardImage"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cardContent.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {cardContent.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {cardContent.action}
        </Button>
      </CardActions>
    </Card>
  );
}
export default FeatureCard; 