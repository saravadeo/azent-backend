import { Controller, Get, Query } from '@nestjs/common';
import { ScrapMetatagsService }   from 'src/scrap-metatags/services/scrap.metatags.service';

@Controller('scrap')
export class ScrapMetatagsController {
  
  constructor(private scrapMetatagsService: ScrapMetatagsService) {
  }
  
  @Get()
  async getMetatagsDetails(@Query('url')url: string) {
    return this.scrapMetatagsService.getMetatagsDetails(url);
  }
}