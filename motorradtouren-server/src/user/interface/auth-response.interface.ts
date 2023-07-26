import { HttpStatus } from "@nestjs/common";
import { User } from "../user.schema";


export interface AuthResponse {
   status: HttpStatus.OK | HttpStatus.UNAUTHORIZED | HttpStatus.NOT_FOUND;
   message?: string;
   user?: User;
   token?: string;
}