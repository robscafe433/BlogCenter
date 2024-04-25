const body = document.body;
const aside = document.getElementById('aside');
let count = 0;
let blogArray = [];

//Top of page question
const questionEl = document.createElement('h1');
questionEl.textContent = "What's on your mind?";

// Form section descriptions:
const blogName = document.createElement('h4');
blogName.textContent = 'Username';

const blogTitle = document.createElement('h4');
blogTitle.textContent = 'Title';

const blogContent = document.createElement('h4');
blogContent.textContent = 'Content';

// Form Name Input:
const blogNameFormInputEl = document.createElement('input');
blogNameFormInputEl.type = 'text';
blogNameFormInputEl.name = 'username';
blogNameFormInputEl.id = 'username';
blogNameFormInputEl.placeholder = 'Enter your username';

//Form Title Input:
const blogTitleFormInputEl = document.createElement('input');
blogTitleFormInputEl.type = 'text';
blogTitleFormInputEl.name = 'title';
blogTitleFormInputEl.id = 'title';
blogTitleFormInputEl.placeholder = 'Enter your title here';

//Form Content Input:
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
    blogName,
    blogNameFormInputEl,
    blogTitle,
    blogTitleFormInputEl,
    blogContent,
    blogContentFormInputEl,
    submitButton
);

submitButton.addEventListener('click', function () {
    let blogData = {};
    blogData.objName = blogNameFormInputEl.value;
    blogData.objTitle = blogTitleFormInputEl.value;
    blogData.objContent = blogContentFormInputEl.value;

    blogArray.push(blogData);
    // sends full array of all objects created to localStorage in Stringified form.
    localStorage.setItem('blogLocalStorage', JSON.stringify(blogArray));

    console.log('This should be updated object', blogData);
    console.log('This is entire blogArray', blogArray);

    blogNameFormInputEl.value = null;
    blogTitleFormInputEl.value = null;
    blogContentFormInputEl.value = null;
});
