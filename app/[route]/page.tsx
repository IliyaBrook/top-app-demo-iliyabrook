import {ReactElement} from "react";

// export async function generateStaticParams() {
//     const menu = await getMnu(0);
//     return menu.flatMap(item => item.pages.map(page => ({ params: { alias: page.alias } })));
// }


// {params}: {params: {name: string}}
export default async function Category(props): Promise<ReactElement> {
    console.log('params: ', props);
    return (
        <div>
            <pre>
                {/*{JSON.stringify(params.route)}*/}
            </pre>
        </div>
    );
}
