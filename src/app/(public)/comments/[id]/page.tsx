import React, {FC} from 'react';
import {Metadata} from "next";

export const generateMetadata = async ({ params }: { params: { id: string } }): Promise<Metadata> => {
    const { id } = await params;

    return {
        title: 'Comment Metadata ' + id,
        description: 'Comment ' + id + ' description',
    };
};

type Props = {
    params: {id: string}
}

const UserPage:FC<Props> = async ({params}) => {
    const {id} = await params;

    return (
        <div>
            Comment Page Content {id}
        </div>
    );
};

export default UserPage;