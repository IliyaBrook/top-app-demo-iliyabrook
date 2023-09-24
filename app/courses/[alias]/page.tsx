import {ReactElement} from "react";

export async function generateStaticParams(params) {
    console.log('pages generateStaticParams: ', params);
}

export default async function Pages(props): Promise<any> {
    console.log('pages props: ', props);
}
