import React from "react";
import { Flex, Heading, Text, Input, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const setEmail = useStoreActions((actions) => actions.setEmail);
  const setPassword = useStoreActions((actions) => actions.setPassword);
  const email = useStoreState((state) => state.email);
  const password = useStoreState((state) => state.password);
  const setIsLoggedIn = useStoreActions((actions) => actions.setIsLoggedIn);
  const [data, setData] = useState();
  const navigate = useNavigate();

  const loginHandler = (event) => {
    event.preventDefault();

    fetch("http://192.168.1.210:8080/users/_find", {
      method: "POST",
      body: JSON.stringify({
        selector: {
          email: email,
        },
      }),
      headers: {
        Authorization: "Basic " + btoa("innovaLab:Innova.2022"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setData(data.docs[0]);
      });

    if (data?.email === email && data?.password === password) {
      setIsLoggedIn({ status: true, email: email });
      navigate("/tasks");
    } else {
      console.log("Errore");
    }
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
