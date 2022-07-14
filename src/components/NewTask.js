import React from "react";
import {
  Input,
  Textarea,
  Select,
  FormLabel,
  Button,
  Box,
} from "@chakra-ui/react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import * as rdrLocales from "react-date-range/dist/locale";
import { format } from "date-fns";
import { useStoreActions, useStoreState } from "easy-peasy";
import { postTask } from "../utils/services";

const NewTask = ({ onClose }) => {
  const setTitle = useStoreActions((actions) => actions.setTitle);
  const setDescription = useStoreActions((actions) => actions.setDescription);
  const setDate = useStoreActions((actions) => actions.setDate);
  const setPriority = useStoreActions((actions) => actions.setPriority);
  const task = useStoreState((state) => state.task);

  return (
    <form>
      <Box textAlign="center">
        <FormLabel fontSize="13px">Titolo</FormLabel>
        <Input
          placeholder="Cosa bisogna fare?"
          h={9}
          fontSize="14px"
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormLabel fontSize="13px" mt={5}>
          Descrizione
        </FormLabel>
        <Textarea
          placeholder="Descrizione di questa task"
          h={9}
          fontSize="14px"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Calendar
          date={new Date()}
          locale={rdrLocales.it}
          onChange={(e) => {
            setDate(format(e, "yyyy-MM-dd"));
          }}
        />
        <FormLabel fontSize="13px" mt={5}>
          Priorità
        </FormLabel>
        <Select
          fontSize="14px"
          h={9}
          onChange={(e) => setPriority(e.target.value)}
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
            postTask(
              task,
              onClose,
              setTitle,
              setDescription,
              setDate,
              setPriority
            );
          }}
        >
          Aggiungi Task
        </Button>
      </Box>
    </form>
  );
};

export default NewTask;
