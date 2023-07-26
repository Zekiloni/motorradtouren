import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import bcrypt from 'bcryptjs';

@Schema()
export class User extends Document {
   @Prop({ unique: true })
   username: string;

   @Prop()
   password: string;

   @Prop({ default: false })
   isAdministrator: boolean;

   @Prop({ default: null })
   ride: string | null;

   @Prop({ default: Date.now })
   createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<User>('save', async function (next) {
   if (this.isModified('password') || this.isNew) {
      try {
         const hashedPassword = await bcrypt.hash(
            this.password,
            process.env.PASSWORD_SALT_ROUNDS || 15,
         );

         this.password = hashedPassword;
      } catch (error) {
         return next(error);
      }
   }
   next();
});
