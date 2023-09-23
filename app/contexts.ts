import {createContext, useState} from "react";
import {RouteDataInterface, SideBarContextInterface} from "@/interfaces/context.interfaces";


export const SideBarContext = createContext<SideBarContextInterface | undefined>(undefined);
