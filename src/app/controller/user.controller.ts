import { Controller, Post, Body } from '@nestjs/common';
import { BaseService } from '../service/base.service';

interface Result {
  message: string;
  code: number;
}

@Controller('user')
export class UserController {
  constructor(private readonly baseService: BaseService) {}

  @Post('create')
  async create(@Body() body: any): Promise<Result> {
    return await this.baseService.create('uses', body);
  }
}
