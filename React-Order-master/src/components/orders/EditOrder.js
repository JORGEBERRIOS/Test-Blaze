import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

const EditOrder = () => {
  const [items, setItem] = useState([]);
  const [taxes, setTaxes] = useState({
    subtotal:"",
    cityTax:"",
    countyTax:"",
    stateTax:"",
    federalTax:"",
    totalTax:"",
    total:""
 });
  const [order, setOrder] = useState({
    orderId: "",
    consumer: "",
    status: "",
    date: "",
    total: "",
    items: ""
  });  
  let {flagHideTaxes}=true;
  const { id } = useParams();
  
  useEffect(() => {
    loadItems();
    loadOrder();
    loadTaxes();
    //hideTaxes();
  }, []);
  const loadTaxes = async () => {
    const result = await axios.get(`http://localhost:8020/orders/taxes/${id}`);
    setTaxes(result.data);
    
  };
  const loadOrder = async () => {
    const result = await axios.get(`http://localhost:8020/orders/${id}`);
    setOrder(result.data);
    
  };
  const loadItems = async () => {
    const result = await axios.get(`http://localhost:8020/orders/items/${id}`);
    if(result.data.length!=0){
      setItem(result.data.reverse());
      flagHideTaxes=true;
    }else{
      flagHideTaxes=false;
    }
    
  };

  const deleteItem = async (orderId,itemId)=> {
    await axios.delete(`http://localhost:8020/orders/${orderId}/items/${itemId}`);
    loadItems();
  };

  /*function hideTaxes()  {
    if(flagHideTaxes){
      document.getElementById("taxes").style.visibility="hidden";  

    }

  }*/





  return (
    <div className="container">
    <div className="py-4">
      <h1>Order Nº  {id}</h1>
      <br></br> 
      <table>
        <tr>
        </tr>
        <tr>
          <td align="left" width="30%" >Customer</td>
     
          <td align="right">  {order.consumer}</td>
        </tr>
        <tr>
          <td align="left" width="30%" > Status</td>

          <td align="right"> {order.status}</td>
        </tr>
        <tr>
          <td align="left" width="30%">Date</td>
          <td align="right"> {order.date}</td>
        </tr>
      </table>
      <br></br>  <br></br> 

      <table class="table table-bordered">
      <thead class="thead-light">
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Cost</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>$ {item.unitPrice}</td>
              <td>$ {item.cost}</td>

              <td>
                
                <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/items/edit/${item.id}`}
                >
                  Edit
                </Link>
                <button
                  class="btn btn-danger"
                  onClick={() => deleteItem(id,item.itemId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <div>

               
        </div>
      </table>
      <Link  to={`/items/add/${id}`}>
                <button type="button" class="btn btn-primary" style={{float: 'right'}}>
                        Add Item
                </button> 
                </Link>

    </div>
    <br></br>
    {{flagHideTaxes} &&( <table style={{float: 'right'}} id="taxes" >
        <tr>
        </tr>
        <tr>
          <td align="left" width="30%" ><strong style={{fontSize:'30px'}} > Subtotal</strong></td>
     
          <td align="right" style={{fontSize:'30px'}}>$   {taxes.subtotal}</td>
        </tr>
        <tr>
          <td align="left" width="30%" style={{fontSize:'30px'}} ><strong> Taxes</strong></td>
     
          <td align="right">  </td>
        </tr>
        <tr>
          <td align="left" width="30%" >Subtotal</td>
     
          <td align="right"> $  {taxes.subtotal}</td>
        </tr>
        <tr>
              <td align="left" width="30%" >Total City Tax</td>
     
              <td align="right">$   {taxes.cityTax}</td>
        </tr>
        <tr>
              <td align="left" width="30%" >Total County Tax</td>
     
              <td align="right">$   {taxes.cityTax}</td>
            </tr>
            <tr>
              <td align="left" width="30%" >Total State Tax</td>
     
              <td align="right">$   {taxes.stateTax}</td>
            </tr>
            <tr>
              <td align="left" width="30%" >Total Federal Tax</td>
     
              <td align="right">$   {taxes.federalTax}</td>
            </tr>
        <tr>
          <td align="left" width="30%" style={{fontSize:'30px'}}>Total Taxes</td>
          <td align="right" style={{fontSize:'30px'}}>$  {taxes.totalTax}</td>
        </tr>

        <tr>
          <td align="left" width="30%"><strong style={{fontSize:'30px'}}>Total</strong></td>
          <td align="right" style={{fontSize:'30px'}} >$  {taxes.total}</td>
        </tr>
      </table>)}
   
  </div>

  );
};

export default EditOrder;
