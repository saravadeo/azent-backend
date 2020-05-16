import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Model }                            from 'mongoose';
import * as path                            from 'path';
import { Constants }                        from 'src/constants';
import { GetUniversityRequest }             from 'src/university/dtos/get.university.request';
import { IUniversityDocument }              from 'src/university/interfaces/university.interface';
import { IUniversityModel }                 from 'src/university/models/university.model.provider';

const fs = require('fs');

@Injectable()
export class UniversityService implements OnModuleInit {
  
  constructor(
    @Inject(Constants.ModelNames.UNIVERSITY) private readonly universityRepository: Model<IUniversityDocument, IUniversityModel>,
  ) {
  
  }
  
  private createModelFromDto(university: any) {
    const newUniversity: any     = {};
    newUniversity.alpha_two_code = university.alpha_two_code;
    newUniversity.country        = university.country;
    newUniversity.domain         = university.domain;
    newUniversity.web_page       = university.web_page;
    newUniversity.name           = university.name;
    newUniversity.created_at     = new Date().getTime();
    newUniversity.created_by     = 'SCRIPT';
    return newUniversity;
  }
  
  public async onModuleInit() {
    const universityCount = await this.universityRepository.countDocuments({});
    if ( universityCount === 0 ) {
      const dataFilePath     = path.resolve(process.cwd(), 'data', 'universities.json');
      let rawData            = fs.readFileSync(dataFilePath);
      let universities       = JSON.parse(rawData);
      const universityToSave = [];
      universities.forEach(university => {
        universityToSave.push(this.createModelFromDto(university));
      });
      await this.universityRepository.create(universityToSave);
    }
  }
  
  async getCountryCodes() {
    return this.universityRepository.distinct('alpha_two_code');
  }
  
  async getDomainExtension() {
    return this.universityRepository.aggregate(
      [
        {
          '$project': {
            'domain': {
              '$substr': [
                '$domain', {
                  '$indexOfBytes': [
                    '$domain', '.',
                  ],
                }, {
                  '$strLenBytes': '$domain',
                },
              ],
            },
          },
        }, {
        '$group': {
          '_id': '$domain',
        },
      }, {
        '$sort': {
          '_id': 1,
        },
      },
      ],
    );
  }
  
  async getUniversities(request: GetUniversityRequest) {
    const baseRequest = {};
    if ( request.name ) {
      baseRequest['name'] = new RegExp(`${ request.name }`, 'i');
    }
    if ( request.domain ) {
      baseRequest['domain'] = new RegExp(`${ request.domain }$`, 'i');
    }
    if ( request.countryCode ) {
      baseRequest['alpha_two_code'] = request.countryCode;
    }
    const totalCount     = await this.universityRepository.countDocuments(baseRequest);
    const pageSizeNumber = Number(request.pageSize);
    const skipEntities   = (Number(request.pageNumber) - 1) * pageSizeNumber;
    const universities   = await this.universityRepository.find(baseRequest).skip(skipEntities).limit(pageSizeNumber);
    return { totalCount, universities };
  }
}