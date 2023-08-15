import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaExceptionFilter } from './exceptions-filters/prisma.exception-filter';
import { CatchAllErrorsFilter } from './exceptions-filters/catch-all-erros-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const {httpAdapter} = app.get(HttpAdapterHost);
  
  app.useGlobalFilters(
    new CatchAllErrorsFilter(httpAdapter),
    new PrismaExceptionFilter())
  await app.listen(3000);
}
bootstrap();
