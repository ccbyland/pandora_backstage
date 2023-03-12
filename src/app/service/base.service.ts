/**
 * 服务
 * 主要负责处理具体的业务，如数据库的增删改查、事务、并发等逻辑代码；
 */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

interface Result {
  message: string;
  code: number;
}

@Injectable()
export class BaseService {
  constructor(@InjectModel('User') private readonly userModule) {}

  find(): string {
    return 'find!';
  }
  findAll(): string {
    return 'findAll!';
  }
  count(): string {
    return 'count!';
  }
  async create(model: string, body: any): Promise<Result> {
    console.error('model', model);
    console.error('body', body);
    const { username, password } = body;
    await this.userModule.create({ username, password });
    return { code: 0, message: 'success' };
  }
  delete(): string {
    return 'delete!';
  }
  update(): string {
    return 'update!';
  }
}
