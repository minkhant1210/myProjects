// // EXTAMINE THE DOCUMENT OBJECT

// //  console.dir(document);
// console.log(document.domain);
// console.log(document.title);
// console.log(DocumentType);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'hello' ;
// console.log(document.forms);
// console.log(document.images);

// getElementById

// console.log(document.getElementById('header-title'));
//  var header = document.getElementById('main-header');
// headertitle.textContent = 'helllo';
// headertitle.innerText = 'goodbye';  
// headertitle.innerHTML = 'minkhant'
// console.log(headertitle.innerHTML);
// headertitle.style.borderBottom = 'solid 3px #000';

//GetElementsByClassName;

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2]);
// items[2].textContent = 'Hello2';
// items[2].style.backgroundColor = 'gold';

// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = 'gray';
// }

//GetElementByTagName

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello2';
// li[1].style.color = 'blue';

// for(i=0; i<li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

//QuerySelector

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

//QUARYSELECTORALL

// var titles = document.querySelectorAll('.title');
//     console.log(titles)
//     console.log(titles[0]);
//     titles[0].innerHTML = 'hello';

//  var odd = document.querySelectorAll('li:nth-child(odd)');
//  var even= document.querySelectorAll('li:nth-child(even)');

//  for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
//  }


// TEAVERSING THE DOM //

// var itemList = document.querySelector ('#items');
// //Parentnode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);
// itemList.parentNode.parentNode.parentNode.style.backgroundColor = '#001100';

// //parentElement(same as parentNode)

// //childNodes

// // console.log(itemList.childNodes)

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'red';

// //firstChild = lastChild

// console.log(itemList.firstChild);

// //firstChildElemenet= lastChildElement

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hello1'

//nextSibling

// var titles = document.querySelector('.title');
// console.log(titles);

// console.log(titles.nextSibling);
// console.log(titles.nextElementSibling);
// titles.nextElementSibling.style.backcgroundColor = 'red';

// //previousSIbling

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'blue';

//Create Element

// var newDiv = document.createElement('div');

// newDiv.className = 'hello';
// newDiv.id        = 'hello1';
// newDiv.setAttribute('title' , 'Hello Div');

// var newDivText = document.createTextNode('Hello World');
// newDiv.appendChild(newDivText);

//  var container = document.querySelector('header .container');
//  var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '40px';

// container.insertBefore(newDiv, h1);


//EVENTS
// var button = document.getElementById('btn').addEventListener('click', buttonClick);

// function buttonClick(){
//     //  console.log('Button Clicked')
//      document.getElementById('header-title').textContent = 'Changed';
//      document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//

// function buttonClick(e){
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>'+e.target.id+'</h3>';  

    // console.log(e.type);

    // console.log(e.clientX);
    // console.log(e.clientY);
    
    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);

//}

// var button = document.getElementById('btn');
// var box = document.getElementById('box');


// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

// var ItemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// ItemInput.addEventListener('keydown' ,runEvent);
// ItemInput.addEventListener('keyup', runEvent);
// ItemInput.addEventListener('keypress', runEvent);

// ItemInput.addEventListener('focus', runEvent);
// ItemInput.addEventListener('blur', runEvent);

// ItemInput.addEventListener('cut', runEvent);
// ItemInput.addEventListener('paste', runEvent);

// form.addEventListener('submit', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);


// function runEvent(e){
//     e.preventDefault();
//     console.log('Event Type: '+e.type);
    

    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'

    // output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'</h3>';

    // box.style.backgroundColor = "rgb("+e.offsetX +","+e.offsetY+" , 40    )"
    // document.body.style.backgroundColor = "rgb("+e.offsetX +","+e.offsetY+" , 40    )";

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;

    var li = document.createElement('li');

    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));

    var deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('x'));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if (
            itemName.toLowerCase().indexOf(text) != -1
        ){
            item.style.display = 'block';

        }else{
            item.style.display = 'none';
        }
    });
}