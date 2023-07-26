import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { User, UserSchema } from './user/user.schema';
import { Tour, TourSchema } from './tour/tour.schema';

import { UserController } from './user/user.controller';
import { TourController } from './tour/tour.controller';

import { UserService } from './user/user.service';
import { TourService } from './tour/tour.service';
import { AuthModule } from './auth/auth.module';

dotenv.config();

@Module({
   imports: [
      MongooseModule.forRoot(process.env.DB_URI),
      MongooseModule.forFeature([
         { name: User.name, schema: UserSchema },
         { name: Tour.name, schema: TourSchema },
      ]),
      AuthModule,
   ],
   controllers: [AppController, UserController, TourController],
   providers: [AppService, UserService, TourService],
})
export class AppModule {}
