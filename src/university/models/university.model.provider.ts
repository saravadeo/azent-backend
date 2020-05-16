import { FactoryProvider }     from '@nestjs/common/interfaces';
import { Model, Mongoose }     from 'mongoose';
import { IUniversityDocument } from 'src/university/interfaces/university.interface';
import { UniversitySchema }    from 'src/university/schemas/university.schema';
import { Constants }           from '../../constants/index';

export interface IUniversityModel extends Model<IUniversityDocument> {
  findByCampaignName(campaignName: string): Promise<IUniversityDocument>;
}

class UniversityModelProvider implements FactoryProvider {
  public inject     = [ Constants.InjectionParams.MONGOOSE ];
  public provide    = Constants.ModelNames.UNIVERSITY;
  public useFactory = async (mongoose: Mongoose) =>
    (mongoose.model<IUniversityDocument, IUniversityModel>(Constants.CollectionNames.UNIVERSITY, UniversitySchema));
}

export const universityModelProvider = new UniversityModelProvider();