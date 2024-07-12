
document.getElementById('btn-search').addEventListener('click', () => {
    const inputValue = document.getElementById('input-search').value;
    getUserProfile(inputValue)
})
//

async function user(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}`)
    return await response.json();
}

function getUserProfile(userName) {
    user(userName).then((userData) => { //quando tiver os dados prontos entao.
        //console.log(userData);
        let userInfo = 
        `
        <img src="${userData.avatar_url}" alt="Foto do perfil do usuário"/>
        <div class="data">
            <h1>${userData.name ?? 'Não possui nome cadastrado'}</h1>
            <p>${userData.bio ?? 'Não possui bio cadastrada'}</p>
        </div>
        `
        document.querySelector('.profile-data').innerHTML = userInfo
    })
}

//console.log(getUserProfile());

//getUserProfile('cadudias');

//console.log(await user('americanj'));
