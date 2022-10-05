const faqs = document.querySelectorAll('.faq');
//Вариант toggle
faqs.forEach(faq =>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('active');
    });
});
   // Такой же вариант только с прямым описанием , то удали , то добавь!
// faqs.forEach(faq =>{
//     faq.addEventListener('click',()=>{
//        if (faq.classList.contains('active')){
//         faq.classList.remove('active')
//        } else{
//         faq.classList.add('active')
//        }
//     });
// });
