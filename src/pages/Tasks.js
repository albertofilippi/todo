import React from "react";
import { Flex, Box, Button, Text } from "@chakra-ui/react";
import TasksManagment from "../components/TasksManagment";
import CardComponent from "../components/CardComponent";
import ModalComponent from "../components/ModalComponent";
import { useDisclosure } from "@chakra-ui/hooks";
import { getTasks } from "../utils/services";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";

const Tasks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const setData = useStoreActions((actions) => actions.setData);
  const data = useStoreState((state) => state.data);

  useEffect(() => {
    getTasks(setData);
  }, []);

  console.log(data);

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
        <Text>Account</Text>
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
            Tutte le Tasks{" "}
            <span
              style={{ fontWeight: "700", fontSize: "13px", color: "#d3d3d3" }}
            >
              {`(${data?.doc_count})`}
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
          <Box display="flex" alignItems="center" flexDirection="column">
            <CardComponent />
          </Box>
        </Box>
      </Flex>
      <ModalComponent isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default Tasks;
