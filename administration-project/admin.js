/* Назва класу з малої літери */
/* Взагалі клас часто бере дані з класу User, це порушує інкапсуляцію */
export default class admin {
    constructor(users) {
        this.users = users;
    }
    
    activate(userId) {
        let user = this.users.find(u => u.id === userId);
        if (user) user.updateUserStatus('active');
    }
    
    
    
    
    /* Можна об'єднати з попереднім методом та зробити одну функцію для зміни статусу */
    deactivate(userId) {
        let user = this.users.find(u => u.id === userId);
        if (user) user.updateUserStatus('inactive');
    }
    
    
    deleteUser(userId) {
        this.users = this.users.filter(u => u.id !== userId);
    }
    
    get(userId) {
        return this.users.find(u => u.id === userId);
    }
    
    /* З назв не зрозуміло, що виконують функції getCount, getCount2, getCount3 */
    getCount() {
        return this.users.filter(user => user.getUserStatus() === 'Active').length;
    }
    
    getCount2() {
        return this.users.filter(user => user.getUserStatus() === 'Suspended').length;
    }
    
    getCount3() {
        return this.users.length;
    }
    
    /* Дублює функцію deactivate, слід видалити*/
    suspend(userId) {
        let user = this.users.find(u => u.id === userId);
        if(user) user.updateUserStatus('inactive');
    }
    }
    
    