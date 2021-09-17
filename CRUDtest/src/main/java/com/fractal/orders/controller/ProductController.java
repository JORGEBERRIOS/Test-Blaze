package com.fractal.orders.controller;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fractal.orders.dto.ProductDTO;
import com.fractal.orders.service.ProductService;


@CrossOrigin
@RestController
@RequestMapping("/products")
public class ProductController {
  private final static Logger logger = LoggerFactory.getLogger(ProductController.class);
  
  private ProductService productService;
  public ProductController(ProductService productService) {
      this.productService=productService;
  }

  @PostMapping("/add")
  public  ResponseEntity<ProductDTO> createProduct(@RequestBody ProductDTO productDto ){
    logger.info("START ...... create-product [POST]{}");
    HttpStatus status=null;
    try {
      productService.createProduct(productDto);
      status=HttpStatus.OK;
    }catch(Exception e) {
      productDto=null;
      status=HttpStatus.INTERNAL_SERVER_ERROR;
      logger.error("Exception ocurred in create product {}  ",e.getMessage());
      
    }
    logger.info("END...... create-product   [POST]");
    return new ResponseEntity<>(productDto,status);
  }
  @PatchMapping
  public  ResponseEntity<ProductDTO> editProduct(@RequestBody ProductDTO productDto ){
    logger.info("START ...... edit-product [POST]{}");
    HttpStatus status=null;
    try {
      productService.editProduct(productDto);
      status=HttpStatus.OK;
    }catch(Exception e) {
      productDto=null;
      status=HttpStatus.INTERNAL_SERVER_ERROR;
      logger.error("Exception ocurred in edit product {}",e.getMessage());
      
    }
    logger.info("END...... create-product   [POST]");
    return new ResponseEntity<ProductDTO>(productDto,status);
  }
  @DeleteMapping("/{productId}")
  public  ResponseEntity<String> deleteProduct(@PathVariable String productId ){
    logger.info("START ...... delete-product [DELETE]{}");
    HttpStatus status=null;
    try {
      productService.deleteProduct(Long.valueOf(productId));
      status=HttpStatus.OK;
    }catch(Exception e) {
      status=HttpStatus.INTERNAL_SERVER_ERROR;
      logger.error("Exception ocurred in delete product {}",e.getMessage());
      
    }
    logger.info("END...... delete-product   [DELETE]");
    return new ResponseEntity<>(status);
  }

  /*
  @GetMapping("status")
  public String getStado() {
    return "OK:"+new Date();
  }
  
  @GetMapping("pagoSE/listarEntidades")
  public ResponseEntity<WrapperResponse<EntidadPSE>> listarEntidadesPagoSE() {
    WrapperResponse<EntidadPSE> response = null;
    try {
      List<EntidadPSE> listaPSE = metodoService.listarEntidadesPSE();
      response = new WrapperResponse(ESTADO_OPERACION.EXITO.getCodigo(), ConstantesMap.MSG_EXITO_OPERACION, listaPSE);
    }catch(Exception e) {
      logger.error("Exception metodo pago pago pse", e);
      response = new WrapperResponse(ESTADO_OPERACION.EXCEPTION.getCodigo(), ConstantesMap.MSG_ERROR_OPERACION); 
    }
     
    return new ResponseEntity<>(response, HttpStatus.OK); 
    
  }
  */
  @GetMapping
  public List<ProductDTO> listAllProducts() {
    logger.info("START ...... list-all-products [GET]{}");
    List<ProductDTO> products= productService.getAllProducts();
    logger.info("END...... list-all-products   [GET]");
    return products;
  }

}
