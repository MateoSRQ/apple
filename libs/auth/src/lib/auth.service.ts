import { Injectable } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
import { JwtStrategy } from './auth.auth0.strategy';

@Injectable()
export class AuthService {
  constructor(
    // private readonly usersService: UsersService,
    private readonly jwtStrategy: JwtStrategy,
  ) {
  }

  async validateUser(username: string, pass: string): Promise<any> {
    // const user = await this.usersService.findOne(username);
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    // return null;
  }

  async validate(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtStrategy.validate(payload)
    };
  }
}
