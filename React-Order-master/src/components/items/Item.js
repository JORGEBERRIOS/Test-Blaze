import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Item = () => {
  const [item, setItem] = useState({
    name: "",
    quantity: "",
    unitPrice: "",
    cost: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadItem();
  }, []);
  const loadItem = async () => {
    const res = await axios.get(`http://localhost:3003/items/${id}`);
    setItem(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">N° {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {item.name}</li>
        <li className="list-group-item">Quantity: {item.quantity}</li>
        <li className="list-group-item">Unit Price: {item.untiPrice}</li>
        <li className="list-group-item">Cost: {item.cost}</li>
      </ul>
    </div>
  );
};

export default Item;
