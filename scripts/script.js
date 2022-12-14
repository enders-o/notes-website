const themeButton = document.querySelector('.dark-theme');
const cancelButton = document.querySelector(".cancel");
const newNoteButton = document.querySelector(".new-note");
const saveButton = document.querySelector('.save');
const textarea = document.querySelector('textarea');
const notesList = document.querySelector(".notes-list");
// console.log(themeButton);

let notesArray = [
    {title:"note one", body:"this is my first note"}
]

// console.log(notesArray)

const darkTheme = () => {
    document.body.classList.toggle('darkThemeBody');
    document.querySelector('aside').classList.toggle('darkThemeAside');
    document.querySelector('#about').classList.toggle('darkThemeBody');
    document.querySelector('#docs').classList.toggle('darkThemeBody');

    if (themeButton.textContent === 'Dark Theme') {
        themeButton.textContent = "Light Theme";
    } else {
        themeButton.textContent =  "Dark Theme";
    }
    
}

const cancel = () => {
    // textarea.style.display = 'none';
    // document.querySelector('.save').style.display = 'none';
    // document.querySelector('.cancel').style.display = 'none';

    textarea.classList.add('display-none');
    document.querySelector('.save').classList.add('display-none');
    document.querySelector('.cancel').classList.add('display-none');
}

const newNote = () => {
    textarea.classList.remove('display-none');
    document.querySelector('.save').classList.remove('display-none');
    document.querySelector('.cancel').classList.remove('display-none');
    textarea.value ="";
}

const save = () => {
    user_text = textarea.value;
    user_title = null;
    do {
        user_title = prompt("Enter a title: ");
        notesArray.forEach((el) => {
            if(user_title === el.title){
                alert("Title already used.");
                user_title = null;
            }
        });
        
    } while(user_title === null)
    // console.log(user_text);
    notesArray.push({title: user_title, body:user_text});
    // console.log(notesArray);
    let li = document.createElement('li');
    li.textContent = user_title;
    notesList.appendChild(li);
}

const sidebar = (ev) => {
    // console.log(ev.target);
    // console.log(ev.target.textContent);
    notesArray.forEach((el) => {
        if(ev.target.textContent === el.title){
            // console.log(el.body);
            textarea.value = el.body;
        }
    });
}

themeButton.addEventListener("click", darkTheme);
cancelButton.addEventListener("click", cancel);
newNoteButton.addEventListener("click", newNote);
saveButton.addEventListener("click", save);
notesList.addEventListener("click", sidebar);
