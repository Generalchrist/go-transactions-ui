export interface Account {
    id?: number,
    documentNumber: string,
    availableCreditLimit: number
}

export interface Transaction {
    id?: number,
    accountId: number,
    operationTypeId: number,
    amount: number,
    EventDate?: Date
}