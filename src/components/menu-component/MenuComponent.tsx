import React from 'react';
import Link from "next/link";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contacts">Contacts</Link></li>
                <li><Link href="/users">Users</Link></li>

            </ul>
            <hr/>
        </div>
    );
};

export default MenuComponent;