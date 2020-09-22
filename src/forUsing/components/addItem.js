import React, { useState } from 'react';
import { connect } from 'react-redux';
// import './App.css';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import * as yup from 'yup';
import axios from 'axios';
import axiosWithAuth from '../../state/utils/axiosWithAuth';

import { option } from 'yargs';

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

const initialValues = {
  itemName: '',
  description: '',
  price: 0,
  market: '',
  product: '',
};

const initialFormErrors = {
  itemName: '',
  description: '',
  price: '',
  market: '',
  product: '',
};

const AddItem = ({ products, markets }) => {
  const classes = useStyles();

  const [item, setItem] = useState(initialValues);
  const [errors, setFormErrors] = useState(initialFormErrors);

  //validation

  const schema = yup.object().shape({
    itemName: yup
      .string()
      .required('Item Name is required')
      .min(3),
    description: yup.string(),
    price: yup
      .number()
      .required('Price is Required')
      .positive()
      .integer()
      .min(1),
  });

  const inputChange = e => {
    yup
      .reach(schema, e.target.name)
      //we can then run validate using the value
      .validate(e.target.value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setFormErrors({
          ...errors,
          [e.target.name]: '',
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message
        returned from yup (that we created in our schema) */
      .catch(err => {
        setFormErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });

    // Wether or not our validation was successful, we will still set the state to the new value as the user is typing
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    // schema.validate(formData).then(() => {
    axios
      .post('https://reqres.in/api/users', item)
      .then(res => {
        console.log('this is your posted data', res.data);
        setItem(initialValues);
      })
      .catch(err => console.log(err.response));
    // });
  };

  // handleChange function
  const handleChange = e => {
    e.persist();
    inputChange(e);
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="md" className={classes.root} xs={12}>
      <h2 className="center">Add New Item</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          submit();
        }}
      >
        <Grid container direction="column" justify="center" alignItems="center">
          <TextField
            className={classes.inputs}
            id="outlined-basic"
            label="Item Name"
            variant="outlined"
            name="itemName"
            onChange={handleChange}
          />
          <div className="error">{errors.itemName}</div>

          <TextField
            className={classes.inputs}
            id="outlined-textarea"
            label="Description"
            placeholder="Placeholder"
            multiline
            variant="outlined"
            name="description"
            onChange={handleChange}
          />
          <div className="error">{errors.description}</div>

          <TextField
            className={classes.inputs}
            id="outlined-basic"
            label="Price 	KSh"
            variant="outlined"
            name="price"
            onChange={handleChange}
          />
          <div className="error">{errors.price}</div>

          <TextField
            id="select-market"
            select
            label="Select"
            helperText="Select market location"
            variant="outlined"
            name="market"
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
            Add Item
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Cancel
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    products: state.dropdownProducts,
    markets: state.dropdownMarkets,
  };
};
export default connect(mapStateToProps, {})(AddItem);
