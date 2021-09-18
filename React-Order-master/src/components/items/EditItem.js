import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditItem = () => {
  let history = useHistory();
  const { id } = useParams();
  const [item, setItem] = useState({
    itemId:"",
    name: "",
    quantity: "",
    unitPrice: "",
  });

  const { name, quantity, unitPrice, cost } = item;
  const onInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadItem();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/items/${id}`, item);
    history.push("/");
  };

  const loadItem = async () => {
    const result = await axios.get(`http://localhost:3003/items/${id}`);
    setItem(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Item</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter The Item Id"
              name="itemId"
              value={itemId}
              onChange={e => onInputChange(e)}
            />
          </div>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter The Item Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter The Item Quantity"
              name="quantity"
              value={quantity}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter The Item Unit Price"
              name="unitPrice"
              value={unitPrice}
              onChange={e => onInputChange(e)}
            />
          </div>
      
        <Link  to={`/orders/${id}`}>

          <button className="btn btn-warning btn-block">Update Item</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default EditItem;
