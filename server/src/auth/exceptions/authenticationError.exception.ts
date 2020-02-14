import {HttpException, HttpStatus} from '@nestjs/common';

export class AuthenticationError extends HttpException {
    constructor() {
        super({error: 'The login or password is incorrect'}, HttpStatus.FORBIDDEN);
    }
}
