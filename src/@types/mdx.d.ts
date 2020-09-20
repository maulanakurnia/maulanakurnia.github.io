declare module "*.mdx" {
  export interface MDXFrontMatter {
    title: string;
    date: string;
    tags?: string[];
    slug?: string;
    ogSlug?: string;
    excerpt?: string;
    description: string;
  }

  export interface MDXFile {
    frontMatter: MDXFrontMatter;
    content: string;
    path: string;
  }

  let MDXComponent: (props: { [key: string]: unknown }) => JSX.Element;
  export const frontMatter: MDXFrontMatter | MDXFrontMatter[];
  export default MDXComponent;
}
