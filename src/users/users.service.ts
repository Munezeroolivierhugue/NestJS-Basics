import { Injectable } from '@nestjs/common';
interface User {
    id: number;
    name: string;
    verified: boolean;
}
@Injectable()
export class UsersService {
    private users: User[] = [];

    createUser(body :User){
        this.users.push(body);
        return `user added ${JSON.stringify(this.users)}`
    }

    getUser(id: number){
        const user = this.users.find(person => person.id == id)
        return `user is ${JSON.stringify(user?.name)} with id: ${id}`
    }

    getAllUsers(){
        return `${JSON.stringify(this.users)}`
    }

    updateUser(id: number, body: any){
        return JSON.stringify(this.users.map(user => user.id == id ? body : user));
    }

    deleteUser(id: number){
        return `User Deleted Successfully ${JSON.stringify(this.users.filter(user => user.id != id))}`
    }
}
