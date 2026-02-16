import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get(':id')
    getUser(@Param('id') id: number): any {
        return this.usersService.getUser(id);
    }

    @Get()
    getAllUsers(): any{
        return this.usersService.getAllUsers();
    }

    @Post()
    createUser(@Body() body: any): any{
        return this.usersService.createUser(body);
    }

    @Patch(':id')
    updateUser(@Param('id') id: number, @Body() body: any): any{
        return this.usersService.updateUser(id, body);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number): any{
        return this.usersService.deleteUser(id);
    }
}
