import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const ProductItem = (props) => {
  const classes = useStyles();
  let productName = props.product.name ?? null;
  if (productName) {
    productName = productName.substr(0, 30);
  }

  return (
    <Card className={classes.root} style={{ margin: "0.5em", width: "12em", height: "16em" }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.product.images[0] ?? "https://placekitten.com/400/200"}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography gutterBottom variant="subtitle2" component="span" style={{width: "100%"}}>
                {productName}
              </Typography>
            </Grid>
          </Grid>
          <Typography gutterBottom variant="overline" component="span" style={{color: '#4caf50'}}>
            ${props.product.price.toLocaleString('en-US')}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          See detail
        </Button>
      </CardActions> */}
    </Card>
  );
};
