import { authProvider, parameters } from '../authProvider';
import config from '../config.json';

async function getUserInfo() {
    const url = `${config.graph.endpoint}/me`;
    const token = await authProvider.getAccessToken(parameters);

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token.accessToken}`,
                'Content-Type': 'application/json',
            },
        });
        return response.json();
    } catch (error) {
        throw new Error(error.text());
    }
};

async function getUserPhoto() {
    const url = `${config.graph.endpoint}/me/photos/240x240/$value`;
    const token = await authProvider.getAccessToken(parameters);

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token.accessToken}`,
                'Content-Type': 'application/json',
            },
        });
        return await response.blob();
    } catch (error) {
        throw new Error(error.text());
    }
};

export { getUserInfo, getUserPhoto };