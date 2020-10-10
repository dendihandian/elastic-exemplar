import elasticClient from "../../services/elasticClient";

export default async (req, res) => {
  try {
    const result = await elasticClient.post("/store/product/_search");

    const products = result.data.hits.hits.map((product) => {
      return product._source;
    });

    res.statusCode = 200;
    res.json({
      data: products,
    });
  } catch (error) {
    res.statusCode = 500;
    res.json({ message: error.message });
  }
};
