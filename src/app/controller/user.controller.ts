import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('user')
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Get('find')
  async find(@Query() query: any): Promise<string> {
    return await this.appService.find('uses', query.query);
  }
}
