// orders.controller.ts

import { Controller, Get, Post, Param, Body, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './schemas/order.schema';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.ordersService.createOrder(createOrderDto);
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string): Promise<Order> {
    return this.ordersService.getOrderById(id);
  }

  @Get('client/:clientId')
  async getOrdersByClientId(@Param('clientId') clientId: string): Promise<Order[]> {
    return this.ordersService.getOrdersByClientId(clientId);
  }

  @Put(':id/status')
  async updateOrderStatus(@Param('id') id: string, @Body('status') status: string): Promise<Order> {
    return this.ordersService.updateOrderStatus(id, status);
  }
}
