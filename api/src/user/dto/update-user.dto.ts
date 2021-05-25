import { IsEmail, Length } from 'class-validator'

export class UpdateUser {
    name: string

    @IsEmail()
    email: string

    @Length(11, 11)
    cpf: string
}
