import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/user/user.schema';

@Schema({
  timestamps: {
    createdAt: 'createdAt'
  },
})
export class Tour extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ type: Types.ObjectId, ref: User.name })
  author: User;

  @Prop()
  imageUrl: string;

  @Prop()
  gpxUrl: string;
}

export const TourSchema = SchemaFactory.createForClass(Tour);
