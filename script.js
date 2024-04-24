const body = document.body;
const aside = document.getElementById('aside');

const questionEl = document.createElement('h1');
questionEl.textContent = "What's on your mind?";

const formTitleEl = document.createElement('h4');
formTitleEl.textContent = 'Username';

const userNameFormInputEl = document.createElement('input');

userNameFormInputEl.type = 'text';
// below is a key/value pair name="username". This attribute is used when sending data in a form submission. Also example , value: " // what was entered "
userNameFormInputEl.name = 'username';
// the below can be used to connect the CSS
userNameFormInputEl.id = 'username';
userNameFormInputEl.placeholder = 'Enter your username';

const blogTitle = document.createElement('h4');
blogTitle.textContent = 'Title';
const blogTitleFormInputEl = document.createElement('input');

blogTitleFormInputEl.type = 'text';
blogTitleFormInputEl.name = 'title';
blogTitleFormInputEl.id = 'title';
blogTitleFormInputEl.placeholder = 'Enter your title here';

const blogContent = document.createElement('h4');
blogContent.textContent = 'Content';
const blogContentFormInputEl = document.createElement('input');

blogContentFormInputEl.type = 'text';
blogContentFormInputEl.name = 'content';
blogContentFormInputEl.id = 'content';
blogContentFormInputEl.placeholder = 'Enter your content here';

const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
submitButton.style.display = 'block';

//Used append instead of appendChild so I could enter multiple nodes/elements
aside.append(
    questionEl,
    formTitleEl,
    userNameFormInputEl,
    blogTitle,
    blogTitleFormInputEl,
    blogContent,
    blogContentFormInputEl,
    submitButton
);

submitButton.addEventListener('click', function () {
    
});
