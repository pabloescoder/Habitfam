/**
 * @module HabitGroup
 */

class HabitGroup{
    #habit_group_id;
    #founder;
    #habit_logs = {};
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
     */
    constructor(habit_group_id, founder, name, description, start, end) {
        this.#founder = founder;
        this.#habit_group_id = habit_group_id;
        this.name = name;
        this.description = description;
        this.#start = start;
        this.#end = end;
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
     * return habit group logs of current object
     */
    get habit_logs() {
        return this.#habit_logs;
    }

    get startDate() {
        return this.#start;
    }

    get endDate() {
        return this.#end;
    }

    /**
     * Adds habit log of each user
     */
    set habit_logs(arg) {
        this.#habit_logs[arg[0]] = arg[1];
    }
}

export default HabitGroup;