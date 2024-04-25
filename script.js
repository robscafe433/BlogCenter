const body = document.body;
const aside = document.getElementById('aside');
let count = 0;
const questionEl = document.createElement('h1');
questionEl.textContent = "What's on your mind?";

const formTitleEl = document.createElement('h4');
formTitleEl.textContent = 'Username';

const userNameFormInputEl = document.createElement('input');
const blogTitle = document.createElement('h4');
const blogContent = document.createElement('h4');

let blogArray = [];

// const userNameFormInputEl = document.createElement('input');
userNameFormInputEl.type = 'text';
// below is a key/value pair name="username".
userNameFormInputEl.name = 'username';
// the below can be used to connect the CSS
userNameFormInputEl.id = 'username';
userNameFormInputEl.placeholder = 'Enter your username';

blogTitle.textContent = 'Title';
const blogTitleFormInputEl = document.createElement('input');

blogTitleFormInputEl.type = 'text';
blogTitleFormInputEl.name = 'title';
blogTitleFormInputEl.id = 'title';
blogTitleFormInputEl.placeholder = 'Enter your title here';

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
    let blogData = {};
    blogData.objName = userNameFormInputEl.value;
    blogData.objTitle = blogTitleFormInputEl.value;
    blogData.objContent = blogContentFormInputEl.value;

    blogArray.push(blogData);

    console.log('This should be updated object', blogData);
    console.log('This is entire blogArray', blogArray);
});
