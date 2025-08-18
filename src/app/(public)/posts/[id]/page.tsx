import React, {FC} from 'react';
import {Metadata} from "next";

export const generateMetadata = async ({ params }: { params: { id: string } }): Promise<Metadata> => {
    const { id } = await params;

    return {
        title: 'Post Metadata ' + id,
        description: 'Post ' + id + ' description',
    };
};

type Props = {
    params: {id: string}
}

const UserPage:FC<Props> = async ({params}) => {
    const {id} = await params;

    return (
        <div>
            Post Page Content {id}
        </div>
    );
};

export default UserPage;