
const listPreview=[
    {
        id: 1,
        name: "Susan Smith",
        position: "WEB DEVELOPER",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        desc:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        id: 2,
        name: "Bill Anderson",
        position: "THE BOSS",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        desc:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    },
    {
        id: 3,
        name: "Peter Jones",
        position: "INTERN",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        desc:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    }
];

const elImage = document.querySelector('.image img');
const elName = document.querySelector('.name');
const elPosition = document.querySelector('.position');
const elDesc = document.querySelector('.desc');
const elprev = document.querySelector('.prev');
const elnext = document.querySelector('.next');
const elsup = document.querySelector('.sup');
let index=0;
window.addEventListener('load',function(){
    elDesc.innerHTML=listPreview[index].desc;
    elName.innerHTML=listPreview[index].name;
    elPosition.innerHTML=listPreview[index].position;
    elImage.src= listPreview[index].img;

    function render(dir){
        if(dir=="prev"){
            index--;
            if(index<0){
                index=listPreview.length-1;
            }
        }
        else{
            index++;
            if(index>listPreview.length-1){
                index=0;
            }
        }
        elDesc.innerHTML=listPreview[index].desc;
        elName.innerHTML=listPreview[index].name;
        elPosition.innerHTML=listPreview[index].position;
        elImage.src= listPreview[index].img;
    }
    elprev.addEventListener('click', function(){
        render('prev');
    })
    elnext.addEventListener('click', function(){
        render('next');
    })
    elsup.addEventListener('click', function(){
        render('next');
    })

})

