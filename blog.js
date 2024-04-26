let blogArrayFromLS = [];
const summary = document.getElementById('summary');

blogArrayFromLS = JSON.parse(localStorage.getItem('blogLocalStorage'));
console.log('here is the data from LS: ', blogArrayFromLS);

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
