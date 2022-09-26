import User from "./user";

/**
 * @module HabitLog
 */
class HabitLog {
    #timestamp;
    #user;
    #habit_group_id;
    #log_id;
    
    /**
     * 
     * @param {String} habit_group_id habit group id
     * @param {Date} timestamp date of streak
     * @param {User} user user
     */
    constructor(habit_group_id,timestamp, user) {
        this.#habit_group_id = habit_group_id;
        this.#timestamp = timestamp;
        this.#user = user;
    }

    get logId() {
        return this.#log_id;
    }

    set logId(val) {
        this.#log_id = val;
    }

}

export default HabitLog;