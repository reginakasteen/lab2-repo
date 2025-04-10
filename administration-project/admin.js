export default class admin {
constructor(users) {
    this.users = users;
}

activate(userId) {
    let user = this.users.find(u => u.id === userId);
    if (user) user.updateUserStatus('active');
}





deactivate(userId) {
    let user = this.users.find(u => u.id === userId);
    if (user) user.updateUserStatus('inactive');
}

suspend(userId) {
    let user = this.users.find(u => u.id === userId);
    if(user) user.updateUserStatus('inactive');
}

deleteUser(userId) {
    this.users = this.users.filter(u => u.id !== userId);
}

get(userId) {
    return this.users.find(u => u.id === userId);
}

getCount() {
    return this.users.filter(user => user.getUserStatus() === 'Active').length;
}

getCount2() {
    return this.users.filter(user => user.getUserStatus() === 'Suspended').length;
}

getCount3() {
    return this.users.length;
}
}

