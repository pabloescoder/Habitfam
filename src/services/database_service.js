import {doc, getDoc, getFirestore, setDoc, addDoc, collection, getDocs, where, query} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase_config";
import User from "../models/user";
import HabitGroup from "../models/habit_group";
import HabitGroupMember from "../models/participant";
import HabitLog from "../models/habit_log";

const firebaseInstance = initializeApp(firebaseConfig);
const db = getFirestore(firebaseInstance);

/**
 * function adds user information from database
 * @param {User} user user object
 * @returns {boolean}  
 */
export async function addUserToDatabase(user) {
    var res = false;
    await addDoc(doc(db, "users", user.uid), user.userMap).then((val) => {
        res = true;
    }).catch((err) => {
        return false;
    });

    return res;
}


/**
 * function retrives user information from database
 * @param {User} user 
 * @returns {User} user
 */
export async function getUserFromDatabase(user) {
    var res;
    await getDoc(doc(db, "users", user.uid)).then(
        (doc) => {
            console.log(doc.data.length);
            user.name = doc.data["name"];
            // TODO: adding habit group information
            res = user;
        }
    ).catch((err) => {});

    return res;
}

/**
 * returns member information and stats
 * @param {String} uid firebase uid
 * @return {HabitGroupMember} member
 */
 export async function getMemberProfile(uid) {
    var profile;
    await getDoc(doc(db, "users", uid)).then(
        (doc) => {
            profile = new User(doc.id, doc.data()["email"]);
            profile.name = doc.data()["name"];
        }
    ).catch(
        (err) => {
            profile = err.code;
        }
    )

    return profile;
}

/**
 * returns the habit_group ids of enrolled habit groups
 * @param {User} user user for which
 * @return {Array} habit_group_list
 */
export async function getMyHabitGroups(user) {
    var myHabitGroups = [];
    var qry = query(collection(db, "habit_group"),where("members", "array-contains", user.uid));
    var q = await getDocs(qry).then(
        (qs) => {
            qs.docs.forEach(
                (val, index) => {
                    var curr = new HabitGroup(val.id, val.data()["founder"], val.data()["title"], val.data()["desc"], val.data()["start"], val.data()["end"]);
                    var memeber_map = {};
                    val.data()["members"].forEach(
                        (val, index) => {
                            memeber_map[val] = new HabitGroupMember(val, "", "");
                        }
                    );

                    curr.habit_group_memebers = memeber_map;
                    myHabitGroups.push(
                        curr
                    );
                }
            )
        }
    ).catch(
        (err) => {
            console.log(err.code);
        }
    );

    return myHabitGroups;

}

/**
 * returns detailed profile of habit group members
 * @param {HabitGroup} hbg 
 */
export function getHabitGroupMembers(hbg) {
    var new_habit_group_members = {};

    Object.keys(hbg.habit_group_memebers).forEach(
        async (val, index) => {
            var profile_of_val = await getMemberProfile(val);
            new_habit_group_members[val] = profile_of_val;
        }
    )

    hbg.habit_group_memebers = new_habit_group_members;
    return hbg;
}

/**
 * creates a new habit group
 * @param {User} user founder user
 * @param {String} habitTitle 
 * @param {String} habitDescription 
 * @param {Date} start 
 * @param {Date} end 
 * @return {HabitGroup} habitgroup
 */

export async function createHabitGroup(user, habitTitle, habitDescription, start, end) {
    var res;
    await addDoc(collection(db, "habit_group"), {
        "founder" : user.uid,
        "title" : habitTitle,
        "desc" : habitDescription,
        "start" : start,
        "end" : end,
        "members" : [user.uid] 
    }).then(
        (doc) => {
            console.log(doc);
            console.log(doc.id);

            res = new HabitGroup(doc.id, user.uid, habitTitle, habitDescription, start, end);
        }
    ).catch(
        (err) => {
            console.log(err);
        }
    );

    return res;
}

/**
 * function logs your daily progress to database
 * @param {User} user user object
 * @param {HabitGroup} habit habit group
 * @return {HabitLog} habit log
 */
export async function createHabitLog(user, habit) {
    var res;
    await addDoc(collection(db, "habit_log"), {
        'habit_group_id' : habit.habit_group_id,
        'user' : user.uid,
        'timestamp' : Date.now()
    }).then(
        (val) => {
            res = new HabitLog(habit.habit_group_id, Date.now(), user);
            res.logId = val.id;
        }
    ).catch(
        (err) => {
            console.log(err);
        }
    )

    return res;
}