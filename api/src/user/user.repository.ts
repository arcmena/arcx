import {
    ConflictException,
    InternalServerErrorException,
    NotFoundException
} from '@nestjs/common'
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
        const errors = []

        try {
            await validateOrReject(newUser)

            const userCpfExists = await this.findOne({
                where: { cpf: newUser.cpf }
            })

            const userEmailExists = await this.findOne({
                where: { email: newUser.email }
            })

            if (newUser.password !== newUser.confirm)
                errors.push(`Password and confirm don't match`)

            if (userCpfExists)
                errors.push(`Already exists a user with CPF: ${newUser.cpf}`)

            if (userEmailExists)
                errors.push(
                    `Already exists a user with email: ${newUser.email}`
                )

            if (errors.length !== 0) {
                throw new ConflictException(errors)
            }

            const user = this.create(newUser)

            await this.save(user)

            return user
        } catch (error) {
            throw new InternalServerErrorException(error)
        }
    }
}
