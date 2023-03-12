/**
 * 控制器
 * 主要负责提供 api 接口，处理路由、中转、验证等一些简洁的业务
 */

import { Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('find')
  async find(@Query() query: any): Promise<string> {
    return await this.appService.find(query.model, query.query);
  }

  @Get('findAll')
  findAll(): string {
    return this.appService.findAll();
  }

  @Get('count')
  count(): string {
    return this.appService.count();
  }

  @Post('create')
  create(): string {
    return this.appService.create();
  }

  @Post('delete')
  delete(): string {
    return this.appService.delete();
  }

  @Post('update')
  update(): string {
    return this.appService.update();
  }
}
