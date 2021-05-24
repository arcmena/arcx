import { IsNotEmpty, Length } from 'class-validator'
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm'

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
    @Length(6, 16)
    @IsNotEmpty()
    password: string

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date
}
