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
    },
    data: Date
}