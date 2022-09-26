import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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
    await signInWithEmailAndPassword(auth, email, password).then(
        async (user) => {
            var result = new User(user.user.uid, user.user.email);
            result = await getUserFromDatabase(result);
            return result;
        }
    ).catch(
        (error) => {
            console.log(error);
        }
    );
}

/**
 * function creates an accound with email & password & also performs necessary database operations
 * @param {String} email email from registration form
 * @param {String} password password
 * @param {String} name name
 * @returns {User} user
 */
export async function firebaseRegister(email, password, name) {
    await createUserWithEmailAndPassword(auth, email, password).then(
        async (user) => {
            var result = new User(user.user.uid, user.user.email);
            result.name = name;
            await addUserToDatabase(result);
            return result;
        }
    ).catch(
        (error) => {
            console.log(error);
        }
    );
}