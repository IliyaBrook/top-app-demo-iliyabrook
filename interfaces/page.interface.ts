export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products
}

export interface TopPageAdvantage {
	_id: string;
	title: string;
	description: string;
}

export interface HhData {
	_id: string;
	count: number;
	juniorSalary: number;
	middleSalary: number;
	seniorSalary: number;
	updatedAt: Date;
}

type Alias =
	'financial-analytics' |
	'big-data' |
	'data-science' |
	'machine-learning' |
	'excel' |
	'business-analytics' |
	'analytics-for-executives' |
	'power-bi' |
	'data-analytics' |
	'system-analytics' |
	'finansovaya-gramotnost' |
	'entrepreneurs' |
	'oratorskoe-masterstvo' |
	'leader' |
	'upravlenie-personalom' |
	'mba' |
	'buhgalter' |
	'investing' |
	'trading' |
	'1c-buhgalteriya' |
	'graphic-design' |
	'dizayn-interera' |
	'web-design' |
	'photoshop' |
	'ArchiCAD' |
	'landscape-design' |
	'sketching' |
	'Illustration' |
	'3d' |
	'figma' |
	'video' |
	'ux-ui' |
	'motion-design' |
	'3ds-max' |
	'3d-animation' |
	'mobile-app-design' |
	'typography' |
	'adobe-after-effects' |
	'autocad' |
	'calligraphy' |
	'cinema-4D' |
	'gamedesign' |
	'chess' |
	'unity' |
	'unreal-engine' |
	'stylist' |
	'seo' |
	'smm' |
	'targeting' |
	'internet-marketing' |
	'direct' |
	'python' |
	'1C-programming' |
	'react-js' |
	'qa' |
	'webdev' |
	'php' |
	'sql' |
	'js' |
	'nodejs' |
	'programming' |
	'java' |
	'android' |
	'devops' |
	'sysadmin' |
	'frontend' |
	'docker' |
	'ansible' |
	'nextjs' |
	'typescript' |
	'photography' |
	'psychology' |
	'journalism' |
	'copywriting' |
	'product-manager' |
	'project' |
	'sales-manager' |
	'marketplace-manager' |
	'english';

export interface TopPageModel {
	tags: string[];
	_id: string;
	secondCategory: string;
	alias: Alias;
	title: string;
	category: string;
	seoText?: string;
	tagsTitle: string;
	metaTitle: string;
	metaDescription: string;
	firstCategory: TopLevelCategory;
	advantages?: TopPageAdvantage[];
	createdAt: Date;
	updatedAt: Date;
	hh?: HhData;
}


