import React from "react";
import { ProductItem } from "./ProductItem";
import Grid from "@material-ui/core/Grid";

export const ProductList = () => {
  return (
    <div style={{ padding: "0.5em" }}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {[1, 2, 3, 4, 5, 6, 7].map((i) => {
          return <ProductItem key={i} />;
        })}
      </Grid>
    </div>
  );
};
