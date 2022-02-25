const form = document.getElementById('form')
const input = document.getElementById('input')
let img = document.getElementById('user-img')
const login = document.getElementById('login')
const names = document.getElementById('name')
const bio = document.getElementById('bio')
const follower = document.getElementById('follower')
const follow = document.getElementById('follow')
const locations = document.getElementById('loc')
const repos = document.getElementById('repos')
const create = document.getElementById('create')
const main = document.querySelector('.main')
const loader = document.querySelector('#loader')
const go = document.getElementById('go')
const night = document.getElementById('night_mode')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let value = input.value
    const api = `https://api.github.com/users/${value}`


    async function requestApi(url) {
        loader.classList.remove('hidden')
        main.classList.add('hidden')
        try {
            const req = await fetch(url)

            if (!req.ok) {

                if (!(req.status == 200)) {
                    alert(`Check usename`)
                    loader.classList.add('hidden')
                    main.classList.remove('hidden')
                }
                throw new Error('Nimadir xato ketdi')
            }
            const data = await req.json()
            getDatas(data)
            console.log(data);
            go.setAttribute('href', `${data.html_url}`)

        } catch (err) {
            console.log(err.message)
            document.body.innerHTML = `<h1> Failed to connect </h1>`
            loader.classList.add('hidden')
        }

    }
    requestApi(api)
})



function getDatas(datas) {
    loader.classList.add('hidden')
    main.classList.remove('hidden')


    img.setAttribute('src', `${datas.avatar_url}`)
    login.innerHTML = datas.login
    names.innerHTML = datas.name

    bio.innerHTML = datas.bio
    follower.innerHTML = datas.followers
    follow.innerHTML = datas.following
    locations.innerHTML = datas.location
    repos.innerHTML = datas.public_repos
    create.innerHTML = datas.created_at

}


night.addEventListener('click', () => {
    document.body.classList.toggle('active')
    document.querySelector('.site-header').classList.toggle('active')
})