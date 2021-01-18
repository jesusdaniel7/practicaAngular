export interface credencialesUsuario{
    email: string;
    password: string;
}

export interface respuestaAutentication{
    token: string;
    expiration: Date;
}