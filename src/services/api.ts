import axios from '../config/api-config';
import { Account, Transaction } from '../models/models';

export async function login(data: Account) {
    const response = await axios.post("accounts", data);
    return response.data;
}

export async function getAccounts(){
    const response = await axios.get("accounts");
    return response.data;
}

export async function getAccountById(id : number){
    const response = await axios.get(`accounts/${id}`);
    return response.data;
}

export async function postTransaction(data : Transaction){
    const response = await axios.post("transactions",data);
    return response.data;
}

export async function getTransactions(){
    const response = await axios.get("transactions");
    return response.data;
}