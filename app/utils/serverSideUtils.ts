import {headers} from "next/headers";

export const getActivePath = () => {
    const headersList = headers();
    const activePath = headersList.get("x-invoke-path");
    if (activePath) {
        return activePath.split("/")[1];
    }
}
