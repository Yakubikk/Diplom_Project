export type PageProps<T> = {
  items: T[];
  pageInfo: PageInfo | undefined;
};

export interface PageInfo {
  name: string;
  title: string;
  description: string;
  short_description?: string;
  seo_title: string;
  seo_description: string;
  keywords: string;
  categories?: Category[];
}

export interface Solution {
  title: string;
  description: string;
  advantages: Array<{
    title: string;
  }>;
}

export interface ServiceItem {
  id: number;
  name: string;
  title: string;
  description: string;
  short_description: string;
  seo_title: string;
  seo_description: string;
  keywords: string;
  key_features: ServiceKeyFeature[];
  what_we_offer: ServiceWhatWeOffer[];
  technology_stack: ServiceTechnologyStack[];
}

export interface Category {
  id: number;
  name: string;
}

export interface StatsItem {
  value: string;
  description: string;
}

export interface CaseTechnology {
  category?: string;
  name: string;
}

export interface CaseItem {
  title: string;
  name: string;
  subtitle: string;
  description?: string;
  main_image: string;
  preview_image: string;
  seo_title: string;
  seo_description: string;
  keywords: string;
  html_content: string;
  client: string;
  duration: string;
  technologies: CaseTechnology[];
  categories: Category[];
  stats?: StatsItem[];
  extraDescription?: string;
  backgroundFrom: string;
  backgroundTo: string;
}

export interface ServiceKeyFeature {
  id: number;
  title: string;
  image: string;
}

export interface ServiceWhatWeOffer {
  id: number;
  title: string;
  description: string;
}

export interface ServiceTechnologyStack {
  id: number;
  title?: string;
  description: string;
  technologies: string[];
}

export interface ArticleItem {
  id: number;
  name: string;
  title: string;
  lang: string;
  seo_title: string;
  seo_description: string;
  keywords: string;
  preview_image: string;
  main_image: string;
  read_duration: string;
  date: string;
  html_content: string;
  categories: Category[];
}

export interface HomePageElements {
  solutionsBlock: PageProps<Solution>;
  servicesBlock: PageProps<ServiceItem>;
  casesBlock: PageProps<CaseItem>;
  blogBlock: PageProps<ArticleItem>;
}

export interface ContactUsPayload {
  fullname: string;
  email: string;
  phone?: string;
  message?: string;
}

export interface ContactUsResponse {
  message: boolean;
}
