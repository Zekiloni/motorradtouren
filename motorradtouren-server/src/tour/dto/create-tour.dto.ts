import { IsNotEmpty, IsString, IsMongoId } from "class-validator";

export class CreateTourDto {
   @IsNotEmpty()
   @IsString()
   title: string;
 
   @IsNotEmpty()
   @IsString()
   description: string;
 
   @IsNotEmpty()
   @IsMongoId()
   author: string;
}