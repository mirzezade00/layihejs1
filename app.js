let clear = document.querySelector(".clear-icon");
let sort = document.querySelector(".sort-icon");

function toggleSortAndClear() {
    clear.classList.toggle("none");
    sort.classList.toggle("none");
}

clear.addEventListener("mouseover", toggleSortAndClear);
clear.addEventListener("mouseout", toggleSortAndClear);

let iconX = document.querySelector(".clear-icon");
iconX.addEventListener("click", () => {
    input.value = "";
});

let input = document.querySelector('.input-group input');
let addButton = document.querySelector('.add-btn');
let plusButton = document.querySelector('.plus-btn');
let todoList = document.querySelector('.todo-list');
let clearIcon = document.querySelector('.clear-icon');

plusButton.addEventListener('click', () => {
    input.style.display = 'block';
    clearIcon.style.display = 'block';
    input.focus();
    addButton.style.width = 'auto'; 
    addButton.style.paddingLeft = '20px';
    
    addButton.style.borderRadius = '50%';
});


function hideInputAndIcon() {
    input.style.display = 'none';
    clearIcon.style.display = 'none'; 
}

function showInput() {
    input.style.display = 'block';
    clearIcon.style.display = 'block';
}

function addIconHoverEffect(button, normalSrc, hoverSrc) {
    button.addEventListener("mouseover", () => {
        button.src = hoverSrc;
    });
    button.addEventListener("mouseout", () => {
        button.src = normalSrc;
    });
}

addButton.addEventListener('click', () => {
    let inputValue = input.value.trim(); 
    if (inputValue) {
        let li = document.createElement('li');
        li.textContent = inputValue;

        let xButton = document.createElement("img");
        xButton.src = "./Frame-3.svg"; 
        xButton.alt = "Clear";
        xButton.classList.add("clear-icon-li");

        addIconHoverEffect(xButton, "./Frame-3.svg", "./Frame-4.svg");

        xButton.addEventListener("click", () => {
            li.remove();
            if (todoList.children.length === 0) {
                todoList.style.display = "none";
                showInput();
            }
            numberTasks(); 
        });

        li.appendChild(xButton);
        todoList.appendChild(li);
        todoList.style.display = 'block'; 

        input.value = '';
        hideInputAndIcon();
        numberTasks();
    }
});

clearIcon.addEventListener('click', () => {
    input.value = '';
});


let icon1 = document.querySelector(".icon1");  
let icon2 = document.querySelector(".icon2");  
let icon3 = document.querySelector(".icon3");  

icon1.addEventListener("mouseover", () => {
    icon1.src = "./Frame-2.svg";  
});

icon1.addEventListener("mouseout", () => {
    icon1.src = "./Frame-1.svg";  
});
icon3.addEventListener("mouseover", () => {
    icon3.src = "./Group-91.svg";  
});

icon3.addEventListener("mouseout", () => {
    icon3.src = "./Group-90.svg"; 
});

icon1.addEventListener("click", () => {
    icon1.style.display = "none";   
    icon3.style.display = "block";  

    icon3.src = "./Group-90.svg";  

    icon3.addEventListener("click", () => {
        icon3.src = "./Frame-1.svg"; 
        icon3.style.display = "none";  
        icon1.style.display = "block"; 
        sortingZA();  
        numberTasks();  
    });

    sortingAZ(); 
    numberTasks();  
});

function numberTasks() {
    let listItems = todoList.querySelectorAll("li");
    listItems.forEach((li, index) => {
        li.firstChild.nodeValue = `${index + 1}.${li.textContent.split('.')[1] || li.textContent}`;
    });
}

function sortingAZ() {
    let listItems = [...todoList.children]; 
    listItems.sort((a, b) => {
        let textA = a.textContent.split('.')[1];
        let textB = b.textContent.split('.')[1];
        
        return textA.localeCompare(textB);
    });
    
    todoList.innerHTML = "";
    listItems.forEach(item => todoList.appendChild(item));
}

function sortingZA() {
    let listItems = [...todoList.children]; 
    listItems.sort((a, b) => {
        let textA = a.textContent.split('.')[1];
        let textB = b.textContent.split('.')[1];
        
        return textB.localeCompare(textA);
    });
    
    todoList.innerHTML = "";
    listItems.forEach(item => todoList.appendChild(item));
}
