// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);   // deprecatedd
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);  // deprecated
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);
// <h1 id="header-title">Item Lister <span style="display: none;">test</span></h1> //
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = '3px solid black';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// Gives error
// items.style.backgroundColor = '#f4f4f4';

// for (let i = 0; i< items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }


// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[0].textContent = 'Hello 1';
// li[0].style.fontWeight = 'bold';
// li[0].style.backgroundColor = 'yellow';

// QUERYSELECTOR //
// let header = document.querySelector('#main-header');
// header.style.borderBottom = '3px solid black';

// let input = document.querySelector('input');
// input.value = 'Hello World';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = "Send";

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// let titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');
// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// TRAVERSING THE DOM //
// let itemList = document.querySelector('#items');
// parentNode //
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement //
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);


// childNodes - DO NOT USE //
// console.log(itemList.childNodes);

// children - USE INSTEAD //
// console.log(itemList.children);
// console.log(itemList.children[0]);
// itemList.children[1].style.backgroundColor = 'yellow';


// firstChild - DO NOT USE //
// console.log(itemList.firstChild);

// firstElementChild - USE INSTEAD //
// itemList.firstElementChild.textContent = 'Hello 1';

// lastChild - DO NOT USE //
// console.log(itemList.lastChild);

// lastElementChild - USE INSTEAD //
// itemList.lastElementChild.textContent = 'Hello 4';


// nextSibling - DO NOT USE //
// console.log(itemList.nextSibling);
// nextElementSibling - USE INSTEAD //
// console.log(itemList.nextElementSibling);

// previousSibling - DO NOT USE //
// console.log(itemList.previousSibling);
// previousElementSibling - USE INSTEAD //
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';


// createElement //

// create a div //
// let newDiv = document.createElement('div');

// add a class //
// newDiv.className = 'new-div';

// add id //
// newDiv.id = 'hello1';

// add attribute //
// newDiv.setAttribute('title', 'Hello Div');

// create text node //
// let newDivText = document.createTextNode('Hello World');

// add text to div //
// newDiv.appendChild(newDivText);

// console.log(newDiv);

// insert //
// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');
// container.insertBefore(newDiv, h1);

// newDiv.style.fontSize = '2rem';

// let button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e) {
    // document.getElementById('header-title').textContent = 'Changed';
    // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
    // console.log(e);

    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // let output = document.getElementById('output');
    // output.innerHTML = '<h3>' + e.target.id + '</h3>';

    // console.log(e.type);

    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);

// }

// let button = document.getElementById('button');
// let box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);

// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

// let itemInput = document.querySelector('input[type="text"]');
// let form = document.querySelector('form');
// let select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('copy', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);

// function runEvent(e) {
    // e.preventDefault();
    // console.log("EVENT TYPE: " + e.type);

    // output.innerHTML = '<h3>MouseX: ' + e.offsetX + 
    // '</h3><h3>MouseY: ' + e.offsetY + '</h3>';

    // document.body.style.backgroundColor = 'rgb(' + 
    // e.offsetX + ', ' + e.offsetY + ', 40)';

    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>';

// }
