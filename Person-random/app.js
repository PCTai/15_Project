const URL = "https://randomuser.me/api/";


 const getUser= async() =>{
    const data= await fetch(URL).then((res) => res.json());
    console.log(data);
    const user= data.results[0];
    const {phone,email} =user;
    const {large: image} =user.picture;
    const {street: { number, name }} = user.location;
    const { password } = user.login;
    const { first, last } = user.name;
    const {dob: { age },} = user;
    // console.log(phone,
    //     email,
    //     image,
    //    `${number} ${name}`,
    //     password,
    //     `${first} ${last}`,
    //     age,);
    return {
        phone,
        email,
        image,
        street: `${number} ${name}`,
        password,
        name: `${first} ${last}`,
        age,
      };
 }
 
 const img= document.querySelector('.avatar img');
 const title= document.querySelector('.title');
 const value= document.querySelector('.value');
 const btn= document.querySelector('.btn');
 const btns= document.querySelectorAll('.icon');
 const showUser = async () => {
    const person = await getUser();
    displayUser(person);
  };
 const displayUser=function(person){
    img.src= person.image;
    console.log(person['email']);
    title.textContent= "My name is ";
    value.textContent= person.name;
    btns[0].classList.add('active');
    btns.forEach(btn =>{
        btn.addEventListener('click',function(){
            document.querySelector('.icon.active').classList.remove('active');
            btn.classList.add('active');
            const label = btn.dataset.label;
            title.textContent= `My ${label} is`;
            value.textContent= person[label];
        })
    })
 }

 window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);