import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import bcrypt from 'bcryptjs';

import { User } from './user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/auth-user.dto';

@Injectable()
export class UserService {
   constructor(
      @InjectModel(User.name) private readonly userModel: Model<User>,
   ) {}

   async findUserById(userId: string): Promise<User> {
      return this.userModel.findById(userId).exec();
   }

   async registerUser(createUserDto: CreateUserDto): Promise<User> {
      const { username, password } = createUserDto;
      const user = new this.userModel({ username, password });
      return await user.save();
   }

   async loginUser(loginUserDto: LoginUserDto): Promise<User> {
      const { username, password } = loginUserDto;

      const user = await this.userModel.findOne({ username }).exec();

      if (!user) {
         throw new Error('Username not found');
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!isPasswordMatch) {
         throw new Error('Invalid password');
      }

      return user;
   }
}
