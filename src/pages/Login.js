import React from "react";
import { Flex, Heading, Text, Input, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const setEmail = useStoreActions((actions) => actions.setEmail);
  const setPassword = useStoreActions((actions) => actions.setPassword);
  const email = useStoreState((state) => state.email);
  const password = useStoreState((state) => state.password);
  const setToken = useStoreActions((actions) => actions.setToken);
  const navigate = useNavigate();

  const loginHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        setToken(res.data.accessToken);
        localStorage.setItem("token", res.data.accessToken);
        navigate("/tasks");
      })
      .catch(() => alert("Username o password sbagliati."));
  };

  return (
    <div>
      <Flex direction="column" pt={100} pl={16} bg="#03015d" pb={150}>
        <Heading color="#FFFFFF" mb={8}>
          Login
        </Heading>
        <Text color="#FFFFFF" fontSize="13px">
          Effettua il login e inizia a creare le tue tasks.
        </Text>
        <Text color="#FFFFFF" fontSize="13px">
          Non hai un account?{" "}
          <strong>
            <Link to="/register">Registrati qui</Link>
          </strong>
        </Text>
      </Flex>
      <Flex pl={16} pr={20} mt={10} direction="column">
        <form>
          <Input
            type="email"
            placeholder="Email"
            height={50}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            mt={2}
            height={50}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            height={50}
            mt={10}
            color="#FFFFFF"
            bg="#03015d"
            width="100%"
            type="submit"
            onClick={loginHandler}
          >
            Login
          </Button>
        </form>
      </Flex>
    </div>
  );
};

export default Login;
