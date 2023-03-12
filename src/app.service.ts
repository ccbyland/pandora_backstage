/**
 * 服务
 * 主要负责处理具体的业务，如数据库的增删改查、事务、并发等逻辑代码；
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async find(model: string, query: any): Promise<string> {
    console.error('model', model);
    console.error('query', query);
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    return 'find!';
  }
  findAll(): string {
    return 'findAll!';
  }
  count(): string {
    return 'count!';
  }
  create(): string {
    return 'create!';
  }
  delete(): string {
    return 'delete!';
  }
  update(): string {
    return 'update!';
  }
}
