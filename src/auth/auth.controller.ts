import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { AuthenticatedGuard } from './authenticated.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // POST /login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return { message: 'Logged in' };
  }

  // GET /protected
  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user;
  }
}
