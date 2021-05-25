import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'

import { User } from './user.entity'

import { CreateUser } from './dto/create-user.dto'

import { UserService } from './user.service'
import { SETTINGS } from '../app.utils'

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async getUsers(): Promise<User[]> {
        return await this.userService.getUsers()
    }

    @Post('/register')
    async createUser(
        @Body(SETTINGS.VALIDATION_PIPE_422) newUser: CreateUser
    ): Promise<User> {
        return await this.userService.createUser(newUser)
    }

    @Delete('/:cpf')
    async deleteUSer(@Param('cpf') cpf: string): Promise<void> {
        return await this.userService.deleteUser(cpf)
    }
}
