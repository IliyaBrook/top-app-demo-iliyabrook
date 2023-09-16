'use client';
import React, {ReactElement} from "react";
import {usePathname} from "next/navigation";
import {BuildFirstLevel} from "@/app/components/Sidebar/components/buildLevels/BuildFirstLevel";
import {SidebarProps} from "@/app/components/Sidebar/Sidebar.props";


export const Sidebar = (props: SidebarProps): ReactElement => {
    const {className} = props;

    const pathname = usePathname();

    return (
        <div className={className}>
            <nav role='navigation'>
                <BuildFirstLevel pathname={pathname}/>
            </nav>
        </div>
    );
};
