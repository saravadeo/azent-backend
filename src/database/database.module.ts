import { Global, Module }     from '@nestjs/common';
import { mongooseDBProvider } from 'src/database/database.provider';

@Global()
@Module(
    {
        providers: [ mongooseDBProvider ],
        exports  : [ mongooseDBProvider ],
    },
)
export class DatabaseModule {
}
