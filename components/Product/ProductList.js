import React, { useState, useEffect } from "react";
import { ProductItem } from "./ProductItem";
import Grid from "@material-ui/core/Grid";
import apiClient from "../../services/apiClient";

export const ProductList = () => {
  const [state, setState] = useState({
    products: [],
    total: 0,
    page_size: 10,
  });
  const fetchData = async () => {
    const result = await apiClient.get("/api/products", {
      from: state.products.length
    });
    if (result.data) {
      setState({
        products: state.products.concat(result.data.data),
        total: result.data.metadata.total ?? state.total,
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, [/*empty array helps to stop useEffect for keeps looping*/]);

  return (
    <div style={{ padding: "0.5em" }}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {state.products.map((product, i) => {
          return <ProductItem key={i} product={product} />;
        })}
      </Grid>
    </div>
  );
};
