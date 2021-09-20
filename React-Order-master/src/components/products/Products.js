import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get("http://localhost:8020/products");
    setProduct(result.data.reverse());
  };

  const deleteProduct = async id => {
    await axios.delete(`http://localhost:8020/products/${id}`);
    loadProducts();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Products</h1> 
        <br></br> 
        <div> 

                <Link  to="/products/add">
                    <button type="button" class="btn btn-primary" style={{float: 'right'}}>
                        Create Product
                    </button>


                </Link>
        </div>
        <br></br> <br></br><br></br> 
        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th scope="col">Nº</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.status}</td>
                <td>
                <button class="btn btn-outline-primary mr-2">
                  Edit
                </button>
                 
                  <div
                    class="btn btn-danger"
                    onClick={() => deleteProduct(product.productId)}
                  >
                    Delete
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav aria-label="..." style={{float: 'right'}}> 
        <ul class="pagination">
          <li class="page-item disabled">
            <span class="page-link">Previous</span>
          </li>
          <li class="page-item active">
            <span class="page-link">
              1
              <span class="sr-only">(current)</span>
            </span>
          </li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
        
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Products;
