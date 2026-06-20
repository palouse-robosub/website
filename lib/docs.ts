import {Octokit} from "@octokit/rest";
import docsSetup from "@/docs";
import {readdirSync} from "fs";
import path from "path";
import {notFound} from "next/dist/client/components/not-found";

export const indexDocs = async () => {
  const octokit = new Octokit({ auth: process.env.DOCS_PAT })

  const docsIndex = docsSetup

  for (const sub of docsIndex.subs) {
    for (const section of sub.sections) {
      if (section.type === "internal") {

        const contents = readdirSync(
          path.join(process.cwd(), section.path),
          { recursive: true, withFileTypes: true }
        )

        const files = contents.filter((i) => i.isFile())

        section.routes = files.map((file) => ({
          params: {
            slug: file.parentPath
              .split("docs-root/")[1]
              .split("/")
              .concat(file.name.replace(".mdx", ""))
          },
          name: file.name.replace(".mdx", "")
        }))

      } else if (section.type === "ros_ws") {

		  const { data } = await octokit.rest.repos.getContent({
          owner: section.owner as string,
          repo: section.repo as string,
          path: section.path,
        })

        if (!Array.isArray(data)) {
          section.routes = []
        } else {
          section.routes = await Promise.all(
            data.map(async (item) => {
              const { data } = await octokit.rest.repos.getContent({
                owner: section.owner as string,
                repo: section.repo as string,
                path: section.path + "/" + item.name,
              });

              let readme = undefined
              if (!Array.isArray(data)) return notFound()
              for (const item of data) {
                if (item.name.toLowerCase() == "readme.md") {
                  readme = item
                }
              }

              return {
                params: {
                  slug: [sub.name.toLowerCase(), section.name.toLowerCase(), item.name.toLowerCase()]
                },
                name: item.name,
                raw_url: readme ? readme.download_url : undefined,
              }
            })
          )
        }
      }
    }
  }

  return docsIndex;
}
