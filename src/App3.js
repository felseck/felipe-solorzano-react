import { useSelector, useDispatch } from "react-redux";
import {
  logIn,
  logOut,
} from "./actions/actions.auth";

import {
  clearData,
} from "./actions/actions.fetchData";

import { fetchProducts } from "./fetches/fetch.products";


function App3() {

  const auth = useSelector((state) => state.auth);
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  return (

    <div className="card border-primary mb-3">
      <div className="card-header">App 3 - Products list (remote - fetch products)</div>
      <div className="card-body text-primary">


        <button className="btn btn-primary" onClick={() => dispatch(fetchProducts())}>Get products</button>

        {products.total > 0 ?
          <button className="btn btn-warning" onClick={() => dispatch(clearData())}>Clear products list </button>
          : ''}
        {products.loading ? <>getting products..</> : ''}

        <h5>Products: {products.total}</h5>


        <ul class="list-group">
          {products.data.map((item, index) => {
            return <li class="list-group-item list-group-item-primary">{index + 1}.- {item.itemname}</li>
          })}
        </ul>




      </div>
    </div>

  );
}

export default App3;
