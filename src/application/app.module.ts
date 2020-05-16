import { Module }              from '@nestjs/common';
import { ConfigurationModule } from 'src/configuration/configuration.module';
import { DatabaseModule }      from 'src/database/database.module';

@Module(
  {
    imports    : [
      ConfigurationModule,
      DatabaseModule,
    ],
    controllers: [],
    providers  : [],
  },
)
export class AppModule {
}
