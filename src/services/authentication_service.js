import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseConfig } from "../config/firebase_config";
import User from "../models/user";
import { addUserToDatabase, getUserFromDatabase } from "./database_service";

const firebaseInstance = initializeApp(firebaseConfig);
const auth = getAuth(firebaseInstance)

/**
 * function signs the user in & also performs CRUD operations for additional user details
 * @param {String} email account email
 * @param {String} password account password
 * @returns {User} user 
 */
export async function firebaseSignIn(email, password) {
    var res;
    await signInWithEmailAndPassword(auth, email, password).then(
        async (user) => {
            var result = new User(user.user.uid, user.user.email);
            result = await getUserFromDatabase(result);
            res = result;
        }
    ).catch(
        (error) => {
            console.log(error);
        }
    );

    return res;
}

/**
 * function creates an accound with email & password & also performs necessary database operations
 * @param {String} email email from registration form
 * @param {String} password password
 * @param {String} name name
 * @returns {User} user
 */
export async function firebaseRegister(email, password, name) {
    var res;
    await createUserWithEmailAndPassword(auth, email, password).then(
        async (user) => {
            var result = new User(user.user.uid, user.user.email);
            result.name = name;
            await addUserToDatabase(result);
            res = result;
        }
    ).catch(
        (error) => {
            console.log(error);
        }
    );

    return res;
}

/**
 * function signs the user out
 * @returns {boolean} true if success
 */
export async function firebaseSignOut() {
    var res = false;
    await signOut(auth).then((val) => {
        res = true;
    }).catch((err) => {
        res = false;
    });

    return res;
}