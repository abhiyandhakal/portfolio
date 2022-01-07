let html_css_js_projects = [
  {
    title: 'Rock 👊 Paper ✋ Scissors ✂',
    link: 'https://rockpaperscissors.pages.dev'
  },
  {
    title: 'Color Generator',
    link: 'https://color-generator-dng.pages.dev/'
  },
  {
    title: 'Counter',
    link: 'https://counter-b55.pages.dev/'
  },
  {
    title: 'Reviews',
    link: 'https://js-project-reviews.pages.dev/'
  },
  {
    title: 'Menu',
    link: 'https://menu-6si.pages.dev/'
  }
];

const html_css_js_div = document.querySelector('[html_css_js]');

let html_css_js_projects_items = html_css_js_projects.map((item)=> {
  return `<div class="iframe-container">
    <iframe src="${item.link}" frameborder="0"></iframe>
    <div class="caption"><a href="${item.link}" target="_blank">Click here to visit <b class="large-text site-name">${item.title}</b></a></div>
  </div>`
});

html_css_js_projects_items = html_css_js_projects_items.join('');
html_css_js_div.innerHTML = html_css_js_projects_items;