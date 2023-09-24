import CourseIcon from "@/app/components/Sidebar/icons/courses_icon.svg";
import {TopLevelCategory} from "@/interfaces/page.interface";
import ServicesIcon from "@/app/components/Sidebar/icons/services_icon.svg";
import BooksIcon from "@/app/components/Sidebar/icons/books_icon.svg";
import ProductsIcon from "@/app/components/Sidebar/icons/products_icon.svg";
import {FirstLevelMenuItem} from "@/interfaces/context.interfaces";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CourseIcon/>, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books},
    {route: 'products', name: 'Продукты', icon: <ProductsIcon/>, id: TopLevelCategory.Products},
];
