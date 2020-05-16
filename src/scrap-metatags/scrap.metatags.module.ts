import { Global, Module }          from '@nestjs/common';
import { ScrapMetatagsController } from 'src/scrap-metatags/controllers/scrap.metatags.controller';
import { ScrapMetatagsService }    from 'src/scrap-metatags/services/scrap.metatags.service';

@Global()
@Module(
  {
    controllers: [ ScrapMetatagsController ],
    imports    : [],
    exports    : [],
    providers  : [ ScrapMetatagsService ],
  },
)
export class ScrapMetatagsModule {

}