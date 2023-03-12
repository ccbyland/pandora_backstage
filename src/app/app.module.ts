/**
 * 模型
 * 主要负责将 Controller 和 Service 连接起来，类似于 namespace 的概念
 */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './module/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/pandora', {
      useNewUrlParser: true, // 使用新的解析器
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
