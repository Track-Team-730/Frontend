import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ItemCard from '../../common/ItemCard';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  // paper: {
  //   height: 140,
  //   width: 100,
  // },
  control: {
    padding: theme.spacing(2),
  },
}));

function ItemsAvailable() {
  const classes = useStyles();

  const itemList = [
    {
      itemId: 1,
      name: 'Egg Sale!',
      description: 'Eggs for 200 Shillings per unit',
      price: 400.0,
      market: 'Zimbabwe',
    },
    {
      itemId: 2,
      name: 'Fresh fufu!',
      description: 'Ghana style',
      price: 800.0,
      market: 'Nairobe',
    },
  ];

  return (
    <div>
      ItemsAvailable:
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {itemList.map(item => (
              <Grid key={item.itemId} item>
                <ItemCard item={item} key={item.itemId} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ItemsAvailable;
