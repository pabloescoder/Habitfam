import {doc, getDoc, getFirestore, setDoc, addDoc, collection} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase_config";
import User from "../models/user";
import HabitGroup from "../models/habit_group";
import HabitGroupMember from "../models/participant";

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
 export async function getMemberInformation(uid) {
    // TODOD: implement
}

/**
 * returns the habit_group ids of enrolled habit groups
 * @param {User} user user for which
 * @return {Array} habit_group_list
 */

export async function getMyHabitGroups(user) {
    // TODO: Implement
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
        "end" : end
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

