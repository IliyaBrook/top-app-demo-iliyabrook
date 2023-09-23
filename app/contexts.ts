import {createContext} from "react";
import {SideBarContextInterface} from "@/interfaces/context.interfaces";


export const SideBarContext = createContext<SideBarContextInterface | undefined >(undefined);
