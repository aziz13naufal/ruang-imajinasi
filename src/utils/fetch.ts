import axios from 'axios';
import instance from '@/app/configs/http';
import { getCookie } from 'cookies-next';


export async function getData(url: string, params?: any, responseType = '', req?: any) {

    return await instance.get(`${url}`, {
        params,
        headers: {
            // Authorization: `Bearer ${token}`,
            // ApiKey: config.API_KEY,
        },
        responseType: responseType as any,
    });
}

export async function postData(url: string, payload: any, formData = false, req?: any) {
    const token = getCookie('token', { req });

    return await instance.post(`${url}`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
            // ApiKey: config.API_KEY,
            'Content-Type': formData ? 'multipart/form-data' : 'application/json',
        },
    })
}

export async function deleteData(url: string, payload?: any, req?: any) {
    const token = getCookie('token', { req });

    if (!payload) {
        return await instance.delete(`${url}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                // ApiKey: config.API_KEY,
            },
        });
    } else {
        return await instance.post(`${url}`, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
                // ApiKey: config.API_KEY,
            },
        });
    }
}