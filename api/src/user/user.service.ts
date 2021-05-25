import { BadRequestException, Injectable } from '@nestjs/common'

import { UserRepository } from './user.repository'

import { CreateUser } from './dto/create-user.dto'
import { UpdateUser } from './dto/update-user.dto'

import { User } from './user.entity'

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) {}

    async getUsers(): Promise<User[]> {
        return await this.userRepository.getUsers()
    }

    async createUser(newUser: CreateUser): Promise<User> {
        return await this.userRepository.createUser(newUser)
    }

    async updateUser(id: string, newData: UpdateUser): Promise<User> {
        if (!id) throw new BadRequestException('ID must be provided')

        return await this.userRepository.updateUser(id, newData)
    }

    async deleteUser(cpf: string): Promise<void> {
        return await this.userRepository.deleteUser(cpf)
    }
}
