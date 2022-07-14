import React from "react";
import { Text } from "@chakra-ui/react";
import { useStoreActions, useStoreState } from "easy-peasy";
import ButtonComponent from "./ButtonComponent";
import { BUTTON_DATA } from "../utils/data";

const TasksManagment = () => {
  const setButtonBackground = useStoreActions(
    (actions) => actions.setButtonBackground
  );
  const buttonBackground = useStoreState((state) => state.buttonBackground);

  return (
    <div>
      <Text fontWeight="700" fontSize="14px" mt={9} color="#d3d3d3">
        Gestione Tasks
      </Text>
      {BUTTON_DATA.map((data, index) => {
        return (
          <ButtonComponent
            key={index}
            icon={data.icon}
            text={data.text}
            id={data.id}
            setButtonBackground={setButtonBackground}
            buttonBackground={buttonBackground}
          />
        );
      })}
    </div>
  );
};

export default TasksManagment;
