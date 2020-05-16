import { ConfigurationService } from '../configuration/configuration.service';
import { Injectable }           from '@nestjs/common';
import { FactoryProvider }      from '@nestjs/common/interfaces';
import * as mongoose            from 'mongoose';
import { Mongoose }             from 'mongoose';
import { Constants }            from 'src/constants';

@Injectable()
class MongooseDataBaseProvider implements FactoryProvider {
    inject                                                                        = [ ConfigurationService ];
    public provide: string                                                        = Constants.InjectionParams.MONGOOSE;
    public useFactory: (configuration: ConfigurationService) => Promise<Mongoose> = async (configuration: ConfigurationService) => {
        return mongoose.connect(configuration.getDataSourceURL(), {
            autoReconnect     : true,
            bufferCommands    : true,
            bufferMaxEntries  : configuration.getDataBaseTemporaryQueueSize(),
            connectTimeoutMS  : configuration.getDataBaseConnectionTimeOutMS(),
            poolSize          : configuration.getDataBaseConnectionPoolSize(),
            reconnectInterval : configuration.getDataBaseReconnectInterval(),
            reconnectTries    : configuration.getDataBaseReconnectTries(),
            socketTimeoutMS   : configuration.getDataBaseSocketTimeOutMS(),
            useCreateIndex    : true,
            useNewUrlParser   : true,
            useUnifiedTopology: true,
            useFindAndModify  : false,
        });
    };
}

export const mongooseDBProvider = new MongooseDataBaseProvider();
