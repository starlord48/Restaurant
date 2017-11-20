window.sr=ScrollReveal();
sr.reveal('.floating-text',{duration:3000,
                        origin:'top',
                        distance:'100px',
                        scale : 2,
                        mobile:true});
                        sr.reveal('.menu',{duration:3000,
                                                origin:'top',
                                                distance:'-100px',
                                                mobile:true
                                                });
var  menu=document.querySelector(".menu-list");
var  menu=document.querySelector(".menu-one");
var  menu=document.querySelector(".menu-two");
var  heading=document.querySelector(".floating-text");
var show=document.querySelector(".show-content");
show.addEventListener('click',function(){
  menu.style.display='block';
heading.style.display='none';
  sr.reveal('.menu-two',{duration:3000,
                          origin:'bottom',
                          distance:'700px',

                          mobile:true});
                          sr.reveal('.menu-one',{duration:5000,
                                                  origin:'top',
                                                  distance:'700px',

                                                  mobile:true});



});
