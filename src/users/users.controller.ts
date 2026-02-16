import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get(':id')
    getUser(@Param('id') id: string): string {
        return `user with id: ${id}`;
    }

    @Post()
    createUser(@Body() body: any): any{
        return body;
    }
}
