require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData={
    "login": "Abdul-Jamal-Wahid",
    "id": 91882266,
    "node_id": "U_kgDOBXoDGg",
    "avatar_url": "https://avatars.githubusercontent.com/u/91882266?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Abdul-Jamal-Wahid",
    "html_url": "https://github.com/Abdul-Jamal-Wahid",
    "followers_url": "https://api.github.com/users/Abdul-Jamal-Wahid/followers",
    "following_url": "https://api.github.com/users/Abdul-Jamal-Wahid/following{/other_user}",
    "gists_url": "https://api.github.com/users/Abdul-Jamal-Wahid/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Abdul-Jamal-Wahid/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Abdul-Jamal-Wahid/subscriptions",
    "organizations_url": "https://api.github.com/users/Abdul-Jamal-Wahid/orgs",
    "repos_url": "https://api.github.com/users/Abdul-Jamal-Wahid/repos",
    "events_url": "https://api.github.com/users/Abdul-Jamal-Wahid/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Abdul-Jamal-Wahid/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Abdul Jamal Wahid",
    "company": null,
    "blog": "",
    "location": "Howrah,West Bengal",
    "email": null,
    "hireable": null,
    "bio": "Final-year Computer Science and Engineering student, I am actively looking for opportunities to apply my technical abilities and expertise to real-world project",
    "twitter_username": "Abdul03741922",
    "public_repos": 29,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2021-10-04T10:22:04Z",
    "updated_at": "2024-03-08T10:52:43Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('ajwahid@7420')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please Login at Chai or code </h1>')

})
app.get('/githubData',(req,res)=>{
    res.json(githubData)
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai or Code </h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})