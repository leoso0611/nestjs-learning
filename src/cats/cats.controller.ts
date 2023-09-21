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

@Controller('cats')
export class CatsController {
  // GET /cats --> []
  @Get()
  getCats(@Query('type') type: string) {
    return [{ type }];
  }

  // GET /cats/:id --> { ... }
  @Get(':id')
  getOneCat(@Param('id') id: string) {
    return {
      id,
    };
  }
  // POST /cats
  @Post()
  createCat(@Body() createCatDto: CreateCatDto) {
    return {
      name: createCatDto.name,
    };
  }

  // PUT /cats/:id --> { ... }
  @Put(':id')
  updateCat(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return {
      id,
      name: updateCatDto.name,
    };
  }
  // DELETE /cats/:id
  @Delete(':id')
  removeCat(@Param('id') id: string) {
    return {
      id,
    };
  }
}
