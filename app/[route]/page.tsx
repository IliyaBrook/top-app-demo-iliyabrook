import {ReactElement} from "react";

// export async function generateStaticParams() {
//     const menu = await getMnu(0);
//     return menu.flatMap(item => item.pages.map(page => ({ params: { alias: page.alias } })));
// }



export default async function Category({params}: {params: {name: string}}): Promise<ReactElement> {
    return (
        <div>
            <pre>
                {JSON.stringify(params.route)}
            </pre>
        </div>
    );
}
