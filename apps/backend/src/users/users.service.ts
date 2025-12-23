import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

export interface User {
  id: string;
  email: string;
  username: string;
  passwordHash: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];

  findByEmail(email: string) {
    return this.users.find(u => u.email === email);
  }

  findById(id: string) {
    return this.users.find(u => u.id === id);
  }

  create(data: Omit<User, 'id'>) {
    const user: User = {
      id: randomUUID(),
      ...data,
    };

    this.users.push(user);
    return user;
  }
}
