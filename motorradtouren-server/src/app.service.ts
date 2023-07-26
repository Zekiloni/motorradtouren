import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
   status(): number {
      return HttpStatus.OK;
   }
}
