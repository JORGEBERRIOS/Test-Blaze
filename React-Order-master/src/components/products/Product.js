import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState({
    productId:"",
    name: "",
    category: "",
    price: "",
    status: ""
 
  });
  const { id } = useParams();
  useEffect(() => {
    loadProduct();
  }, []);
  const loadProduct = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setProduct(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Product Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {product.name}</li>
        <li className="list-group-item">category: {product.category}</li>
        <li className="list-group-item">price: {product.price}</li>
        <li className="list-group-item">status: {product.status}</li>
      </ul>
    </div>
  );
};

export default Product;
