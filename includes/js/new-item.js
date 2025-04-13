window.onload = function() {
    const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
        else{
            entry.target.classList.remove('visible');
        }
    });
},{
    threshold: 0.25
});

// const observerRemove = new IntersectionObserver((entries, observer) =>{
//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             entry.target.classList.add('visible');
//             observer.unobserve(entry.target);
//         }
//     });
// },{
//     threshold: 0.5
// });

const newItem = document.querySelector('.new-item');
observer.observe(newItem);
}