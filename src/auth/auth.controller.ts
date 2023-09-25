import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly appService: AppService) {}

  // POST /login
  @Post('login')
  login(): any {
    return {};
  }

  // GET /protected
  @Get('protected')
  getHello(): string {
    return this.appService.getHello();
  }
}
