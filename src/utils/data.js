import { RiFileListLine, RiSuitcaseLine } from "react-icons/ri";
import { ImClipboard } from "react-icons/im";
import { BiCalendar } from "react-icons/bi";

export const BUTTON_DATA = [
  {
    icon: RiFileListLine,
    id: "all-tasks",
    text: "Tutte le Tasks",
  },
  {
    icon: RiSuitcaseLine,
    id: "in-corso",
    text: "In Corso",
  },
  {
    icon: ImClipboard,
    id: "completate",
    text: "Completate",
  },
  {
    icon: BiCalendar,
    id: "oggi",
    text: "Oggi",
  },
  {
    icon: BiCalendar,
    id: "domani",
    text: "Domani",
  },
  {
    icon: BiCalendar,
    id: "mese",
    text: "Mese",
  },
];
