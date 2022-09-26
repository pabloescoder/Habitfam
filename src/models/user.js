/**
 * model User
 * @module User
 */


/** User class contains the necessary information about current logged in user */
class User{
    #uid;
    #email;
    #myhabit_groups = [];
    /**
     * 
     * @param {String} uid [firebase uid]
     * @param {String} email [email for registered account]
     */

    constructor(uid, email) {
        this.#uid = uid;
        this.#email = email;
        /**@param {String} [name of user] */
        this.name = "";
        this.#myhabit_groups = []
    }

    /**
     * returns the firebase uid of user
     */
    get uid() {
        return this.#uid;
    }

    /**
     * return the email of account
     */
    get email() {
        return this.#email;
    }

    get myHabitGroups() {
        return this.#myhabit_groups;
    }

    get userMap() {
        return {
            "name": this.name,
            "email" : this.email,
            "habit_groups" : this.myHabitGroups
        }
    }

    /**
     * adds habit-group id to a user
    */
    set addHabitGroupString(val) {
        this.#myhabit_groups.push(val);
    }
}

export default User;