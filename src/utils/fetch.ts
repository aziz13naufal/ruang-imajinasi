import axios from 'axios';
import instance from '@/app/configs/http';

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
    return await instance.post(`${url}`, {
        headers: {
            // Authorization: `Bearer ${token}`,
            // ApiKey: config.API_KEY,
            'Content-Type': formData ? 'multipart/form-data' : 'application/json',
        },
        body: JSON.stringify(payload)
        
    })
}