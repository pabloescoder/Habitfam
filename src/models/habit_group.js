/**
 * @module HabitGroup
 */

class HabitGroup{
    #habit_group_id;
    #founder;
    #habit_group_members = {};
    #start;
    #end;

    /**
     * creates habitgroup object
     * @param {String} habit_group_id unique id for the habit group
     * @param {String} founder user id of habit founder
     * @param {String} name habit title
     * @param {String} description habit description
     * @param {Date} start start date of habit
     * @param {Date} end end date of habit
     * @param {Map} habit_group_memebers habit group memeber map
     */
    constructor(habit_group_id, founder, name, description, start, end) {
        this.#founder = founder;
        this.#habit_group_id = habit_group_id;
        this.name = name;
        this.description = description;
        this.#start = start;
        this.#end = end;
        this.#habit_group_members = {};
    }

    /**
     * returns habit group id of current object
     */
    get habit_group_id() {
        return this.#habit_group_id;
    }

    /**
     * returns founder uid
     */
    get founder() {
        return this.#founder;
    }

    /**
     * return habit group memebers profile of current object
     */
    get habit_group_memebers() {
        return this.#habit_group_members;
    }

    set habit_group_memebers(val) {
        this.#habit_group_members = val;
    }


    get startDate() {
        return this.#start;
    }

    get endDate() {
        return this.#end;
    }

}

export default HabitGroup;