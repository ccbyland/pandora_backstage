/**
 * 模型
 * 主要负责将 Controller 和 Service 连接起来，类似于 namespace 的概念
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
