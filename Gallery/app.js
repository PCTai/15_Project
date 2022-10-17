function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
      return element;
    }
    throw new Error(
      `Please check "${selection}" selector, no such element exists`
    );
  }
  
  class Gallery {
    constructor(element){
        console.log(element);
        this.container= element;
        this.list=[...(element.querySelectorAll('.img'))];

        this.modal=getElement('.modal');
        this.modalImg = getElement('.main-img');
        this.btnClose=getElement('.close-btn');
        this.btnNext=getElement('.next-btn');
        this.btnPrev=getElement('.prev-btn');
        this.modalImages= getElement('.modal-images');
        this.imageName= getElement('.image-name');
        const openModal= this.openModal.bind(this);
        const list= this.list

        this.container.addEventListener('click',function(e){

            if(e.target.classList.contains('img')){
                openModal(e.target, list);
            }
        })
    }
    openModal(selectImg, list){
        // console.log(selectImg, list);
        this.setMainImage(selectImg);
        this.modalImages.innerHTML=this.list.map((item)=>{
            return `<img src="${item.src}" title="${item.title}"
            data-id="${item.dataset.id}" class="modal-img ${item.dataset.id==selectImg.dataset.id? "selected": ''}">`
        }).join('');
        
        this.modal.classList.add('open');
        this.btnClose.addEventListener('click', this.closeModal.bind(this));
        this.btnNext.addEventListener('click', this.nextImage.bind(this));
        this.btnPrev.addEventListener('click', this.prevImage.bind(this));
        
    }
    setMainImage(selectImg){
        this.imageName=selectImg.title;
        this.modalImg.src= selectImg.src;
    }
    closeModal() {
        this.modal.classList.remove('open');
        this.btnClose.removeEventListener('click', this.closeModal);
        this.btnPrev.removeEventListener('click', this.prevImage);
        this.btnNext.removeEventListener('click', this.nextImage);
      }
    nextImage(){
        const imageSelected= document.querySelector('.selected');
        let nextEl= imageSelected.nextElementSibling;
        if(!nextEl){
            nextEl= this.modalImages.firstElementChild;
        }
        imageSelected.classList.remove('selected');
        nextEl.classList.add('selected');
        this.setMainImage(nextEl);
    }
    prevImage(){
        const imageSelected= document.querySelector('.selected');
        let prevEl= imageSelected.previousElementSibling;
        if(!prevEl){
            prevEl= this.modalImages.lastElementChild;
        }
        imageSelected.classList.remove('selected');
        prevEl.classList.add('selected');
        this.setMainImage(prevEl);
    }

  }
  
  const nature = new Gallery(document.querySelector('.nature'));
  const city = new Gallery(document.querySelector('.city'));
  