import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import * as dotenv from 'dotenv';

import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';

dotenv.config();

@Module({
   imports: [
      PassportModule.register({ defaultStrategy: 'jwt' }),
      JwtModule.register({
         secret: process.env.JWT_SECRET,
         signOptions: { expiresIn: '3h' },
      }),
   ],
   providers: [JwtStrategy, JwtAuthGuard],
   exports: [JwtAuthGuard],
})
export class AuthModule {}
