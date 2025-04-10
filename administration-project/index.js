import user from "./user.js";
const users = [
    new user(1, 'alice', 'alice@example.com', 'admin', '1234 Street', '123-4567'),
    new user(2, 'bob', 'bob@example.com', 'user', '5678 Avenue', '234-5678'),
    new user(3, 'charlie', 'charlie@example.com', 'user', '91011 Road', '345-6789')
];

import admin from "./admin.js";
const admin = new admin(users);

// Виклики для зміни статусу
admin.activateUser(1);
admin.deactivateUser(2);

admin.suspendUser(3);

// Оновлення інформації для користувача
admin.getUser(1).setLastLogin(new Date());
admin.getUser(2).setLastLogin(new Date());
admin.getUser(3).setLastLogin(new Date());
// admin.getUser(4).setLastLogin(new Date());
// admin.getUser(5).setLastLogin(new Date());

// Отримання загальної кількості активних користувачів
console.log("Active users count: " + admin.getActiveUsersCount());

// Отримання інформації про всіх користувачів
console.log(admin.getUser(1).getUserInfo());
console.log(admin.getUser(2).getUserInfo());
console.log(admin.getUser(3).getUserInfo());

// Видалення
admin.deleteUser(2);

// Кількість користувачів після видалення
console.log("Users count after deletion: " + admin.getUsersCount());
