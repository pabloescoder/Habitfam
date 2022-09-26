import {doc, getDoc, getFirestore, setDoc} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase_config";
import User from "../models/user";

const firebaseInstance = initializeApp(firebaseConfig);
const db = getFirestore(firebaseInstance);

/**
 * function adds user information from database
 * @param {User} user user object
 * @returns {boolean}  
 */
export async function addUserToDatabase(user) {
    await setDoc(doc(db, "users", user.uid), user.userMap).then((val) => {
        return true;
    }).catch((err) => {
        return false;
    });
}


/**
 * function retrives user information from database
 * @param {User} user 
 * @returns {User} user
 */
export async function getUserFromDatabase(user) {
    await getDoc(doc(db, "users", user.uid)).then(
        (doc) => {
            console.log(doc.data.length);
            user.name = doc.data["name"];
            // TODO: adding habit group information
            return user;
        }
    ).catch((err) => {});
}