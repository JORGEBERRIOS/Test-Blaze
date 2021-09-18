import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const AddOrder = () => {
  let history = useHistory();
  const [order, setOrder] = useState({
    orderId: "",
    consumer: "",
    status: "",
    date: "",
    total: "",
    items: null
 
  });

  const {orderId, consumer, status, date, total,items } = order;
  const onInputChange = e => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8020/orders/add", order);
    history.push("/orders");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add a Order</h2>
        <form onSubmit={e => onSubmit(e)}>
          
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter The Order Id"
              name="orderId"
              value={orderId}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter The Consumer Name"
              name="consumer"
              value={consumer}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="form-group">
            <input
              type="date"
              className="form-control form-control-lg"
              placeholder="Enter The Date "
              name="date"
              value={date}
              onChange={e => onInputChange(e)}
            />
          </div>

          <div className="form-group">
 


          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example"  name="status" value={status} onChange={e => onInputChange(e)}>
          <option selected>Open this select menu</option>
            <option value="PENDING">PENDING</option>
            <option value="COMPLETED">COMPLETED</option>
            <option value="REJECTED">REJECTED</option>
          </select>


           
          </div>
              <button className="btn btn-primary btn-block">Add Order</button>

        </form>
      </div>
    </div>
  );
};

export default AddOrder;
