import { Body, Controller, HttpException, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.schema';
import { UserService } from './user.service';
import { LoginUserDto } from './dto/auth-user.dto';

@Controller('user')
export class UserController {
   constructor(private readonly userService: UserService) {}


  @Post('register')
  @UsePipes(ValidationPipe)
  async register(@Body() createUserDto: CreateUserDto): Promise<User> {
    try {
      return await this.userService.registerUser(createUserDto);
    } catch (error) {
      throw new HttpException(
        'User registration failed',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('login')
  @UsePipes(ValidationPipe)
  async login(@Body() loginUserDto: LoginUserDto): Promise<User> {
    try {
      return await this.userService.loginUser(loginUserDto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.UNAUTHORIZED);
    }
  }
}
