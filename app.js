const form = document.getElementById('form')
const input = document.getElementById('input')
let img = document.getElementById('user-img')
const names = document.getElementById('name')
const bio = document.getElementById('bio')
const follower = document.getElementById('follower')
const follow = document.getElementById('follow')
const locations = document.getElementById('loc')
const repos = document.getElementById('repos')
const create = document.getElementById('create')

form.addEventListener('click', (e) => {
    e.preventDefault()
    let value = input.value
    const api = `https://api.github.com/users/${value}`


    async function requestApi(url) {
        try {
            const req = await fetch(url)

            if (!req.ok) {


                throw new Error('Nimadir xato ketdi')
            }
            const data = await req.json()
            getDatas(data)
            console.log(data);

        } catch (err) {
            console.log(err.message)
        }

    }
    requestApi(api)
})



function getDatas(datas) {

    img.setAttribute('src', `${datas.avatar_url}`)
    names.innerHTML = datas.login

    bio.innerHTML = datas.bio
    follower.innerHTML = datas.followers
    follow.innerHTML = datas.following
    locations.innerHTML = datas.location
    repos.innerHTML = datas.public_repos
    create.innerHTML = datas.created_at
}