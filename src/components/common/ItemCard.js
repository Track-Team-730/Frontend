import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
//not entirely sure if we need Typography tbh.
import Typography from '@material-ui/core/Typography';

// These ItemCards are not yet permanent. would love to see them adjusted for a better universal fit.

const useStyles = makeStyles({
  root: {
    width: 200,
  },
  media: {
    //here for if/when we get images to upload!
    // height: 140,
  },
});

function ItemCard({ item, editButtons }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia className={classes.media} image="" title="" /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h3">
            {item.product.name} <br />
            <Typography color="textPrimary" component="p">
              {item.description} <br />
              Available at {item.market.name} <br />
              Cost: {item.price} Shillings
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* pass "editButtons" in props to show these. ex: <ItemCard item={item} key={item.itemId} editButtons /> */}
      {editButtons ? (
        <CardActions>
          <Button size="small" color="primary">
            Edit
          </Button>
          <Button size="small" color="primary">
            Delete
          </Button>
        </CardActions>
      ) : (
        undefined
      )}
    </Card>
  );
}

export default ItemCard;
