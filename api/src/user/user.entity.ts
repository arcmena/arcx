import { IsNotEmpty, Length } from 'class-validator'
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    BeforeInsert,
    BeforeUpdate
} from 'typeorm'

import * as bcrypt from 'bcryptjs'

@Entity('user')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({ nullable: false })
    @IsNotEmpty()
    name: string

    @Column({ unique: true, nullable: false })
    @IsNotEmpty()
    email: string

    @Column({ unique: true, nullable: false })
    @Length(11, 11)
    @IsNotEmpty()
    cpf: string

    @Column({ nullable: false })
    @IsNotEmpty()
    password: string

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8)
    }
}
