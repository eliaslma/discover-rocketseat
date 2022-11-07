async function getUserInfo(){
    var input = document.querySelector("#user");
    var username = input.value;
    var infos = document.getElementsByClassName('infos-container');
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('.border-card').style.backgroundColor = "#" + randomColor
    try{
        const response = await fetch(`https://api.github.com/users/${username}`)
        if(response.status == '404'){
            console.log("usuário não encontrado")
        }
        else{
            const user = await response.json()
            document.getElementById('avatar').src = user.avatar_url
            document.getElementById('username').textContent = user.login
            document.getElementById('followers').textContent = user.followers
            document.getElementById('following').textContent = user.following
            document.getElementById('repos').textContent = user.public_repos
            
            if(user.company === null){
                infos[0].children[3].classList.add('deactive')
            }
            if(user.company){
                infos[0].children[3].classList.remove('deactive')
                document.getElementById('company').textContent = user.company
            }
            if(user.location === null){
                infos[0].children[4].classList.add('deactive')
            }
            if(user.location){
                infos[0].children[4].classList.remove('deactive')
                document.getElementById('loc').textContent = user.location
            }
            
        }
    }
    catch(error){
        console.log(error.message);
    }
}

