import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@apple/auth';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, AuthModule]
})
export class AppModule {}
