package com.fractal.orders.entity;

import java.io.Serializable;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document("order")

public class Taxes implements Serializable{
  /**
   * 
   */
  private static final long serialVersionUID = 1L;
  private Double subtotal;
  private Double cityTax;
  private Double countyTax;
  private Double stateTax;
  private Double federalTax;
  private Double totalTax;
  private Double total;

  /*
   * Subtotal = $100 City tax=$100*10%=$10 County tax= $110*5%=$5.5
   * 
   * State tax=$115.50*8%=$9.24 Federal tax=$124.74*2%=$2.49 Total
   * taxes=$10+$5.5+$9.24+$2.49=$27.23 Total=$127.23
   */
}
