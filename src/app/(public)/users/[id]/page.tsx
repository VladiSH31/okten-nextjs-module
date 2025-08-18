import React, {FC} from 'react';
import {Metadata} from "next";

export const generateMetadata = async ({ params }: { params: { id: string } }): Promise<Metadata> => {
    const { id } = await params;

    return {
        title: 'User Metadata ' + id,
        description: 'User ' + id + ' description',
    };
};

type Props = {
    params: {id: string}
}

const UserPage:FC<Props> = async ({params}) => {
    const {id} = await params;

    return (
        <div>
            User Page Content {id}
        </div>
    );
};

export default UserPage;