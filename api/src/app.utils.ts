import { HttpStatus, ValidationPipe } from '@nestjs/common'

const PASSWORD_RULE =
    /^(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/

const PASSWORD_RULE_MESSAGE =
    'Password should have 1 upper case and lower case letter along with a number and special character.'

const VALIDATION_PIPE_422 = new ValidationPipe({
    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
})

export const REGEX = {
    PASSWORD_RULE
}

export const MESSAGES = {
    PASSWORD_RULE_MESSAGE
}

export const SETTINGS = {
    VALIDATION_PIPE_422
}
