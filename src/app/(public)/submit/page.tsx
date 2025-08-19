import React, {FC} from 'react';

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}


const SubmitPage:FC<Props> = async ({searchParams}) => {
    const awaitedSp = await searchParams;

    return (
        <div>
            This Page after submitting {awaitedSp.name} {awaitedSp.age}
        </div>
    );
};

export default SubmitPage;