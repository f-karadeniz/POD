import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

  async register(email: string, username: string, password: string) {
    const existing = this.usersService.findByEmail(email);
    if (existing) {
      throw new BadRequestException('Email already in use');
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = this.usersService.create({
      email,
      username,
      passwordHash,
    });

    return {
      id: user.id,
      email: user.email,
      username: user.username,
    };
  }

  async login(email: string, password: string) {
    const user = this.usersService.findByEmail(email);

    if (!user) {
        throw new UnauthorizedException('Invalid credentials');
    }

    const passwordValid = await bcrypt.compare(password, user.passwordHash);

    if (!passwordValid) {
        throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
        sub: user.id,
        email: user.email,
    };

    const accessToken = this.jwtService.sign(payload);

    return {
        accessToken,
        user: {
            id: user.id,
            email: user.email,
            username: user.username,
        },
    };
  }

  me(userId: string) {
    const user = this.usersService.findById(userId);

    if (!user) {
        throw new UnauthorizedException();
    }

    return {
        id: user.id,
        email: user.email,
        username: user.username,
    };
  }
}

