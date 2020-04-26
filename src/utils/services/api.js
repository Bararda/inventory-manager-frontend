export default class Api {

    static async get(endPoint, query = {}) {
        const url = new URL(Api.endPointURL + endPoint);
        Object.keys(query).forEach(key =>
            url.searchParams.append(key, query[key])
        );
        const response = await fetch(url.toString(), {
            credentials: 'include',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return data;
    }

    static async post(endPoint, obj) {
        const response = await fetch(Api.endPointURL + endPoint, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json();
    }

    static async put(endPoint, updates , query = {}) {

        const url = new URL(Api.endPointURL + endPoint);
        Object.keys(query).forEach(key =>
            url.searchParams.append(key, query[key])
        );
        const response = await fetch(url.toString(), {
            method: 'PUT',
            body: JSON.stringify(updates),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.json();
    }

    static async delete(endPoint, query = {}) {

        const url = new URL(Api.endPointURL + endPoint);
        Object.keys(query).forEach(key =>
            url.searchParams.append(key, query[key])
        );
        const response = await fetch(url.toString(), {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return await response.json();
    }
}
Api.endPointURL = 'http://localhost:8080';