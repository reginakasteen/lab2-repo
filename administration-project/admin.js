class UserManager {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        if (!(user instanceof User)) {
            throw new Error('Invalid user');
        }
        this.users.push(user);
    }

    deleteUser(userId) {
        this.users = this.users.filter(u => u.id !== userId);
    }

    updateUserStatus(userId, status) {
        const user = this.getUserById(userId);
        if (user) {
            user.updateStatus(status);
        }
    }

    getUserById(userId) {
        return this.users.find(user => user.id === userId);
    }

    getActiveUsers() {
        return this.users.filter(user => user.getUserStatus() === 'Active');
    }

    getInactiveUsers() {
        return this.users.filter(user => user.getUserStatus() === 'Suspended');
    }

    getUserCount() {
        return this.users.length;
    }
}
