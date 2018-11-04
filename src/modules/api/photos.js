import { API_BASE_URL } from '../../config';
import { authorizedRequest } from './index';


export const deletePhoto = (name) => {
    const url = `${API_BASE_URL}/photos`;
    const body = { name };
    return authorizedRequest(url, 'DELETE', body)
}