export class ServerError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ServerError";
    }
}

export class AuthError extends Error {
    private statusCode: number;
    constructor(message: string, statusCode: number, ) {
        super(message);
        this.name = "AuthError";
        this.statusCode = statusCode;
        this.message = message;
    }
}