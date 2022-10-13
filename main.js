const listProjecs = document.querySelector(".list-projects");
console.log(listProjecs);

const app = {
    projects: [
        {
            id: 1,
            name: "Color Flipper",
            img: "./images/color.webp",
            page: "./ColorRandom/index.html",
        },
        {
            id: 2,
            name: "Counter First",
            img: "./images/counter.webp",
            page: "./Counter/index.html",
        },
        {
            id: 3,
            name: "Reviews",
            img: "./images/review.webp",
            page: "./our_review/index.html",
        },
        {
            id: 4,
            name: "Narbar",
            img: "./images/navbar.webp",
            page: "./Navbar/index.html",
        },
        {
            id: 5,
            name: "Sidebar",
            img: "./images/sidebar.webp",
            page: "./sidebar/index.html",
        },
        {
            id: 6,
            name: "Modal",
            img: "./images/modal.webp",
            page: "./Modal/index.html",
        },
        {
            id: 7,
            name: "Questions",
            img: "./images/question.webp",
            page: "./question/index.html",
        },
        {
            id: 8,
            name: "Menu",
            img: "./images/menu.webp",
            page: "./menu/index.html",
        },
        {
            id: 9,
            name: "Video",
            img: "./images/video.webp",
            page: "./video/index.html",
        },
        {
            id: 10,
            name: "Scroll",
            img: "./images/scroll.webp",
            page: "./Scroll/index.html",
        },
        {
            id: 11,
            name: "Tabs",
            img: "./images/tabs.webp",
            page: "./tabs/index.html",
        },
        {
            id: 12,
            name: "Lorem",
            img: "./images/loremIpsum.webp",
            page: "./paragraphs/index.html",
        },
        {
            id: 13,
            name: "Count down",
            img: "./images/countdown.webp",
            page: "./count-down/index.html",
        },
        {
            id: 14,
            name: "Grocery",
            img: "./images/grocery.webp",
            page: "./grocery bud/index.html",
        },
        {
            id: 15,
            name: "Slider",
            img: "./images/slider.webp",
            page: "./slide/index.html",
        },
        {
            id: 16,
            name: "Counter 2",
            img: "./images/counter2.webp",
            page: "./Counter-2/index.html",
        },
        {
            id: 17,
            name: "Numbers",
            img: "./images/numbers.webp",
            page: "./Numbers/index.html",
        },
        {
            id: 18,
            name: "Dark mode",
            img: "./images/darkmode.webp",
            page: "./DarkMode/index.html",
        },
        {
            id: 19,
            name: "Filters",
            img: "./images/filters.webp",
            page: "./Filter/index.html",
        },
        {
            id: 20,
            name: "DadJoke",
            img: "./images/dadJoke.webp",
            page: "./DadJoke/index.html",
        },
        {
            id: 21,
            name: "Products",
            img: "./images/products.webp",
            page: "./Product-conpleted/index.html",
        },
        {
            id: 22,
            name: "Person Random",
            img: "./images/personRandom.webp",
            page: "./Person-random/index.html",
        },
        {
            id: 23,
            name: "Slider 2",
            img: "./images/slider2.webp",
            page: "./slider2/index.html",
        },
        {
            id: 24,
            name: "Cocktials",
            img: "./images/cocktails.webp",
            page: "./Cock/index.html",
        },
        
        
    ],
    render: function () {
        const html = this.projects.map((project) => {
            return `
      <a
        href="${project.page}"
        target="_blank"
        class="project-item"
      >
        <div class="project-img">
          <img src="${project.img}" alt="" />
        </div>
        <footer class="project-footer">
          <h3>${project.name}</h3>
        </footer>
      </a>
      `;
        });
        listProjecs.innerHTML = html.join("");
    },
    start: function () {
        this.render();
    },
};
app.start();