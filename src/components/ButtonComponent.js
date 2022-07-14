import React from "react";
import { Button, Icon } from "@chakra-ui/react";

const ButtonComponent = ({
  icon,
  id,
  text,
  setButtonBackground,
  buttonBackground,
}) => {
  return (
    <Button
      fontSize="12px"
      mt={4}
      pl={2}
      pr={2}
      w="100%"
      leftIcon={<Icon as={icon} w={5} h={5} p={0} />}
      bg={buttonBackground === id ? "#e2e8f0" : "white"}
      onClick={() => setButtonBackground(id)}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
