import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Tour } from "./tour.schema";
import { CreateTourDto } from "./dto/create-tour.dto";


@Injectable()
export class TourService {
  constructor(@InjectModel(Tour.name) private readonly tourModel: Model<Tour>) {}

  async createTour(createTourDto: CreateTourDto): Promise<Tour> {
    const createdTour = new this.tourModel(createTourDto);
    return createdTour.save();
  }

  async findAllTours(): Promise<Tour[]> {
    return this.tourModel.find().exec();
  }

  async findTourById(id: string): Promise<Tour> {
    return this.tourModel.findById(id).exec();
  }

//   async updateTour(id: string, updateTourDto: CreateTourDto): Promise<Tour> {
//     return this.tourModel.findByIdAndUpdate(id, updateTourDto, { new: true }).exec();
//   }

  async deleteTour(id: string): Promise<Tour> {
    return this.tourModel.findByIdAndRemove(id).exec();
  }
}