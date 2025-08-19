import React from 'react';
import {usersService} from "@/services/api.service";
import UserComponent from "@/components/user-component/UserComponent";

const UsersComponent = async () => {

    const users = await usersService.getAllUsers();


    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;