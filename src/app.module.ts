import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './resources/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',         // Cambia según tu configuración
    port: 5432,                // Puerto de PostgreSQL
    username: 'postgres',    // Usuario de la base de datos
    password: '208', // Contraseña de la base de datos
    database: 'SteadyDB',         // Nombre de la base de datos
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,         // Solo para desarrollo; en producción, usa migraciones
  }),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
