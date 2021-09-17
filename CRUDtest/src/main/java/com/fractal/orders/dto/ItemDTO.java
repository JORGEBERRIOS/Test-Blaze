package com.fractal.orders.dto;

import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class ItemDTO {
  private Long itemId;
  private String name;
  private Integer quantity;
  @Field("unit_price")
  private Double unitPrice;
  private Double cost;

}
