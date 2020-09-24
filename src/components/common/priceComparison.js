import React, { useEffect, useState } from 'react';
import { getPriceComps } from '../../state/actions/userActions';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
//Do I actually need the CardActionArea???
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
  //need to find out if there are other styles attached to root, and then plug flexgrow in properly.
  root: {
    // flexGrow: 1,
    width: 345,
  },
});

const PriceComparison = ({
  getPriceComps,
  priceComps,
  priceCompsWarning,
  priceCompsError,
  products,
}) => {
  const classes = useStyles();

  const [productCompared, setProductCompared] = useState('');
  useEffect(() => {
    console.log('getPriceComps ran in PriceComparison.js');
    getPriceComps(productCompared);
  }, [productCompared, getPriceComps]);

  const handleChange = e => {
    e.persist();
    // inputChange(e);
    setProductCompared(e.target.value);
  };

  return (
    <div>
      <h1>Price Comparisons!</h1>
      <TextField
        id="select-product"
        select
        label="Select"
        helperText="Select product"
        variant="outlined"
        name="productCompatred"
        value={productCompared}
        onChange={handleChange}
      >
        <MenuItem value="">Pick a product</MenuItem>
        {products.map(prod => (
          <MenuItem key={prod.product_id} value={prod.product_name}>
            {prod.product_name}
          </MenuItem>
        ))}
      </TextField>
      {priceCompsWarning ? priceCompsWarning : null}
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {/* {items.map(item => (
              <Grid key={item.itemId} item>
                <ItemCard item={item} key={item.itemId} />
              </Grid>
            ))} */}
            {priceComps
              ? priceComps.map(priceComp => (
                  // need to give each of these a unique key. how do I use the index number as a key?
                  <Grid key={priceComp.udate} item>
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Market: {priceComp.market}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="h3"
                          >
                            {priceComp.product} <br />
                            <Typography color="textPrimary" component="p">
                              Retail:{priceComp.currency} {priceComp.retail}
                              <br />
                              Wholesale:{priceComp.currency}{' '}
                              {priceComp.wholesale}
                              <br />
                              {/* Available at {priceComp.market} <br /> */}
                              Source: {priceComp.source} <br />
                              Posted: {priceComp.date}
                            </Typography>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))
              : null}
            ;
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    priceComps: state.priceComps.records,
    priceCompsWarning: state.priceComps.warning,
    priceCompsError: state.priceCompsError,
    products: state.dropdownProducts,
  };
};

export default connect(mapStateToProps, { getPriceComps })(PriceComparison);
