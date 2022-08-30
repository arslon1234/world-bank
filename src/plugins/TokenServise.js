const TOKEN_KEY = 'Authorization';
const EXPIRES_AT_KEY = 'ExpiresAt';

const TokenService = {
    getToken() {
        this.checkTokenIfExpiredClear()
        return localStorage.getItem(TOKEN_KEY);
    },
    saveToken(token, expiresAt) {
        localStorage.setItem(TOKEN_KEY, token);
        if (expiresAt) {
            const now = new Date().getTime()
            expiresAt = (expiresAt * 1000) + now
            localStorage.setItem(EXPIRES_AT_KEY, expiresAt)
        }
    },
    checkTokenIfExpiredClear() {
        const expiresAt = this.getExpiresAt()
        const now = new Date().getTime()
        const offset = 10 * 1000
        const lastTime = (expiresAt - now - offset)
        if (lastTime <= 0) {
            this.removeToken()
        }
    },
    getExpiresAt() {
        const expiresAt = localStorage.getItem(EXPIRES_AT_KEY)
        if (expiresAt) return +expiresAt
        return null
    },
    removeToken() {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(EXPIRES_AT_KEY)
    },

};

export default TokenService;