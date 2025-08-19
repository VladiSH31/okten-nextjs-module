import axios from 'axios';
import {IUser} from "@/models/IUser";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {},
});

export const usersService = {
    async getAllUsers(): Promise<IUser[]> {
        const { data } = await axiosInstance.get<IUser[]>('users');
        return data;
    },
};

