import { Module }              from '@nestjs/common';
import { ConfigurationModule } from 'src/configuration/configuration.module';
import { DatabaseModule }      from 'src/database/database.module';
import { ScrapMetatagsModule } from 'src/scrap-metatags/scrap.metatags.module';
import { UniversityModule }    from 'src/university/university.module';

@Module(
  {
    imports    : [
      ConfigurationModule,
      DatabaseModule,
      UniversityModule,
      ScrapMetatagsModule,
    ],
    controllers: [],
    providers  : [],
  },
)
export class AppModule {
}
