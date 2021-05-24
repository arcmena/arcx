import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { databaseConfig } from './database/database.config'

import { UserModule } from './user/user.module'

@Module({
    imports: [
        TypeOrmModule.forRoot(databaseConfig.getTypeOrmConfig()),
        UserModule
    ]
})
export class AppModule {}
