import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import middlewares from './middlewares/index';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('crud'); // 全局路由前缀
  middlewares.forEach((middleware) => {
    app.use(middleware);
  });
  await app.listen(3000);
}
bootstrap();
