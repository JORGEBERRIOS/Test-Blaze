import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const AddProduct = () => {
  let history = useHistory();
  const [product, setProduct] = useState({
    productId:"",
    name: "",
    category: "",
    price: "",
    status: ""
 
  });

  const {productId, name, category, price, status } = product;
  const onInputChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8020/products/add", product);
    history.push("/products");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add a Product</h2>
        <form onSubmit={e => onSubmit(e)}>
          
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter The Product Id"
              name="productId"
              value={productId}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter The Product Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter The Product Category"
              name="category"
              value={category}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter The Product Price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
 


          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example"  name="status" value={status} onChange={e => onInputChange(e)}>
          <option selected>Open this select menu</option>
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
          </select>


           
          </div>
              <button className="btn btn-primary btn-block">Add Product</button>

        </form>
      </div>
    </div>
  );
};

export default AddProduct;
