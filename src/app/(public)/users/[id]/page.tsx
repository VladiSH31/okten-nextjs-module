import React, {FC} from 'react';
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";

type Props = {
    params: Promise<{ id: string }>,
    searchParams: Promise<SearchParams>
}

export const generateMetadata = async ({ params }: { params: { id: string } }): Promise<Metadata> => {
  const { id } = params;

  return {
    title: 'User Metadata ' + id,
    description: 'User ' + id + ' description',
  };
};

const Page: FC<Props> = async ({searchParams}) => {
    let {data} = await searchParams;

    let obj = null;
    if (typeof data === "string") {
       obj = JSON.parse(data)
    }

    return (
        <div>
            User Page Content
            {
                obj && <div>{obj.id} {obj.name}</div>
            }
        </div>
    );
};

export default Page;