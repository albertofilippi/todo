import React, { useState } from "react";
import {
  Input,
  Textarea,
  Select,
  FormLabel,
  Button,
  Box,
} from "@chakra-ui/react";
import { Calendar } from "react-calendar";
import { format } from "date-fns";
import { useStoreActions } from "easy-peasy";
import { v4 as uuidv4 } from "uuid";

const NewTask = ({ onClose }) => {
  const [task, setTask] = useState({
    id: uuidv4(),
    creationDate: format(new Date(), "yyyy-MM-dd"),
    title: "",
    description: "",
    priority: "bassa",
    date: format(new Date(), "yyyy-MM-dd"),
    status: "in-corso",
  });

  const addTask = useStoreActions((actions) => actions.addTask);

  return (
    <form>
      <Box textAlign="center">
        <FormLabel fontSize="13px">Titolo</FormLabel>
        <Input
          placeholder="Cosa bisogna fare?"
          h={9}
          fontSize="14px"
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <FormLabel fontSize="13px" mt={5}>
          Descrizione
        </FormLabel>
        <Textarea
          placeholder="Descrizione di questa task"
          h={9}
          fontSize="14px"
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
        <Calendar
          onChange={(e) => {
            setTask({ ...task, date: format(e, "yyyy-MM-dd") });
          }}
        />
        <FormLabel fontSize="13px" mt={5}>
          Priorità
        </FormLabel>
        <Select
          fontSize="14px"
          h={9}
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
        >
          <option value="bassa">Bassa</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </Select>
        <Button
          mt={10}
          mb={5}
          fontSize="14px"
          w="100%"
          type="submit"
          color="#FFFFFF"
          bgColor="#03015d"
          onClick={(e) => {
            e.preventDefault();
            addTask(task);
            onClose(true);
          }}
        >
          Aggiungi Task
        </Button>
      </Box>
    </form>
  );
};

export default NewTask;
