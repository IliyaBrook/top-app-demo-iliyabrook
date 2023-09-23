interface Icon {
    key: null;
    ref: null;
    props: NonNullable<unknown>;
    _owner: null;
    _store: NonNullable<unknown>;
}

interface MenuData {
    route: string;
    name: string;
    icon: Icon;
    id: number;
}

export interface routeServerSideProps {
    menuData: MenuData;
    pathname: string;
}
