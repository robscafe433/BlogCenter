const body = document.body;
const aside = document.getElementById('aside');

let blogArray = [];

if (localStorage.getItem('blogLocalStorage')) {
    blogArray = JSON.parse(localStorage.getItem('blogLocalStorage'));
}

//Image (middle section left-side):

// Form section (middle section right-side):

const questionEl = document.createElement('h1');
questionEl.textContent = "What's on your mind?";

const blogName = document.createElement('h4');
blogName.textContent = 'Username';

const blogTitle = document.createElement('h4');
blogTitle.textContent = 'Title';

const blogContent = document.createElement('h4');
blogContent.textContent = 'Content';

//Start of form

// Form Name Input:
const blogNameLabel = document.createElement('label');
const blogNameFormInputEl = document.createElement('input');
blogNameFormInputEl.type = 'text';
blogNameFormInputEl.name = 'username';
blogNameFormInputEl.id = 'username';
blogNameFormInputEl.placeholder = 'Enter your username';

//Form Title Input:
const blogTitleLabel = document.createElement('label');
const blogTitleFormInputEl = document.createElement('input');
blogTitleFormInputEl.type = 'text';
blogTitleFormInputEl.name = 'title';
blogTitleFormInputEl.id = 'title';
blogTitleFormInputEl.placeholder = 'Enter your title here';

//Form Content Input:
const blogContentLabel = document.createElement('label');
const blogContentFormInputEl = document.createElement('input');
blogContentFormInputEl.type = 'text';
blogContentFormInputEl.name = 'content';
blogContentFormInputEl.id = 'content';
blogContentFormInputEl.placeholder = 'Enter your content here';

const blogAnchorButtonTag = document.createElement('a');
blogAnchorButtonTag.setAttribute('href', './blog.html');

//Start of submit button
const submitButton = document.createElement('button');
submitButton.setAttribute('id', 'submit-button-css');
submitButton.textContent = 'Submit Button';

//Used append instead of appendChild so I could enter multiple nodes/elements

middleSectionLeftSide.append(middleLeftSideImage);

aside.append(
    questionEl,
    blogName,
    blogNameLabel,
    blogNameFormInputEl,
    blogTitle,
    blogTitleLabel,
    blogTitleFormInputEl,
    blogContent,
    blogContentLabel,
    blogContentFormInputEl,
    blogAnchorButtonTag
);

//Used to append the child "SubmitButton" to the anchor tage "blockAnchorButtonTag"
blogAnchorButtonTag.appendChild(submitButton);

submitButton.addEventListener('click', function () {
    let blogData = {
        objName: blogNameFormInputEl.value,
        objTitle: blogTitleFormInputEl.value,
        objContent: blogContentFormInputEl.value,
    };

    blogArray.push(blogData);

    // sends full array of all objects created to localStorage in Stringified form.
    localStorage.setItem('blogLocalStorage', JSON.stringify(blogArray));

    // blogNameFormInputEl.value = null;
    // blogTitleFormInputEl.value = null;
    // blogContentFormInputEl.value = null;
});
