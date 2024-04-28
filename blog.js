let blogArrayFromLS = [];
const summary = document.getElementById('summary');
const navId = document.getElementById('navId');

blogArrayFromLS = JSON.parse(localStorage.getItem('blogLocalStorage'));

//Dynaically creates an "a" tag and button

const blogAnchorTag = document.createElement('a');
blogAnchorTag.setAttribute('href', './index.html');

const returnToIndexButton = document.createElement('button');
returnToIndexButton.setAttribute('id', 'returnToIndexButtonCss');
returnToIndexButton.textContent = 'Back';

navId.append(blogAnchorTag);
blogAnchorTag.appendChild(returnToIndexButton);

//Dynamically creates elements on blog.html

console.log('blogArray typeOf', typeof blogArrayFromLS);

blogArrayFromLS.forEach((element) => {
    const eachEntryDiv = document.createElement('div');
    const blogTitle = document.createElement('h3');
    const blogContent = document.createElement('h3');
    const blogName = document.createElement('h3');

    summary.append(eachEntryDiv);
    eachEntryDiv.appendChild(blogTitle);
    eachEntryDiv.appendChild(blogContent);
    eachEntryDiv.appendChild(blogName);

    eachEntryDiv.setAttribute('id', 'eachEntryDivId');
    blogTitle.setAttribute('id', 'blogTitleId');
    blogContent.setAttribute('id', 'blogContentId');
    blogName.setAttribute('id', 'blogNameId');

    console.log('Logging the object you can see the key value pairs', element);

    blogTitle.textContent = element.objName;
    blogContent.textContent = element.objTitle;
    blogName.textContent = element.objContent;
});
