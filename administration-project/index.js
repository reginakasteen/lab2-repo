const userManager = new UserManager();

const alice = new User(1, 'alice', 'alice@example.com', 'admin', '1234 Street', '123-4567');
const bob = new User(2, 'bob', 'bob@example.com', 'user', '5678 Avenue', '234-5678');
const charlie = new User(3, 'charlie', 'charlie@example.com', 'user', '91011 Road', '345-6789');

userManager.addUser(alice);
userManager.addUser(bob);
userManager.addUser(charlie);

userManager.updateUserStatus(1, 'active');
userManager.updateUserStatus(2, 'inactive');

alice.setLastLogin(new Date());
bob.setLastLogin(new Date());
charlie.setLastLogin(new Date());

userManager.getActiveUsers().forEach(user => {
    console.log(user.getUserInfo());
});

userManager.getInactiveUsers().forEach(user => {
    console.log(user.getUserInfo());
});

console.log('Total users: ', userManager.getUserCount());

userManager.deleteUser(2);

console.log('Total users after deletion: ', userManager.getUserCount());
