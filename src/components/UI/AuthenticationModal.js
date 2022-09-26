import { useContext, useState } from "react";
import AuthContext from "../../store/authContext";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { Link } from "react-router-dom";

const AuthModal = () => {
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthModeToggle = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={authCtx.showModal}
        onClose={authCtx.toggleModal}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            {"Welcome to "}
            <Text b size={18}>
              Habitfam!
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          {!isLogin && (
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Name"
            />
          )}
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
          />
          <Input
            clearable
            bordered
            fullWidth
            type="password"
            color="primary"
            size="lg"
            placeholder="Password"
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Link onClick={handleAuthModeToggle}>
              <Text size={14} color={"$blue600"}>
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </Text>
            </Link>
          </Row>
        </Modal.Body>
        <Modal.Footer css={{ paddingTop: 0 }}>
          <Button auto flat color="error" onClick={authCtx.toggleModal}>
            Close
          </Button>
          <Button auto onClick={authCtx.onLogin}>
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AuthModal;
