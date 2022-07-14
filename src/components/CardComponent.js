import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";

const CardComponent = ({ task }) => {
  return (
    <Box pl={3} pr={5} mt={10}>
      <Flex
        w={235}
        h={235}
        boxShadow="0 2px 4px 1px hsl(0deg 0% 86% / 78%)"
        borderRadius="15px"
        p={7}
        justifyContent="space-between"
      >
        <Text>{task?.title}</Text>
        <FaTrashAlt size={18} />
      </Flex>
    </Box>
  );
};

export default CardComponent;
