import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { FaTrashAlt, FaFlag } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { useStoreActions } from "easy-peasy";

const CardComponent = ({ task }) => {
  const [year, month, day] = task?.date.split("-");
  const date = [day, month, year].join("/");
  const updateTask = useStoreActions((actions) => actions.updateTask);
  const removeTask = useStoreActions((actions) => actions.removeTask);

  return (
    <Box
      w={235}
      boxShadow="0 2px 4px 1px hsl(0deg 0% 86% / 78%)"
      borderRadius="15px"
      p={7}
      mt={5}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text as="h3" fontWeight="800" fontSize="18px">
          {task?.title}
        </Text>
        <FaTrashAlt
          size={18}
          cursor="pointer"
          onClick={() => removeTask(task.id)}
        />
      </Flex>
      <Box>
        <Text mt={3} fontSize="15px">
          {task?.description}
        </Text>
      </Box>
      <Flex justifyContent="space-between" mt={7} alignItems="center">
        {date}
        <FaFlag
          color={
            task?.priority === "bassa"
              ? "#37782c"
              : task?.priority === "media"
              ? "#f88808"
              : "#c91010"
          }
          size={16}
        />
        <BsCheckCircleFill
          size={19}
          color={task?.status === "in-corso" ? "#d3d3d3" : "#808080"}
          cursor="pointer"
          onClick={() => updateTask(task.id)}
        />
      </Flex>
    </Box>
  );
};

export default CardComponent;
