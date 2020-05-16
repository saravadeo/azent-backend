export class SuccessResponse {
    private readonly message;
    private readonly status;
    
    constructor(message?: string) {
        this.status  = 'success';
        this.message = message;
    }
    
    addEntity(key: string, value: any): SuccessResponse {
        this[key] = value;
        return this;
    }
}
