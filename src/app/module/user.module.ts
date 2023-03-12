/**
 * 模型
 * 主要负责将 Controller 和 Service 连接起来，类似于 namespace 的概念
 */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from '../controller/user.controller';
import { BaseService } from '../service/base.service';
import { UserSchema } from '../schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema, collection: 'user' },
    ]),
  ],
  controllers: [UserController],
  providers: [BaseService],
})
export class UserModule {}
