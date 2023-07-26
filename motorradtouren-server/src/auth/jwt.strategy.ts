import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import * as dotenv from 'dotenv';

import { UserService } from '../user/user.service';

dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
   constructor(private userService: UserService) {
      super({
         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
         secretOrKey: process.env.JWT_SECRET,
      });
   }

   async validate(payload: any) {
      const user = await this.userService.findUserById(payload.sub);
      if (!user) {
         throw new UnauthorizedException();
      }
      return user;
   }
}
