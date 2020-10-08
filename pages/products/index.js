import { ProductList } from "../../components/Product/ProductList";
import Layout from "../../hoc/Layout/Layout";

export default function ProductListPage() {
  return (
    <div>
      <Layout>
        <div>
          <ProductList />
        </div>
      </Layout>
    </div>
  );
}
