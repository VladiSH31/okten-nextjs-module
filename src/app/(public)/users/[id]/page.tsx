import React, {FC} from 'react';
import {Metadata} from "next";

type Props = {
    params: { id: string }
}

export const generateMetadata = async ({ params }: { params: { id: string } }): Promise<Metadata> => {
  const { id } = params;

  return {
    title: 'User Metadata ' + id,
    description: 'User ' + id + ' description',
  };
};

const Page: FC<Props> = async ({params}) => {
    const {id} = await params;


    return (
        <div>
            User Page Content {id}
        </div>
    );
};

export default Page;