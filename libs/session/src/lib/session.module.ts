import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [
    TypeOrmModule.forRoot({
      type: <TypeOrmModuleOptions["type"]>process.env.NX_SESSION_DB_TYPE,
      host: process.env.NX_SESSION_DB_HOST,
      port: <number><unknown>process.env.NX_SESSION_DB_PORT,
      username: process.env.NX_SESSION_DB_USERNAME,
      password: process.env.NX_SESSION_DB_PASSWORD,
      database: process.env.NX_SESSION_DB_DATABASE,
      synchronize: <boolean><unknown>process.env.NX_SESSION_DB_SYNCHRONIZE,
      autoLoadEntities: true
    }),
  ],
})
export class SessionModule {}
