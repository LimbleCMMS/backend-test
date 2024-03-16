import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common/database/schema/abstract.schema';
import { Types } from 'mongoose';

@Schema({ versionKey: false, timestamps: true })
export class LocationDocument extends AbstractDocument {
  @Prop({ required: true })
  name: string;
}

const LocationSchema = SchemaFactory.createForClass(LocationDocument);
LocationSchema.pre<LocationDocument>('save', function (next) {
  if (!this._id) {
    this._id = new Types.ObjectId();
  }
  next();
});
export { LocationSchema };