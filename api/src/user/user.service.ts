import { Injectable } from '@nestjs/common'

import { UserRepository } from './user.repository'
import { User } from './user.entity'
import { CreateUser } from './dto/create-user.dto'

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) {}

    async getUsers(): Promise<User[]> {
        return await this.userRepository.getUsers()
    }

    async createUser(newUser: CreateUser): Promise<User> {
        return await this.userRepository.createUser(newUser)
    }

    async deleteUser(cpf: string): Promise<void> {
        return await this.userRepository.deleteUser(cpf)
    }
}
