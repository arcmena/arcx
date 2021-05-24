import { IsNotEmpty, Length } from 'class-validator'

export class CreateUser {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @Length(11, 11)
    cpf: string

    @Length(6, 16)
    @IsNotEmpty()
    password: string
}
