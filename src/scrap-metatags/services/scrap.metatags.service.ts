import { Injectable } from '@nestjs/common';

const ogs = require('open-graph-scraper');

@Injectable()
export class ScrapMetatagsService {
  
  async getMetatagsDetails(url: string) {
    const options = { 'url': url, 'timeout': 4000 };
    try {
      const result = await ogs(options);
      return result.data;
    } catch ( e ) {
      return {};
    }
  }
}