

function addNewItem(name,url){
	if(!name){
		return;
	}
const ul=document.querySelector('ul#items');
const li=document.createElement('li');
ul.appendChild(li);
li.innerHTML= "<a href='"+`${url}`+"' target='_blank' >"+`${url}`+"</a>";
}

const btn = document.querySelector('#btn');
 

btn.addEventListener('click', function(){
console.log("you clicked me");
const url = 'https://api.github.com/orgs/HackYourFuture/repos';
fetch(url)
  .then((resp) => resp.json())  // Transform the data into json
  .then(function(data) {
    // Here you get the data to modify as you please

    console.log(data);
     data.map(function(author) { // Map through the results and for each run the code below
     	addNewItem(author.name,author.url);
      
    })

    })
  .catch(function(error) {
    // If there is any error you will catch them here
  });   
});

