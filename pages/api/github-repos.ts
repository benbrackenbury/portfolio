import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({message: "Method not allowed"})
  }

    const token = process.env.GITHUB_TOKEN
    const URL = `https://api.github.com/users/benbrackenbury/repos`
    let repositories: any = []
    const response = await fetch(URL, {
        headers: {
            "Authorization": `token ${token}`
        }
    })
    const githubRepos = await response.json()
    await Promise.all(
        githubRepos.map(async (repo: any) => {
            if (repo.name === "benbrackenbury") {
                return
            }
            const langsRes = await fetch(repo.languages_url, {
                headers: {
                    "Authorization": `token ${token}`
                }
            })
            const langs = await langsRes.json()
            let repoWithLangs = {...repo, languages: langs}
            repositories.push(repoWithLangs)
        })
    )

    return res.status(200).json({repos: [...repositories]})
}
