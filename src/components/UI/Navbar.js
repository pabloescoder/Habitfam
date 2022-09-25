import { Button } from "@nextui-org/react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h2 className={styles.title}>Habitfam</h2>
      <Button shadow rounded color="error" css={{ fontSize: "1.1rem" }} auto>
        Sign Up / Login
      </Button>
    </div>
  );
};

export default Navbar;
