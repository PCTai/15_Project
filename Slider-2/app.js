const people = [
    {
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959121/person-1_aufeoq.jpg",
      name: "peter doe",
      job: "product manager",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis? `,
    },
    {
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-2_ipcjws.jpg",
      name: "susan doe",
      job: "developer",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
    {
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-3_rxtqvi.jpg",
      name: "emma doe",
      job: "designer",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
    {
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/c_scale,w_200/v1595959131/person-3_rxtqvi.jpg",
        name: "emma doe",
        job: "designer",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
      },
  ];

const slider= document.querySelector('.slider');
const nextBtn= document.querySelector('.next-btn');
const prevBtn= document.querySelector('.prev-btn');


slider.innerHTML= people.map((item, index) =>{
    let position= 'next';
    if(index == people.length-1){
        position = 'last'
    }
    if(index == 0)
        position = 'active'
    
    if (people.length <= 1) {
        position = 'active'
    }
    
    return `
    <div class="item ${position}">
        <div class="image">
            <img src="${item.img}"
                alt="">
        </div>
        <p class="name">${item.name}/p>
        <p class="position">${item.job}</p>
        <p class="desc">${item.text}</p>
        <i class="large fas fa-quote-right"></i>

    </div>
    `
}).join('');

const startSlider = (type) => {
    // get all three slides active,last next
    const active= document.querySelector('.active');
    const last= document.querySelector('.last');
    let next= active.nextElementSibling;
    if(!next){
        next= slider.firstElementChild;
    }

    active.classList.remove('active');
    last.classList.remove('last');
    next.classList.remove('next');
    if(type=='prev'){
        active.classList.add('next');
        last.classList.add('active');
        next=last.previousElementSibling;
        if(!next){
            next= slider.lastElementChild;
        }
        next.classList.remove('next')
        next.classList.add('last');
        return;
    }
    active.classList.add('last');
    last.classList.add('next');
    next.classList.add('active');

    
  }
  nextBtn.addEventListener('click', () => {
    startSlider()
  })
  prevBtn.addEventListener('click', () => {
    startSlider('prev')
  })
  