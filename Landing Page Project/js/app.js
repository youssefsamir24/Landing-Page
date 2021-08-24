const navbar = document.getElementById('navbar__list');
var sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
/** function to load sections names into the navbar */
function loadSec(){
    for (let i of sections ){
        let SectionName = document.createElement('li');
        SectionName.className= 'menu__link';
        SectionName.dataset.name=i.id;
        SectionName.innerText=i.id;
        fragment.appendChild(SectionName);
    };
    navbar.appendChild(fragment)
};
/** function for scrolling the page to sepcfic section */
function specficsec (){
 var sec = document.getElementsByTagName('section')

navbar.addEventListener('click',function (e){
    const clicked_Sec =document.getElementById( e.target.innerText);
    for (let i=0;i<sec.length;i++)
{
    sec[i].classList.remove('your-active-class')
    if (sec[i]==clicked_Sec){
    clicked_Sec.classList.add('your-active-class');
    }
}

    clicked_Sec.scrollIntoView();

});

};
function active_class(){

}

/** check if section in veiw or not */
function check_inveiw()
{
var html=document.documentElement;
let active_section=0;
for (i of sections){
    var rect =i.getBoundingClientRect();
    if (rect.top>=0 &&
    rect.left>=0 &&
    rect.bottom <=(window.innerHeight||html.clientHeight)&&
    rect.right <=(window.innerWidth||html.clientWidth)){
         active_section=i;
    };

};
return active_section;
};
/** set activation class to the section and highlight the navbar buttons */
function activate_sec(){
    var sec = document.getElementsByTagName('section')
    window.addEventListener('scroll',function(e){
        const active_section = check_inveiw();
        active_section.classList.add('your-active-class');
        for(let i=0;i<sec.length;i++){
            if(sec[i].id!=active_section.id){
                sec[i].classList.remove('your-active-class');
            }
        }
        const active_btn = document.querySelector('li[data-name="' + active_section.id + '"]');
        active_btn.classList.add('active__Section');
        const other_btns =document.querySelectorAll('.menu__link')
        for(let i of other_btns){
            if(i.dataset.name!=active_btn.dataset.name){
                i.classList.remove('active__Section');
            }
        };
    });
};

/** Functions Call */
loadSec();
specficsec();
activate_sec();
const sec1=document.querySelector('#section1');
const rect =sec1.getBoundingClientRect();
console.log(rect);
const winrect=document.body.getBoundingClientRect();
console.log(winrect);