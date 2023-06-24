import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/hero/')
@ApiTags('Hero')
export class HeroController { }
