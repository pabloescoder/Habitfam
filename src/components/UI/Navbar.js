import { useContext } from "react";
import AuthContext from "../../store/authContext";
import { Button } from "@nextui-org/react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div className={styles.navbar}>
      <h2 className={styles.title}>Habitfam</h2>
      <div className={styles["button-group"]}>
        <Button
          shadow
          rounded
          color="error"
          css={{ fontSize: "1.1rem" }}
          auto
          onClick={authCtx.toggleModal}
        >
          {authCtx.isLoggedIn ? "Create New Habit Group" : "Sign Up / Login"}
        </Button>

        {authCtx.isLoggedIn && (
          <Button
            shadow
            rounded
            color="error"
            css={{ fontSize: "1.1rem" }}
            auto
            onClick={authCtx.onLogout}
          >
            Logout
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
