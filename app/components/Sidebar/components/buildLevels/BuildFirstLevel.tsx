import classNames from "classnames";
import Link from "next/link";
import {BuildSecondLevel} from "@/app/components/Sidebar/components/buildLevels/BuildSecondLevel";
import {firstLevelMenu} from "@/app/components/Sidebar/data";
import styles from './BuildLevels.module.scss';

export const BuildFirstLevel = ({pathname}: { pathname: string }) => {
    return (
        <ul className={styles.firstLevelList}>
            {firstLevelMenu.map(m => (
                <li
                    key={m.route}
                    className={classNames([
                        styles.SidebarTest,
                        {[styles.active]: pathname === `/${m.route}`},
                        {[styles.inactive]: pathname !== `/${m.route}`},
                    ])}
                >
                    <Link href={`/${m.route}`}>
                        <div className={classNames(styles.firstLevel, {
                            [styles.firstLevelActive]: `/${m.route}` === pathname
                        })}>
                            {m.icon}
                            <span>{m.name}</span>
                        </div>
                    </Link>
                    {`/${m.route}` === pathname && (
                        (
                            <div className={styles.secondLevelActive}>
                                <BuildSecondLevel menuData={m} pathname={pathname}/>
                            </div>
                        )
                    )}
                </li>
            ))}
        </ul>
    );
};
