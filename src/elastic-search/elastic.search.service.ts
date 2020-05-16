import { Injectable } from '@nestjs/common';
import { ModuleRef }  from '@nestjs/core';
import { Client }     from 'elasticsearch';
import { Constants }  from 'src/constants';

@Injectable()
export class ElasticSearchService {
  
  private elasticSearchClient: Client;
  
  constructor(private readonly moduleRef: ModuleRef) {
    this.elasticSearchClient = this.moduleRef.get<Client>(Constants.InjectionParams.ELASTIC_SEARCH);
  }
}