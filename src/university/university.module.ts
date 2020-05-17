import { Global, Module }          from '@nestjs/common';
import { elasticSearchProvider }   from 'src/elastic-search/elastic.search.provider';
import { UniversityController }    from 'src/university/controllers/university.controller';
import { universityModelProvider } from 'src/university/models/university.model.provider';
import { UniversityService }       from 'src/university/services/university.service';

@Global()
@Module(
  {
    controllers: [ UniversityController ],
    imports    : [],
    exports    : [],
    providers  : [ universityModelProvider, UniversityService ],
  },
)
export class UniversityModule {

}