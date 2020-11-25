
// Meme function that basically powers the site
function meme () {
    let fetchRes = fetch("https://www.reddit.com/r/Cleanmemes/hot.json"); 
    fetchRes.then(res => res.json()).then(d => {
        // Generates a random number for the random meme
        var randomNumber = Math.floor(Math.random() * 26)

        // Actually gets the data from the api
        var memeTitle = d.data.children[randomNumber].data.title
        var memeImg = d.data.children[randomNumber].data.url
        var permalink = d.data.children[randomNumber].data.permalink
        var postURL = `https://reddit.com${permalink}`
        var upvotes = d.data.children[randomNumber].data.ups
        var awards = d.data.children[randomNumber].data.total_awards_received
        var comments = d.data.children[randomNumber].data.num_comments
        
        // setting the text to the data
        document.getElementById('meme').src = memeImg;
        document.getElementById('thing').innerHTML = memeTitle;
        document.getElementById('thing').href = postURL;
        document.getElementById('upvotes').innerHTML = `👍 ${upvotes} upvotes`;
        document.getElementById('comments').innerHTML = `💬 ${comments} comments`;
        document.getElementById('awards').innerHTML = `🏆 ${awards} awards`;
    })
}

// Reload page button
function reloadPage () {
    document.location.reload(true)
}

// Calling the meme function
meme()
