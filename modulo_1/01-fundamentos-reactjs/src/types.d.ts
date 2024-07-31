declare interface User {
    id: number
    author: {
        avatarUrl: string
        name: string
        role: string
    },
    content: {
        type: string, 
        content:string
        id?: number
    },
    data: Date
}