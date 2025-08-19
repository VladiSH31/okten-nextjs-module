import React, {FC} from 'react';
import {IUser} from "@/models/IUser";
import Link from "next/link";

type UserProps = {
    user: IUser
}

const UserComponent:FC<UserProps> = ({user}) => {

    return (
        <div>
            <Link href={{pathname: '/users/' + user.id.toString(), query: {data: JSON.stringify(user)}}}>{user.id} {user.name}</Link>
        </div>
    );
};

export default UserComponent;