'use client';
import React, {ReactElement} from "react";
import {usePathname} from "next/navigation";
import {BuildFirstLevel} from "@/app/components/Sidebar/components/buildLevels/BuildFirstLevel";

// side bar context
const SidebarContext = React.createContext({});

export const Sidebar = (): ReactElement => {

    const pathname = usePathname();

    return (
        <div>
            <SidebarContext.Provider value={pathname}>
                <nav role='navigation'>
                    <BuildFirstLevel pathname={pathname}/>
                </nav>
            </SidebarContext.Provider>
        </div>
    );
};
