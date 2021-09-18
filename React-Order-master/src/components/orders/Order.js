import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Order = () => {
  const [order, setOrder] = useState({
    orderId: "",
    consumer: "",
    status: "",
    date: "",
    total: "",
    items: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadOrder();
  }, []);
  const loadOrder = async () => {
    const res = await axios.get(`http://localhost:3003/orders/${order.orderId}`);
    setOrder(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Order Id: {order.orderId}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Consumer: {order.consumer}</li>
        <li className="list-group-item">Status: {order.quantity}</li>
        <li className="list-group-item">Date: {order.date}</li>
        <li className="list-group-item">Total: {order.total}</li>
        <li className="list-group-item">Items: {order.items}</li>

      </ul>
    </div>
  );
};

export default Order;
