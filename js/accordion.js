const btn = document.querySelector('.feature__link'); // document - it is our html doc, querySelector is its method to choose selectors, querySelectorAll chooses all the  elements with the given class name and saves it in an array
const btns = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');


// console.dir(btn); 
// prints the element in a form of an object where we can see its all methods

// with onclick method we cannot use several functions simultaneously
// but with addEventListener we can use several functions
//btn.addEventListener('click', function() {

//})

// but it works only with single elements for example with one button ('btn') but not with 'btns' because it is an array
//btn.addEventListener('click', () => {})

// this is to consider all the elements in the array
// for(let i = 0; i < btns.length; i++){
//   btns[i].addEventListener('click', () => {

//   })
// }

//the easier version of for loop
btns.forEach((btnItem, index) => {
  btnItem.addEventListener('click', () => {
      btns.forEach((btnItem) => {
        btnItem.classList.remove('feature__link_active')
      })
      // when clicked we need to add a class which shows that the button is active
      btnItem.classList.add('feature__link_active')

      lists.forEach((listItem) => {
        listItem.classList.add('hidden')
      })

      lists[index].classList.remove('hidden')
      
  })
})

//classList - presudo array with class methods, it helps us to add/remove a class name to/from an element

