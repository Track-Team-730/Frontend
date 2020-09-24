import React, { useEffect } from 'react';
import { getPriceComps } from '../../state/actions/userActions';
import axiosForSauti from '../../state/utils/axiosForSauti';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
//not entirely sure if we need Typography tbh.
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const PriceComparison = ({
  getPriceComps,
  priceComps,
  priceCompsWarning,
  priceCompsError,
}) => {
  const classes = useStyles();

  useEffect(() => {
    console.log('getPriceComps ran in PriceComparison.js');
    getPriceComps('beans');
  }, []);
  // console.log(priceComps)

  return (
    <div>
      <h1>Price Comparsions!</h1>
      {priceCompsWarning ? priceCompsWarning : null}
      {priceComps
        ? priceComps.map(priceComp => (
            // need to give each of these a unique key. how do I use the index number as a key?
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
                      Wholesale:{priceComp.currency} {priceComp.wholesale}
                      <br />
                      Available at {priceComp.market} <br />
                      Source: {priceComp.source} <br />
                      Posted: {priceComp.date}
                    </Typography>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        : null}
      ;
    </div>
  );
};

const mapStateToProps = state => {
  return {
    priceComps: state.priceComps.records,
    priceCompsWarning: state.priceComps.warning,
    priceCompsError: state.priceCompsError,
  };
};

export default connect(mapStateToProps, { getPriceComps })(PriceComparison);
