const API_ROOT = `http://localhost:3000`

const headersObj = {
    'Content-Type' : 'application/json',
    Accepts : 'application/json'
};

const fetchSessions = () => {
    return fetch(`${API_ROOT}/sessions`).then(r=>r.json())
};

const fetchUsers = () => {
    return fetch(`${API_ROOT}/users`).then(r=>r.json())
};

const fetchTopics = () => {
    return fetch(`${API_ROOT}/topics`).then(r=>r.json())
};

const fetchCategories = () => {
    return fetch(`${API_ROOT}/categories`).then(r=>r.json())
};

const login = (data) => {
    return fetch(`${API_ROOT}/api/v1/login`, {
        method : 'POST',
        headers : headersObj,
        body: JSON.stringify(data)
    })
    .then(res => res.json())
}

export const API = {
    auth : {
        login
    },
    sessions : {
        fetchSessions
    },
    users : {
        fetchUsers
    },
    topics : {
        fetchTopics
    },
    categories : {
        fetchCategories
    }
}