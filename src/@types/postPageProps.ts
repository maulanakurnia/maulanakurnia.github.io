import { MDXFrontMatter } from "*.mdx";

export interface PostPageProps {
  source: string;
  frontMatter: MDXFrontMatter;
  extraComponents: string[];
  readingTime: string;
  recentPosts: MDXFrontMatter[];
}
