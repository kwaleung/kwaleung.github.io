//Javascript for dynamic page arrangement

var ListDiv = document.getElementById("post-preview-list");

var posts = [
    {
        "href": "../posts/first_post",
        "title": "First Post",
        "subtitle": ":D",
        "date": "April 2, 2017",
    },

    {
        "href": "../posts/dell_review",
        "title": "Two days into the red GTR and I'm lovin' it.",
        "subtitle": "My first impressions on Dell's budget gaming laptop - Inspiron 15 (7567)",
        "date": "April 12,2017", 
    }
];

//DOM structure
posts.forEach(function(post){

    var postpreviewDiv = document.createElement("div");
    var hrefDiv = document.createElement("a");
    var posttitleDiv = document.createElement("h2");
    var postsubtitleDiv = document.createElement("h3");
    var postdateDiv = document.createElement("p");

    postpreviewDiv.classList.add = "post-preview";
    hrefDiv.href = post.href;
    posttitleDiv.classList.add = "post-title";
    posttitleDiv.innerHTML = post.title;
    postsubtitleDiv.classList.add = "post-subtitle";
    postsubtitleDiv.innerHTML = post.subtitle;
    postdateDiv.classList.add = "post-meta";
    postdateDiv.innerHTML = post.date;

    hrefDiv.appendChild(posttitleDiv);
    hrefDiv.appendChild(postsubtitleDiv);
    
    postpreviewDiv.appendChild(hrefDiv);
    postpreviewDiv.appendChild(postdateDiv);
})