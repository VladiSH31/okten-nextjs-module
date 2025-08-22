import React from 'react';
import Link from "next/link";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/cars'}>Cars List</Link></li>
                <li><Link href={'/add-cars'}>Add Cars</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default MenuComponent;