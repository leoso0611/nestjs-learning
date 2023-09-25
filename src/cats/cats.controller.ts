import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  // GET /cats?weapon --> []
  @Get()
  getCats(@Query('weapon') weapon: 'bite' | 'scratch') {
    // const service = new CatsService();
    return this.catsService.getCats(weapon);
  }

  // GET /cats/:id --> { ... }
  @Get(':id')
  getOneCat(@Param('id') id: string) {
    return this.catsService.getCat(+id);
  }
  // POST /cats
  @Post()
  createCat(@Body() createCatDto: CreateCatDto) {
    return this.catsService.createCat(createCatDto);
  }

  // PUT /cats/:id --> { ... }
  @Put(':id')
  updateCat(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.updateCat(+id, updateCatDto);
  }
  // DELETE /cats/:id
  @Delete(':id')
  removeCat(@Param('id') id: string) {
    return this.catsService.removeCat(+id);
  }
}
