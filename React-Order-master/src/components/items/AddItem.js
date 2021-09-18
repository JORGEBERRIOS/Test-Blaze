import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const AddItem = () => {
  const history = useHistory();
 
  const [item, setItem] = useState({
    itemId:"",
    name: "",
    quantity: "",
    unitPrice: "",
  });


  const { id } = useParams();
  const { name, quantity, unitPrice ,itemId} = item;
  const onInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };
 
  const onSubmit = async e => {
    e.preventDefault();
    await axios.patch(`http://localhost:8020/orders/items/${id}`, item);
    history.goBack(); 
    /*history.push(`orders/${id}`);*/
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Item</h2>
        <form onSubmit={e => onSubmit(e)}>
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
          <div className="form-group">
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
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter The Item Quantity"
              name="quantity"
              value={quantity}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter The Item Unit Price"
              name="unitPrice"
              value={unitPrice}
              onChange={e => onInputChange(e)}
            />
          </div>
        
       
          <button className="btn btn-primary btn-block">Add Item</button>
        </form>
        <div>
        
        </div> 
      </div>
    </div>
  );
};

export default AddItem;
