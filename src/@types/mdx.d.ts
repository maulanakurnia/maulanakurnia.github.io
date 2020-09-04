declare module "*.mdx" {
  export interface MDXFrontMatter {
    title?: string;
    date?: string;
    hidden?: boolean;
    excerpt?: string;
    tags?: string[];
    slug?: string;
    ogSlug?: string;
    description?: string;
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
