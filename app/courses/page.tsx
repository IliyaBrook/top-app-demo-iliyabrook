// app/courses/page.tsx

import {firstLevelMenu} from "@/app/components/Sidebar/data";
import {getMenu} from "@/api/menu";
import {ReactElement} from "react";
import {getActivePath} from "@/app/utils/serverSideUtils";

export default function CoursesPage(): ReactElement {

    return (
        <div>
            <h1>Courses</h1>
        </div>
    )
}
