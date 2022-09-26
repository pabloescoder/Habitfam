/**
 * model User
 * @module User
 */


/** User class contains the necessary information about current logged in user */
class User{
    #uid;
    #email;
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


    get userMap() {
        return {
            "name": this.name,
            "email" : this.email,
        }
    }
}

export default User;