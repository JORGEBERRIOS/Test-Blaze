
package com.fractal.orders.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fractal.orders.dto.OrderDTO;
import com.fractal.orders.entity.Order;
import com.fractal.orders.entity.Taxes;
import com.fractal.orders.dto.ItemDTO;

import com.fractal.orders.service.OrderService;

@CrossOrigin
@RestController
@RequestMapping("/orders")
public class OrderController {
  private final static Logger logger = LoggerFactory.getLogger(OrderController.class);
  private OrderService orderService;
  public OrderController(OrderService orderService) {
      this.orderService=orderService;
  }

  @PostMapping("/add")
  public  ResponseEntity<OrderDTO> createOrder(@RequestBody OrderDTO orderDTO ){
    logger.info("START ...... create-order [POST]{}");
    HttpStatus status=null;
    try {
      orderService.createOrder(orderDTO);
      status=HttpStatus.OK;
    }catch(Exception e) {
      orderDTO=null;
      status=HttpStatus.INTERNAL_SERVER_ERROR;
      logger.error("Exception ocurred in create order {}",e.getMessage());
      
    }
    logger.info("END...... create-order   [POST]");
    return new ResponseEntity<>(orderDTO,status);
  }
  @PatchMapping("/{id}")
  public  ResponseEntity<ItemDTO> addItem(@PathVariable Long id,@RequestBody ItemDTO itemDTO){
    logger.info("START ...... add-item [POST]{}");
    HttpStatus status=null;
    try {
      orderService.addItem(id, itemDTO);
      status=HttpStatus.OK;
    }catch(Exception e) {
      itemDTO=null;
      status=HttpStatus.INTERNAL_SERVER_ERROR;
      logger.error("Exception ocurred in add item {}",e.getMessage());
      
    }
    logger.info("END...... add-item   [POST]");
    return new ResponseEntity<ItemDTO>(itemDTO,status);
  }
  @GetMapping("/taxes/{id}")
  public  ResponseEntity<Taxes> getTaxes(@PathVariable Long id){
    logger.info("START ...... add-item [POST]{}");
    HttpStatus status=null;
    Taxes taxes=null;
    try {
      taxes=orderService.getTaxes(id);
      status=HttpStatus.OK;
    }catch(Exception e) {
      status=HttpStatus.INTERNAL_SERVER_ERROR;
      logger.error("Exception ocurred in get taxes",e.getMessage());
      
    }
    logger.info("END...... add-item   [POST]");
    return new ResponseEntity<Taxes>(taxes,status);
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
  
  @GetMapping("/items/{orderId}")
  public OrderDTO getItems(String orderId) {
    logger.info("START ...... list-all-Orders [GET]{}");
    OrderDTO orders=orderService.getOrder(Long.valueOf(orderId));
    logger.info("END...... list-all-Orders   [GET]");
    return orders;

  }
  @GetMapping("/{orderId}")
  public OrderDTO getOrder(String orderId) {
    logger.info("START ...... get-order [GET]{}");
    OrderDTO order=orderService.getOrder(Long.valueOf(orderId));
    logger.info("END...... get-order   [GET]");
    return order;

  }
  @GetMapping
  public List<OrderDTO> listAllOrders() {
    logger.info("START ...... list-all-Orders [GET]{}");
    List<OrderDTO> orders= orderService.getAllOrders();
    logger.info("END...... list-all-Orders   [GET]");
    return orders;
  }

}
