const middleSectionLeftSide = document.getElementById('middleSectionLeftSide');




//Image (middle section left-side):
middleLeftSideImage = document.createElement('img');
middleLeftSideImage.setAttribute('src', './MyFirstBlog-resized.png');
middleLeftSideImage.setAttribute('id', 'middleLeftSideImageCss');


const changeToDarkModeButton = document.getElementById(
    'changeToDarkModeButton'
);
changeToDarkModeButton.addEventListener('click', function () {
    let element = document.body;
    element.classList.toggle('darkMode');
});
