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
            page: "./couterJs/index.html",
        },
        {
            id: 3,
            name: "Reviews",
            img: "./images/review.webp",
            page: "./our-review/index.html",
        },
        {
            id: 4,
            name: "Narbar",
            img: "./images/navbar.webp",
            page: "./Nav-bar/index.html",
        },
        {
            id: 5,
            name: "Sidebar",
            img: "./images/sidebar.webp",
            page: "./Side-bar/index.html",
        },
        {
            id: 6,
            name: "Modal",
            img: "./images/modal.webp",
            page: "./modalContent/index.html",
        },
        {
            id: 7,
            name: "Questions",
            img: "./images/question.webp",
            page: "./quesions/index.html",
        },
        {
            id: 8,
            name: "Menu",
            img: "./images/menu.webp",
            page: "./ourMenu/index.html",
        },
        {
            id: 9,
            name: "Video",
            img: "./images/video.webp",
            page: "./videos/index.html",
        },
        {
            id: 10,
            name: "Scroll",
            img: "./images/scroll.webp",
            page: "./Scrolls/index.html",
        },
        {
            id: 11,
            name: "Tabs",
            img: "./images/tabs.webp",
            page: "./tab/index.html",
        },
        {
            id: 12,
            name: "Lorem",
            img: "./images/loremIpsum.webp",
            page: "./lorem/index.html",
        },
        {
            id: 13,
            name: "Count down",
            img: "./images/countdown.webp",
            page: "./CountDown/index.html",
        },
        {
            id: 14,
            name: "Grocery",
            img: "./images/grocery.webp",
            page: "./grocery/index.html",
        },
        {
            id: 15,
            name: "Slider",
            img: "./images/slider.webp",
            page: "./Slider/index.html",
        },
        {
            id: 16,
            name: "Counter 2",
            img: "./images/counter2.webp",
            page: "./CounterJs2/index.html",
        },
        {
            id: 17,
            name: "Numbers",
            img: "./images/numbers.webp",
            page: "./number/index.html",
        },
        {
            id: 18,
            name: "Dark mode",
            img: "./images/darkmode.webp",
            page: "./Dark-Mode/index.html",
        },
        {
            id: 19,
            name: "Filters",
            img: "./images/filters.webp",
            page: "./Filters/index.html",
        },
        {
            id: 20,
            name: "DadJoke",
            img: "./images/dadJoke.webp",
            page: "./dad_joke/index.html",
        },
        {
            id: 21,
            name: "Products",
            img: "./images/products.webp",
            page: "./product/index.html",
        },
        {
            id: 22,
            name: "Person Random",
            img: "./images/personRandom.webp",
            page: "./PersonRandom/index.html",
        },
        {
            id: 23,
            name: "Slider 2",
            img: "./images/slider2.webp",
            page: "./Slider-2/index.html",
        },
        {
            id: 24,
            name: "Cocktials",
            img: "./images/cocktails.webp",
            page: "./Cock/index.html",
        },
        {
            id: 25,
            name: "Wikipedia",
            img: "./images/wiki.webp",
            page: "./Wikipedia/index.html",
        },
        {
            id: 26,
            name: "Pagination",
            img: "./images/paginate.webp",
            page: "./Pagination/index.html",
        },
        {
            id: 27,
            name: "Gallery",
            img: "./images/gallery.webp",
            page: "./Gallery/index.html",
        },
        {
            id: 28,
            name: "Stripe",
            img: "./images/stripe.webp",
            page: "./Stripe/index.html",
        },
        {
            id: 29,
            name: "Comfy Store",
            img: "./images/comfy.webp",
            page: "./comfy-store/index.html",
        },

        {
            id: 30,
            name: "Form",
            img: "./images/form.png",
            page: "./form-validate/index.html",
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