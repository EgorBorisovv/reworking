const faqImage = document.querySelector('.faq_image')
const about = document.querySelector('.about')
const textabout = document.querySelector('.text')
const faq = document.querySelector('.faq')
const show = document.querySelector('.show-text')
const visible = document.querySelector('.text__about_vision')
const fqText = document.querySelectorAll('.click')
const showFq= document.querySelector('.show-text_fq')
const discript = document.querySelectorAll('.discription')
console.log(fqText)
//Появление
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            visible.classList.add('show-text')
            
        }
    });
});
observer.observe(visible)

//аккордион
for (let i =0;i<=fqText.length;i++){
fqText[i].addEventListener('click',function(){
    discript[i].classList.toggle('discript')
})
}
