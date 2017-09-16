//Javascript for dynamic page arrangement

function renderList(posts, postcount){

    var ListDiv = document.getElementById("post-preview-list");
    //DOM structure
    posts.forEach(function(post){

        var postpreviewDiv = document.createElement("div");
        var hrefDiv = document.createElement("a");
        var posttitleDiv = document.createElement("h2");
        var postsubtitleDiv = document.createElement("h3");
        var postdateDiv = document.createElement("p");

        postpreviewDiv.setAttribute("class", "post-preview");
        hrefDiv.href = post.href;
        posttitleDiv.setAttribute("class", "post-title");
        posttitleDiv.innerHTML = post.title;
        postsubtitleDiv.setAttribute("class", "post-subtitle");
        postsubtitleDiv.innerHTML = post.subtitle;
        postdateDiv.setAttribute("class", "post-meta");
        postdateDiv.innerHTML = post.date;

        hrefDiv.appendChild(posttitleDiv);
        hrefDiv.appendChild(postsubtitleDiv);
        
        postpreviewDiv.appendChild(hrefDiv);
        postpreviewDiv.appendChild(postdateDiv);

        ListDiv.appendChild(postpreviewDiv);
    });
}


function getPosts(){
    return [
        {
            "href": "#",
            "title": "This is a fake post :0)",
            "subtitle": ":0)",
            "date": "Nebula", 
        },
        {
            "href": "../posts/dell_review",
            "title": "Two days into the red GTR and I'm lovin' it.",
            "subtitle": "My first impressions on Dell's budget gaming laptop - Inspiron 15 (7567)",
            "date": "Posted on April 12,2017", 
        },
        {
            "href": "../posts/first_post",
            "title": "First Post",
            "subtitle": "It all begins here.",
            "date": "Posted on April 2, 2017",
        }
    ];
}

function totalposts(posts){

    return posts.length;

}

function totalpages(posts){

    var _totalposts = totalposts(posts);

    if (_totalposts % 6 == 0)
    {
        return _totalposts/6;
    }
    else if (_totalposts % 6 < 0)
    {
        return _totalposts/6 + 1;
    }
}

function loadpagecontent(currentpagenumber){

    var currentpageposts;
    var firstpost = (currentpagenumber - 1) *6;

    for()
    {

    }    

}