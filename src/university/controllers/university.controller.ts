import { Controller, Get, Query } from '@nestjs/common';
import { SuccessResponse }        from 'src/responses/success.response';
import { GetUniversityRequest }   from 'src/university/dtos/get.university.request';
import { UniversityService }      from 'src/university/services/university.service';

@Controller('university')
export class UniversityController {
  
  constructor(private universitiesService: UniversityService) {
  }
  
  @Get()
  async getUniversities(@Query() request: GetUniversityRequest) {
    const { totalCount, universities } = await this.universitiesService.getUniversities(request);
    return new SuccessResponse().addEntity('universities', universities).addEntity('totalCount', totalCount);
  }
  
  @Get('country-codes')
  async getCountryCodes() {
    const countryCodes = await this.universitiesService.getCountryCodes();
    return new SuccessResponse().addEntity('countryCodes', countryCodes);
  }
  
  @Get('domain-extensions')
  async getDomainExtension() {
    const domainExtensions = await this.universitiesService.getDomainExtension();
    return new SuccessResponse().addEntity('domainExtensions', domainExtensions);
  }
  
}