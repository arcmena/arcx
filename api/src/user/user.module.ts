import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// Entity
import { User } from './user.entity'
// Controller
import { UserController } from './user.controller'
// Service
import { UserService } from './user.service'
// Repository
import { UserRepository } from './user.repository'

@Module({
    imports: [TypeOrmModule.forFeature([User, UserRepository])],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}
