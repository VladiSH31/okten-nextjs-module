import React from 'react';

const UsersPage = async () => {
    const users: IUser[] = await fetch('http://localhost:3001/users/api')
        .then(res => res.json())

    return (
        <div>
           Users Page
            {
                users.map(user => <div>{user.name}</div>)
            }
        </div>
    );
};

export default UsersPage;