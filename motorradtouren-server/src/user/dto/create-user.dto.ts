import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
   @IsNotEmpty()
   @IsString()
   username: string;

   @IsNotEmpty()
   @IsString()
   @MinLength(6)
   password: string;

   @IsOptional()
   @IsString()
   @MinLength(6)
   ride: string;
}
