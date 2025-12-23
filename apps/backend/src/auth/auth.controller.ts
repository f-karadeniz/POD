import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Headers, Get, UnauthorizedException } from '@nestjs/common';
import { UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(
    @Body('email') email: string,
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return this.authService.register(email, username, password);
  }

  @Post('login')
    async login(
      @Body('email') email: string,
      @Body('password') password: string,
    ) {
      return this.authService.login(email, password);
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
        me(@Req() req) {
            return this.authService.me(req.user.userId);
        }
}
