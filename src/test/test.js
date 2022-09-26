
import { firebaseRegister } from "../services/authentication_service";

describe("register test", () => {
    test("register function test", 
    async () => {
        var res = await firebaseRegister("test04@test.com", "test12345", "test three");
        console.log(res);
    }
    );
})