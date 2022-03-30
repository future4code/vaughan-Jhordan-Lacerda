export type user = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string,
    posts: Array<post>
}

export type post = {
    id: number,
    title: string,
    body: string,
    userId: number
}