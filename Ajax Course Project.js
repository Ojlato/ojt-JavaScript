function loaduser() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);
    xhr.onload = function () {
        if (this.status == 200) {
            var user = JSON.parse(this.responseText);
            for (let i in user) {
                var li=document.createElement("li");
                li.className='list-group-item user-item text-left';
                var img=document.createElement("img");
                img.className='img-circle img-user img-thumbnail';
                img.setAttribute("src",user[i].avatar_url);
                li.append(img);
                var h3=document.createElement("h3");
                var a=document.createElement("a");
                a.innerText=user[i].login;
                a.setAttribute("href",user[i].login)
                h3.append(a);
                img.after(h3);
                document.querySelector(".list-group").append(li);
                }
            }
        };xhr.send();
    };loaduser();