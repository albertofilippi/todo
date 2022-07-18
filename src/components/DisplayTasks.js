import React from "react";
import CardComponent from "../components/CardComponent";
import { Box } from "@chakra-ui/react";
import { useStoreState } from "easy-peasy";
import { isToday, isTomorrow, isThisMonth } from "date-fns";

const DisplayTasks = () => {
  const tasks = useStoreState((state) => state.tasks);
  const buttonBackground = useStoreState((state) => state.buttonBackground);

  return (
    <Box display="flex" alignItems="center" flexDirection="column" mt={5}>
      {buttonBackground === "in-corso"
        ? tasks
            ?.filter((task) => task.status === "in-corso")
            .map((task, index) => {
              return <CardComponent task={task} key={index} />;
            })
        : buttonBackground === "completate"
        ? tasks
            ?.filter((task) => task.status === "completata")
            .map((task, index) => {
              return <CardComponent task={task} key={index} />;
            })
        : buttonBackground === "oggi"
        ? tasks
            ?.filter((task) => isToday(new Date(task?.date)))
            .map((task, index) => {
              return <CardComponent task={task} key={index} />;
            })
        : buttonBackground === "domani"
        ? tasks
            ?.filter((task) => isTomorrow(new Date(task?.date)))
            .map((task, index) => {
              return <CardComponent task={task} key={index} />;
            })
        : buttonBackground === "mese"
        ? tasks
            ?.filter((task) => isThisMonth(new Date(task?.date)))
            .map((task, index) => {
              return <CardComponent task={task} key={index} />;
            })
        : tasks?.map((task, index) => {
            return <CardComponent task={task} key={index} />;
          })}
    </Box>
  );
};

export default DisplayTasks;
