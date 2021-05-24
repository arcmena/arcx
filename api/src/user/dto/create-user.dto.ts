import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator'
import { MESSAGES, REGEX } from 'src/app.utils'

export class CreateUser {
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @Length(11, 11)
    cpf: string

    @Length(6, 16)
    @IsNotEmpty()
    @Matches(REGEX.PASSWORD_RULE, {
        message: MESSAGES.PASSWORD_RULE_MESSAGE
    })
    password: string

    @Length(6, 16)
    @IsNotEmpty()
    @Matches(REGEX.PASSWORD_RULE, {
        message: MESSAGES.PASSWORD_RULE_MESSAGE
    })
    confirm: string
}
