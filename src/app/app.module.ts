/**
 * 模型
 * 主要负责将 Controller 和 Service 连接起来，类似于 namespace 的概念
 */
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserController } from './controller/user.controller';
import { LoggerController } from './controller/logger.controller';
import { ConfigController } from './controller/config.controller';

@Module({
  imports: [],
  controllers: [UserController, LoggerController, ConfigController],
  providers: [AppService],
})
export class AppModule {}
