/* Назва класу має бути з великої літери */
export default class user {
    constructor(id, username, email, role, address, phone) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.role = role;
        this.address = address;
        this.phone = phone;
        this.lastLogin = null;
        this.isSuspended = false;
    }
    /* Коментар не за шаблоном, прибрати */
    UserStatus(status) { //Визначення статусу користувача
        if (status === 'active') {
            this.isSuspended = false;
        } else if (status === 'inactive') {
            this.isSuspended = true;
        }
    }

    getStatus() {
        return this.isSuspended ? 'Suspended' : 'Active';
    }

    isEmailValid() {
        return this.email.includes('@');
    }

    setLastLogin(time) {
        this.lastLogin = time;
    }

    getUserInfo() {
        return {
            username: this.username,
            email: this.email,
            role: this.role,
            lastLogin: this.lastLogin,
            status: this.UserStatus()
        };
    }

    setAddress(address) {
        this.address = address;
    }

    /* Клас не має ніякої функціональності, окрім зберігання */
}

