import User from "./user";

class HabitLog {
    #timestamp;
    #user;
    #habit_group_id;
    #log_id;
    
    /**
     * 
     * @param {String} habit_group_id habit group id
     * @param {Date} timestamp date of streak
     * @param {} user user
     */
    constructor(habit_group_id,timestamp, user) {
        this.#habit_group_id = habit_group_id;
        this.#timestamp = timestamp;
        this.#user = user;
    }

}

export default HabitLog;