import React from "react";
import { Flex, Heading, Text, Input, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const setName = useStoreActions((actions) => actions.setName);
  const setEmail = useStoreActions((actions) => actions.setEmail);
  const setPassword = useStoreActions((actions) => actions.setPassword);
  const name = useStoreState((state) => state.name);
  const email = useStoreState((state) => state.email);
  const setToken = useStoreActions((actions) => actions.setToken);
  const password = useStoreState((state) => state.password);
  const navigate = useNavigate();

  const signupHandler = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/register", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        setToken(res.data.accessToken);
        localStorage.setItem("token", res.data.accessToken);
        navigate("/tasks");
      })
      .catch(() => alert("Errore!"));
  };

  return (
    <div>
      <Flex direction="column" pt={100} pl={16} pr={16} bg="#03015d" pb={150}>
        <Heading color="#FFFFFF" mb={8}>
          Sign Up
        </Heading>
        <Text color="#FFFFFF" fontSize="13px">
          Registrati e inizia a scrivere le tue tasks quando vuoi e dove vuoi.
        </Text>
        <Text color="#FFFFFF" fontSize="13px" mt={2}>
          Hai già un account?{" "}
          <strong>
            <Link to="/login">Login</Link>
          </strong>
        </Text>
      </Flex>
      <Flex pl={16} pr={16} mt={10} direction="column">
        <form>
          <Input
            type="text"
            placeholder="Username"
            height={50}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            height={50}
            mt={2}
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
            onClick={signupHandler}
          >
            Sign Up
          </Button>
        </form>
      </Flex>
    </div>
  );
};

export default SignUp;
