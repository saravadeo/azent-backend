import { FactoryProvider, Module } from '@nestjs/common';
import { ConfigurationService }    from 'src/configuration/configuration.service';
import { Constants }               from 'src/constants';
import * as elasticsearch          from '@elastic/elasticsearch';

class ElasticSearchProvider implements FactoryProvider {
  public inject     = [ ConfigurationService ];
  public provide    = Constants.InjectionParams.ELASTIC_SEARCH;
  public useFactory = async (configurationService: ConfigurationService) => {
    return new elasticsearch.Client(
      {
        node: configurationService.getElasticSearchUrl(),
      },
    );
  };
}

export const elasticSearchProvider = new ElasticSearchProvider();