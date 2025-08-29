export async function GET () {
    const users = await  fetch('https://jsonplaceholder.typicode.com/users/')
        .then(res => res.json())
    return Response.json(users)
}