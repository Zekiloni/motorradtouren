import { Controller, UseInterceptors, Body, Post, UploadedFiles } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { CreateTourDto } from './dto/create-tour.dto';

@Controller('tour')
export class TourController {
  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'tourGpx', maxCount: 1 },
      { name: 'tourImage', maxCount: 1 },
    ]),
  )
  create(
    @Body() createTourDto: CreateTourDto,
    @UploadedFiles()
    files: { tourGpx: Express.Multer.File; tourImage: Express.Multer.File },
  ) {
    console.log(files);
  }
}
