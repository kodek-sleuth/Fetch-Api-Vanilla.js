window.onload=function()
{
    var fetchText = document.querySelector("button[id='get_text']");
    fetchText.addEventListener('click', FetchAllText);

    var fetchusers = document.querySelector("button[id='get_json']");
    fetchusers.addEventListener('click', FetchAllUsers);

    var fetchdata = document.querySelector("button[id='get_ApiData']");
    fetchdata.addEventListener('click', FetchApiUsers);

    var fetchposts = document.querySelector("button[id='get_ApiDataPost']");
    fetchposts.addEventListener('click', FetchApiPosts);

    var addPost = document.querySelector("#addPost");
    addPost.addEventListener('submit', AddPost);

    function FetchAllText()
    {
        fetch('sample.txt')
        .then((response)=> response.text())
        .then((data)=> 
        {
            document.getElementById('text').innerHTML = data;
        })
    }


    function FetchAllUsers()
    {
        fetch('users.json')
        .then((response)=> response.json())
        .then((data)=> 
        {
            let output = '';
            for(var i in data)
            {
                output +=`
                <ul>
                    <li>ID: ${data[i].id}</li>
                    <li>Name: ${data[i].Name}</li>
                    <li>Country: ${data[i].Country}</li>
                </ul>
                `
            }

            document.getElementById('usersmin').innerHTML = output;
        })
    }


    function FetchApiUsers()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((data)=> 
        {
            let output = '';
            for(var i in data)
            {
                output +=`
                <ul>
                    <li>ID: ${data[i].id}</li>
                    <li>Name: ${data[i].name}</li>
                    <li>Country: ${data[i].email}</li>
                </ul>
                `
            }

            document.getElementById('usersApi').innerHTML = output;
        })
    }

    function FetchApiPosts()
    {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> response.json())
        .then((data)=> 
        {
            let output = '<h3>Posts</h3>';
            for(var i in data)
            {
                output +=`
                <h3>${data[i].title}</h3>
                <h6>${data[i].body}</h6>
                `
            }

            document.getElementById('postsApi').innerHTML = output;
        })
    }

    function AddPost(f)
    {
        f.preventDefault();

        let title = document.getElementById('title').value;
        let body = document.getElementById('body').value;

        fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
            body:JSON.stringify({title:title, body:body})

        })

        .then((response)=> response.json())
        .then((data)=> console.log())
    }
}
