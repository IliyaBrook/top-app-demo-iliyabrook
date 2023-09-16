export interface IGetPageResponse {
    _id: string;
    tags: string[];
    firstCategory: number;
    secondCategory: string;
    alias: string;
    title: string;
    category: string;
    tagsTitle: string;
    metaTitle: string;
    metaDescription: string;
    advantages: unknown[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    hh: {
        count: number;
        juniorSalary: number;
        middleSalary: number;
        seniorSalary: number;
        updatedAt: string;
        _id: string;
    };
    qas: Array<{ question?: string; answer?: string }>;
    addresses: unknown[];
    categoryOn: string;
    blog: {
        h1: string;
        metaTitle: string;
        metaDescription: string;
        views: number;
        _id: string;
    };
    sravnikus: {
        metaTitle: string;
        metaDescription: string;
        seoText: string;
        qas: Array<{ question: string; answer: string }>;
        _id: string;
    };
    learningclub: {
        metaTitle: string;
        metaDescription: string;
        seoText: string;
        qas: Array<{ question: string; answer: string }>;
        _id: string;
    };
}
