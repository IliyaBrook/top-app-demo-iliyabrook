

import {notFound, usePathname} from "next/navigation";


// export async function getCoursePages() {
//     const pages = await getPage("data-science");
//     console.log('pages res:', pages);
// }

export default async function PageProduct(props) {
    console.log('PageProduct props:', props)
    // const pathname = usePathname();
    // const courseName = params.alias;

    // const [courseData, setCourseData] = useState<IGetPageResponse['blog']>();
    // console.log('courseData:', courseData)
    // useEffect(() => {
    //     if (courseName) {
    //         getPage(courseName)
    //             .then((res) => {
    //                 if (res) {
    //                     if (res) {
    //                         setCourseData(res.blog);
    //                     }
    //                 }
    //             });
    //     }
    // }, [courseName]);


    // if (!pathname) {
    //     notFound();
    // }

    // return (
    //     <div className={styles.wrapper} key={courseData?._id}>
    //         <div className={styles.title}>
    //             {courseData?.h1}
    //         </div>
    //         <div className={styles.text}>
    //             {courseData?.metaDescription}
    //         </div>
    //     </div>
    // );
}
