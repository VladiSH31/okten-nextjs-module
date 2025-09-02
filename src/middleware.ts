import {NextRequest, NextResponse} from "next/server";


export const middleware = async (request: NextRequest) => {
    console.log(request)

    // const login = request.cookies.get('login');
    // const password = request.cookies.get('password');
    //
    // const response = await fetch('${URL}', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     key1: login,
    //     key2: password
    //   })
    // })
    //     .then(value => value.json())
    //
    // return response;

    // const token = 'acnsacfbasuivbasucnancvad';
    // const response = NextResponse.next({
    //     headers: {
    //         Authorization: token
    //     }
    // })
    // return response;

    return new NextResponse('BOdy text', {
        headers: {
            'vad': 'vad'
        }
    })

}

export const config = {
    matcher: '/auth'
}