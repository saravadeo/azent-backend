import { Document } from 'mongoose';

export interface IUniversityDocument extends Document {
  university_id: string;
  alpha_two_code: string,
  country: string,
  domain: string,
  name: string,
  web_page: string,
  created_at: number,
  created_by: string
}