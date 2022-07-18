import React from "react";
import { Flex, Box, Button, Text } from "@chakra-ui/react";
import TasksManagment from "../components/TasksManagment";
import ModalComponent from "../components/ModalComponent";
import { useDisclosure } from "@chakra-ui/hooks";
import { useStoreState, useStoreActions } from "easy-peasy";
import DisplayTasks from "../components/DisplayTasks";
import DisplayTitle from "../components/DisplayTitle";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const tasks = useStoreState((state) => state.tasks);
  const buttonBackground = useStoreState((state) => state.buttonBackground);
  const setToken = useStoreActions((actions) => actions.setToken);
  const navigate = useNavigate();

  return (
    <div>
      <Flex
        h={75}
        borderBottom="1px"
        borderBottomColor="#ebebeb"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pl={5}
        pr={5}
      >
        <Text as="h1" fontWeight="700" fontSize="17px">
          Todo App
        </Text>
        <Text
          onClick={() => {
            setToken(null);
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          Esci
        </Text>
      </Flex>
      <Flex display="flex" flexDirection="row">
        <Box
          width="35%"
          h="100vh"
          borderRight="1px"
          borderRightColor="#ebebeb"
          display="flex"
          flexDirection="column"
          alignItems="center"
          pl={2}
          pr={2}
        >
          <TasksManagment />
        </Box>
        <Box
          width="65%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Text fontWeight="800" fontSize="20px" mt={7} color="#03015d">
            <DisplayTitle />
            <span
              style={{ fontWeight: "700", fontSize: "13px", color: "#d3d3d3" }}
            >
              {buttonBackground === "all-tasks" && `(${tasks?.length})`}
            </span>
          </Text>
          <Button
            mt={3}
            fontSize="13px"
            color="white"
            bg="#03015d"
            onClick={onOpen}
          >
            + Nuova Task
          </Button>
          <DisplayTasks />
        </Box>
      </Flex>
      <ModalComponent isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default Tasks;
