import {MDXRemote, MDXRemoteOptions} from "next-mdx-remote-client/rsc";
import {ScrollArea} from "@/components/ui/scroll-area";
import {notFound} from "next/dist/client/components/not-found";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeShiki from "@shikijs/rehype";
import NoReadme from "@/components/no-readme";
import {indexDocs} from "@/lib/docs";

export async function generateStaticParams() {
  const docsIndex = await indexDocs()
  return docsIndex.subs.flatMap((sub) => {
    return sub.sections.flatMap((section) => {
      return section.routes?.flatMap((route) => (
        route.params
      ))
    })
  })
}


export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params

  const docsIndex = await indexDocs()

  const options: MDXRemoteOptions = {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeKatex, [rehypeShiki, {theme: "github-dark"}]]
    },
  }

  let activeSub = undefined
  for (const sub of docsIndex.subs) {
    if (sub.name.toLowerCase() == slug[0]) {
      activeSub = sub
    }
  }
  let activeSection = undefined
  if (!activeSub) return notFound()
  for (const section of activeSub.sections) {
    if (section.name.toLowerCase() == slug[1]) {
      activeSection = section
    }
  }
  if (!activeSection) return notFound()
  switch (activeSection.type) {
    case "internal":
      const { default: Post } = await import(`@/docs-root/${slug.join("/")}.mdx`)
      return (
        <ScrollArea className="prose prose-neutral h-full max-w-none overflow-y-auto p-8">
          <Post />
        </ScrollArea>
      )
    case "ros_ws":
      let page = undefined;
      if (!activeSection.routes) return
      for (const item of activeSection.routes) {
        if (item.name.toLowerCase() == slug[2]) {
          page = item
        }
      }
      if (page && page.raw_url) {
        const res = await fetch(page.raw_url)
        const mdx = await res.text()
        console.log(`Readme found for ${page.name}`)
        console.log(page)
        return (
          <ScrollArea className="prose prose-neutral h-full max-w-none overflow-y-auto p-8">
            <MDXRemote source={mdx} options={options} />
          </ScrollArea>
        )
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        page && console.log(`No readme for ${page.name}`)
        console.log(page)
        return <NoReadme name={slug.pop()||"ERROR"} />
      }
  }
}
