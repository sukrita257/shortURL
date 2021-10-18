export interface User {
    id?:number,
    email: string,
    password: string,
    confirm: string,
    dob: Array<Date>
}

export interface Url{
    id?:number | undefined,
    longurl:string,
    shorturl:string,
    count:number
}
