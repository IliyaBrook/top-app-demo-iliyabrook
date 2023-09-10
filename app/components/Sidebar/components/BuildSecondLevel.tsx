import {FirstLevelMenuItem, MenuItem} from "@/interfaces/menu.interface";
import {ReactElement, useEffect, useState} from "react";
import {getMnu} from "@/api/menu";

export const BuildSecondLevel = (menuData: FirstLevelMenuItem): ReactElement => {
    const [secondLevelItems, setSecondLevelItems] = useState<MenuItem[]>([]);

    useEffect(() => {
        getMnu(menuData.id)
            .then(itemsRes => {
                if (itemsRes?.length > 0) {
                    setSecondLevelItems(itemsRes);
                }
            });
    }, [menuData.id]);


    console.log('secondLevelItems: ', secondLevelItems);
    return (
        <div>
            {secondLevelItems.map(item => (
                <div key={item._id.secondCategory}>
                    {item._id.secondCategory}
                </div>
            ))}
        </div>
    );
};
