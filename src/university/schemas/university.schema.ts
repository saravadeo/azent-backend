import { Schema } from 'mongoose';

export const UniversitySchema: Schema = new Schema(
  {
    alpha_two_code: String,
    country       : String,
    domain        : String,
    name          : String,
    web_page      : String,
    created_at    : Number,
    created_by    : String,
  }, {
    toJSON: { virtuals: true },
  },
);
UniversitySchema.virtual('university_id').get(function() {
  return this._id;
});