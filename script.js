"use strict";

$(document).ready(() => {

  let page = prompt("Enter a subreddit!");

  $.get(`https://www.reddit.com/r/${page}/.json`).then((data) => {
    for (let i = 0; i < 10; i++) {
      let info = data.data.children[i].data.title;
      let image = data.data.children[i].data.url;
      let thumbnail = data.data.children[i].data.thumbnail;
      let subreddit = data.data.children[i].data.subreddit_name_prefixed;
      let author = data.data.children[i].data.author;
      let linkToSite = data.data.children[i].data.permalink;
      let bigImage = data.data.children[i].data.preview.images["0"].source.url;
  
      console.log(bigImage);
      $("#container_box").append(`
      <div class="container">
        <div class="image">
          <img src="${bigImage}" class="img">
          <a href="${image}"><i class="material-icons plus_sign">zoom_in</i></a>
          <div class="sub_reddit">${subreddit}</div>
        </div>
        <div class="content">
          <h4 class="title">${info}</h4>
          <div class="author">
            <i class="material-icons author_icon">person</i>
            <p class="person">${author}</p>
            <a href="https://www.reddit.com${linkToSite}" class="view_site"><p>View Comments</p></a>
          </div>
        </div>
      </div>
      `);
    }
  }).catch((err) => {
      alert("bruh");
  });
})
