import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const options: MDXRemoteProps['options'] = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    ],
  },
};

/** Server-rendered MDX. Styling comes from `.prose-content` in globals.css. */
export function Mdx({ source }: { source: string }) {
  return (
    <div className="prose-content">
      <MDXRemote source={source} options={options} />
    </div>
  );
}
