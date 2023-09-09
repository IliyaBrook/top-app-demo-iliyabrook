'use client';

import {ReactElement} from "react";
import {SidebarProps} from "@/app/components/Sidebar/Sidebar.props";

export const Sidebar = ({className, children}: SidebarProps): ReactElement => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};
