/*** 
* Global Variables
**/

//variable that selects all the list items
const listItems = document.querySelector('.student-list').children;
//ItemsPerPage variable
const itemsPerPage = 10;



/** 
 * Create a showPage function to hide all the items in the list, except for ten
**/
const showPage = (list, page) => {
  //Start list item
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   //End of list item
   let endIndex = page * itemsPerPage;
   
  //Loop to display items
   for (let i = 0; i< list.length; i++){
      if (i >= startIndex && i < endIndex){
         list[i].style.display = '';
      } else {
        //all the rest of the items are not going to be shown
         list[i].style.display = 'none';
      }
   }

}

//show list of items in the page
showPage(listItems, 1);


/**
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
**/
const appendPageLinks = (list) => {
   // numOfPages according to number of items in the list
   let numOfPages = list.length / itemsPerPage;
   // variable to manipulate the page
   let page = document.querySelector('.page');
   // variable to create each item
   let div = document.createElement('div');
   // variable to create the page Links
   let pageLinks = `<ul>`;

   // loops through the number of pages and adds a link 
   for (let i = 0; i < numOfPages; i++) {
     if (i === 0) {
       pageLinks += `
     <li>
       <a class="active" href="#">${i + 1}</a>
     </li>`
     } else {
       pageLinks += `
     <li>
       <a href="#">${i + 1}</a>
     </li>`
     }
   }
   pageLinks += `
   </ul>`;

   // pageLinks created and inserted
   div.innerHTML = pageLinks;
   // div where the page links will be created
   div.className = 'pagination';
   page.appendChild(div);

   
   // variable that select all links in the page
   let links = div.querySelectorAll('a');
   //loop through the links
   for (let i = 0; i < links.length; i++) {
     (function () {
       //and attach click event listener 
       links[i].addEventListener('click', (e) => {
         for (let j = 0; j < links.length; j++) {
           links[j].className = '';
         }
         //opens the page
         e.target.className = 'active';
         showPage(listItems, e.target.textContent);
       },false)
     })();
   }
  }

 //appending dynamic page links into the list of items
 appendPageLinks(listItems);

