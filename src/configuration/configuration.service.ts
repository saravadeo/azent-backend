import { Injectable } from '@nestjs/common';
import { ModuleRef }  from '@nestjs/core';
import * as path      from 'path';
import { Reader }     from 'properties-reader';
import { Constants }  from 'src/constants';
import PropertiesReader = require('properties-reader');

@Injectable()
export class ConfigurationService {
  
  private readonly envReader: Reader;
  
  constructor(private readonly moduleRef: ModuleRef) {
    const configFileName = `config-${ process.env.ENV || process.env.NODE_ENV || 'dev' }.properties`;
    const configFilePath = path.resolve(process.cwd(), 'resources', configFileName);
    this.envReader       = PropertiesReader(configFilePath);
  }
  
  private get(key: string, defaultValue?: any) {
    return this.envReader.get(key) || defaultValue;
  }
  
  public getApplicationPort(): number {
    return this.get(Constants.PROPS.APP_PORT, 8692);
  }
  
  public getDataSourceURL() {
    return this.get(Constants.PROPS.DB_DATA_SOURCE_URL);
  }
  
  public getDataBaseTemporaryQueueSize() {
    return this.get(Constants.PROPS.DB_TEMP_QUEUE_SIZE);
  }
  
  public getDataBaseConnectionTimeOutMS() {
    return this.get(Constants.PROPS.DB_CONNECTION_TIMEOUT_MS);
  }
  
  public getDataBaseConnectionPoolSize() {
    return this.get(Constants.PROPS.DB_CONNECTION_POOL_SIZE);
  }
  
  public getDataBaseReconnectInterval() {
    return this.get(Constants.PROPS.DB_RECONNECT_INTERVAL_MS);
  }
  
  public getDataBaseReconnectTries() {
    return this.get(Constants.PROPS.DB_RECONNECT_RETRY_COUNT);
  }
  
  public getDataBaseSocketTimeOutMS() {
    return this.get(Constants.PROPS.DB_SOCKET_TIMEOUT_MS);
  }
  
  public getElasticSearchUrl() {
    return this.get(Constants.PROPS.ELASTIC_SEARCH_URL);
  }
}
