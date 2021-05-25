import {
    ConflictException,
    InternalServerErrorException,
    NotFoundException
} from '@nestjs/common'
import { validateOrReject } from 'class-validator'
import { EntityRepository, Repository } from 'typeorm'

import { CreateUser } from './dto/create-user.dto'
import { UpdateUser } from './dto/update-user.dto'

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

            const userCpfExists = await this.findOne({ cpf: newUser.cpf })

            const userEmailExists = await this.findOne({ email: newUser.email })

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

    async updateUser(id: string, newData: UpdateUser): Promise<User> {
        try {
            await validateOrReject(newData)

            const result = await this.findOne({ where: { id } })

            if (!result)
                throw new NotFoundException(`User not found with the id: ${id}`)

            await this.update({ id: result.id }, { ...newData })

            const updated = await this.findOne({ id: result.id })

            return updated
        } catch (error) {
            throw new InternalServerErrorException(error)
        }
    }

    async deleteUser(cpf: string): Promise<void> {
        try {
            const deleted = await this.delete({ cpf })

            if (deleted.affected === 0)
                throw new NotFoundException(
                    `User not found with the cpf: ${cpf}`
                )
        } catch (error) {
            throw new InternalServerErrorException(error)
        }
    }
}
