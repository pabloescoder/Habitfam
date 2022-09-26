/**
 * @module HabitGroupMember
 */

class HabitGroupMember{
    #uid;
    #email;
    #name;

    /**
     * returns participant object
     * @param {String} uid firebase uid
     * @param {Strign} email email of user
     * @param {String } name name of user
     */
    constructor(uid, email, name) {
        this.#uid = uid;
        this.#email = email;
        this.#name = name;
    }

    /**
     * return firebase uid of current object
     * @return {String} firebase uid
     */
    get uid() {
        return this.#uid;
    }

    /**
     * returns email of current object
     * @return {String} email
     */
    get email() {
        return this.#email;
    }

    /**
     * returns name of current object
     * @return {String} name of object
     */
    get name() {
        return this.#name;
    }
}

export default HabitGroupMember;