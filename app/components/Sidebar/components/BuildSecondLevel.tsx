import React, { ReactElement } from 'react';
import styles from '../Sidebar.module.scss';
import classnames from 'classnames';
import {usePathname, useRouter} from "next/navigation";

export const BuildSecondLevel = ({
                                     alias,
                                     route,
                                     category,
                                     isOpened = false,
                                     title,
                                     pathname,
                                 }: {
    alias: string;
    route: string;
    category: string;
    isOpened?: boolean;
    pathname: string;
    title: string;
}): ReactElement => {


    return (
        <div

            // className={classnames(styles.thirdLevel, {
            //     [styles.thirdLevelActive]: `/${route}/${alias}` === pathname,
            // })}
            // aria-current={`/${route}/${alias}` === pathname ? 'page' : false}
        >
            {/*{isOpened && category}*/}
        </div>
    );
};
