class User {
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

    updateStatus(status) {
        const validStatuses = ['active', 'inactive'];
        if (validStatuses.includes(status)) {
            this.isSuspended = status === 'inactive';
        } else {
            throw new Error('Invalid status');
        }
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
            status: this.getUserStatus()
        };
    }

    getUserStatus() {
        return this.isSuspended ? 'Suspended' : 'Active';
    }

    setAddress(address) {
        this.address = address;
    }
}

