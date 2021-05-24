import {
    Body,
    Controller,
    Get,
    Post,
    UsePipes,
    ValidationPipe
} from '@nestjs/common'

import { User } from './user.entity'

import { CreateUser } from './dto/create-user.dto'

import { UserService } from './user.service'

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async getUsers(): Promise<User[]> {
        return await this.userService.getUsers()
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createUser(@Body() newUser: CreateUser): Promise<User> {
        return await this.createUser(newUser)
    }
}
