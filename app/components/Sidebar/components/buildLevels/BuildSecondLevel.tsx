import {FirstLevelMenuItem, MenuItem} from "@/interfaces/menu.interface";
import {ReactElement, useLayoutEffect, useState} from "react";
import {getMnu} from "@/api/menu";
import styles from './BuildLevels.module.scss';
import classnames from "classnames";

export const BuildSecondLevel = ({pathname, menuData}: {pathname: string, menuData: FirstLevelMenuItem}): ReactElement => {

    const [secondLevelItems, setSecondLevelItems] = useState<MenuItem[]>([]);

    useLayoutEffect(() => {
        getMnu(menuData.id)
            .then(itemsRes => {
                if (itemsRes?.length > 0) {
                    setSecondLevelItems(itemsRes);
                }
            });
    }, [menuData.id]);


    return (
        <ul className={styles.secondBlock}>
            {secondLevelItems.map((m) => {
                if (m.pages.map(p => p.alias).includes(pathname.split('/')[2])) {
                    m.isOpened = true;
                }
                return (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>
                            {m._id.secondCategory}
                        </div>
                        <div
                            className={classnames(styles.secondLevelBlock, [
                                {[styles.secondLevelBlockOpen]: m.isOpened}
                            ])}
                        >

                        </div>
                    </div>
                );
            })}
        </ul>
    );
};