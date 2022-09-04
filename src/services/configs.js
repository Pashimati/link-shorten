export const _apiBase = 'http://79.143.31.216'

export const _headers = (token) => {
    return {
        "Content-Type": "multipart/form-data",
        'Authorization' : `Bearer ${token}`
    }
}

