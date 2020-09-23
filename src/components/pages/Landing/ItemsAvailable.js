import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../../state/utils/axiosWithAuth';
import axios from 'axios';
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

  const initialItemList = [
    {
      itemId: 1,
      name: 'Egg Sale!',
      description: 'Eggs for 200 Shillings per unit',
      price: 400,
      user: {
        userId: 1,
        name: 'Jill',
      },
      market: {
        marketId: 1,
        name: 'Bujumbura, Burundi',
      },
      product: {
        productId: 1,
        name: 'Eggs',
        wholesalePrice: 348,
        subcategory: {
          subcategoryId: 1,
          name: 'Animal Products - Other',
          category: {
            categoryId: 1,
            name: 'Animal Products',
          },
        },
      },
    },
  ];
  const [items, setItems] = useState(initialItemList);

  const getItems = () => {
    console.log('getItemsRan');
    // axiosWithAuth()
    //  .get('/items')
    axios
      .get('https://african-marketplace-730.herokuapp.com/items')
      .then(items => {
        console.log('items', items.data);
        setItems(items.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      ItemsAvailable:
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {items.map(item => (
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
