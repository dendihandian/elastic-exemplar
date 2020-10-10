import React, { useState, useEffect } from "react";
import { ProductItem } from "./ProductItem";
import Grid from "@material-ui/core/Grid";
import apiClient from "../../services/apiClient";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const result = await apiClient.get("/api/products");
    if (result.data) {
      setProducts(products.concat(result.data.data));
    }
  }

  useEffect(() => {
    fetchData();
  }, [] //empty array helps to stop useEffect keeps looping
  );

  return (
    <div style={{ padding: "0.5em" }}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {products.map((product, i) => {
          return <ProductItem key={i} product={product} />;
        })}
      </Grid>
    </div>
  );
};
