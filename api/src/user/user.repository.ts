import { InternalServerErrorException, NotFoundException } from '@nestjs/common'
import { validateOrReject } from 'class-validator'
import { EntityRepository, Repository } from 'typeorm'
import { CreateUser } from './dto/create-user.dto'

import { User } from './user.entity'

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async getUsers(): Promise<User[]> {
        const users = await this.find()

        if (!users) throw new NotFoundException('There was no users found')

        return users
    }

    async createUser(newUser: CreateUser): Promise<User> {
        try {
            await validateOrReject(newUser)

            const user = this.create(newUser)

            await this.save(user)

            return user
        } catch (error) {
            throw new InternalServerErrorException(error)
        }
    }
}
