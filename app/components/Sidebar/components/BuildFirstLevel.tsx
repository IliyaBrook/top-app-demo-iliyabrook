import {FirstLevelMenuItem, MenuItem} from "@/interfaces/menu.interface";
import {ReactElement, useContext, useRef} from "react";
import styles from '../Sidebar.module.scss';
import classnames from "classnames";
import {motion} from 'framer-motion';
import {NavCollapseItem} from "@/app/components/Sidebar/components/NavCollapseItem";
import {SideBarContext} from "@/app/contexts";
import {BuildSecondLevel} from "@/app/components/Sidebar/components/BuildSecondLevel";
import {useRouter} from "next/navigation";

interface buildSecondLevelInterface {
    secondLevelItems: MenuItem[],
    pathname: string,
    menuData: FirstLevelMenuItem,
    isOpen?: boolean
}

export const BuildFirstLevel = ({secondLevelItems, pathname, menuData}: buildSecondLevelInterface): ReactElement => {
    const activeLevelElemRef = useRef(null);
    const context = useContext(SideBarContext);
    const isOpen = context?.routeData.some(item => item.isOpened);
    const router = useRouter();
    return (
        <motion.ul
            className={classnames([
                styles.secondWrapper,
                {[styles.borderActiveLevel]: !isOpen}
            ])}
        >
            {secondLevelItems.map((m, idx) => {
                return (
                    <motion.li
                        key={`second_level_key_${idx}`}
                    >
                        <motion.div>
                            <NavCollapseItem
                                key={`second_level_key_collapse_${idx}`}
                                title={m._id.secondCategory}
                                activeClassName={styles.secondLevelActive}
                                classNames={[styles.secondLevel]}
                                level={1}
                                item={m}
                            >
                                {m.pages.map(p => {
                                    return (
                                        <motion.div
                                            ref={activeLevelElemRef}
                                            key={`third_level_collapse_key_${p._id}`}
                                            className={classnames([
                                                styles.thirdLevelWrapper
                                            ])}
                                        >
                                            <NavCollapseItem
                                                title={p.category}
                                                activeClassName={styles.thirdLevelActive}
                                                classNames={[styles.thirdLevel]}
                                                level={2}
                                                item={p}
                                                onClick={() => {
                                                    router.push(`/${menuData.route}/${p.alias}`);
                                                }}
                                          />
                                        </motion.div>
                                    )
                                })}
                            </NavCollapseItem>
                        </motion.div>
                    </motion.li>
                );
            })}
        </motion.ul>
    );
};
