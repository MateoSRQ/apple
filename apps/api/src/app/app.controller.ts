import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from '@apple/auth';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getData(@Request() req) {
    console.log('user')
    console.log(req);
    console.log(req.user);
    console.log(this.authService);
    // console.log(this.authModule.);
    const login = this.authService.validate(req.user)
    console.log(login);
    return req.user;
  }

  @Get('callback')
  callback() {
    return 'callback';
  }
}
