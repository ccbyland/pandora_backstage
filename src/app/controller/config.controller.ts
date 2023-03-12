import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('config')
export class ConfigController {
  constructor(private readonly appService: AppService) {}

  @Get('find')
  async find(@Query() query: any): Promise<string> {
    return await this.appService.find('config', query.query);
  }
}
