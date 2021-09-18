import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    const result = await axios.get("http://localhost:8020/orders");
    setOrders(result.data.reverse());
  };

  const deleteOrder = async id => {
    await axios.delete(`http://localhost:8020/orders/${id}`);
    loadOrders();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Orders</h1>
        <br></br> 

        <div>

                <Link  to="/orders/add">
                <button type="button" class="btn btn-primary" style={{float: 'right'}}>
                        Create Order
                </button> 
                </Link>
        </div>
        <br></br> <br></br><br></br> 

        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th scope="col">Nº</th>
              <th scope="col">Consumer</th>
              <th scope="col">Status</th>
              <th scope="col">Date</th>
              <th scope="col">Total</th>
              <th>Actions</th>
            </tr>
          </thead>
 
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{order.consumer}</td>
                <td>{order.status}</td>
                <td>{order.date}</td>
                <td> {order.total}</td>
                <td>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/orders/${order.orderId}`
                        }
                  > 
                    Edit
                  </Link>
                  <button
                    class="btn btn-danger"
                    onClick={() => deleteOrder(order.orderId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
