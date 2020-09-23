import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../state/utils/axiosWithAuth';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 5,
    backgroundColor: 'rgba(234, 234, 81, 0.6)',
    padding: '20px',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

  inputs: {
    padding: '10px',
  },

  button: {
    marginTop: '10px',
  },
}));

const initialEditItem = {
  name: '',
  description: '',
  price: '',
  market: '',
  product: '',
};

const UserItemsListed = ({ updateItems, userItemsList, products, markets }) => {
  const classes = useStyles();

  const [itemToEdit, setItemToEdit] = useState(initialEditItem);

  function editItem(item) {
    console.log('this is the editing item', item);
    setItemToEdit(item);
  }

  const saveEdited = e => {
    console.log('this is save edit', saveEdited);
    e.preventDefault();
    axiosWithAuth()
      .patch(`/item/${itemToEdit.id}`, itemToEdit)
      .then(res => {
        updateItems([
          ...userItemsList.map(item => {
            if (item.id === itemToEdit.id) {
              return itemToEdit;
            } else {
              return item;
            }
          }),
        ]);
      })
      .catch(err => {
        console.error('Error in Edit');
      });
  };

  const deleteItem = item => {
    axiosWithAuth()
      .delete(`/item/${item.id}`)
      .then(res => {
        updateItems(userItemsList.filter(item => item.id !== res.data));
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h1>Here's the items you currently have for sale!</h1>
      <ul>
        {userItemsList.map(item => (
          <li key={item.id} onClick={() => editItem(item)}>
            <span>
              <span
                onclick={e => {
                  e.stopPropagation();
                  deleteItem(item);
                }}
              >
                X delete
              </span>{' '}
              {item.name}
            </span>
          </li>
        ))}
      </ul>

      <Container maxWidth="md" className={classes.root} xs={12}>
        <h2 className="center">Edit Item</h2>
        <form onSubmit={saveEdited}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <TextField
              className={classes.inputs}
              id="outlined-basic"
              label="Item Name"
              variant="outlined"
              name="itemName"
              placeholder="REQUIRED"
              value={itemToEdit.name}
              onChange={e =>
                setItemToEdit({ ...itemToEdit, name: e.target.value })
              }
            />

            <TextField
              className={classes.inputs}
              id="outlined-textarea"
              label="Description"
              placeholder="Placeholder"
              multiline
              variant="outlined"
              name="description"
              value={itemToEdit.description}
              onChange={e =>
                setItemToEdit({ ...itemToEdit, description: e.target.value })
              }
            />

            <TextField
              className={classes.inputs}
              id="outlined-basic"
              label="Price 	KSh"
              variant="outlined"
              name="price"
              value={itemToEdit.price}
              onChange={e =>
                setItemToEdit({ ...itemToEdit, price: e.target.value })
              }
            />

            <TextField
              id="select-market"
              select
              label="Select"
              helperText="Select market location"
              variant="outlined"
              name="market"
              value={itemToEdit.market}
            >
              {markets.map(market => (
                <MenuItem key={market.marketId} value={market.marketId}>
                  {market.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="select-product"
              select
              label="Select"
              helperText="Select product"
              variant="outlined"
              name="product"
              value={itemToEdit.product}
            >
              {products.map(product => (
                <MenuItem key={product.product_id} value={product.product_id}>
                  {product.product_name}
                </MenuItem>
              ))}
            </TextField>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Edit Item
            </Button>
          </Grid>
        </form>
      </Container>
    </>
  );
};

const mapStateToProps = state => {
  return {
    products: state.dropdownProducts,
    markets: state.dropdownMarkets,
  };
};
export default connect(mapStateToProps, {})(UserItemsListed);
