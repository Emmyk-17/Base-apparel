# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![alt text](Mobile-view.png) 
![alt text](Desktop-view.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Emmyk-17/Base-apparel)
- Live Site URL: [Add live site URL here](https://emmyk-17.github.io/Base-apparel/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned


```css
.pic {
        width: 100%;
        padding-top: 45%;
        background: url(images/hero-desktop.jpg) no-repeat center;
        background-size: cover;
    }
```
```js
if(input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
   submit.style.setProperty("--beforeDisplay","none")
}
```


### Continued development

- CSS custom properties


### Useful resources

- [Example resource 1](https://www.youtube.com) - This helped me for the javascript. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.W3school.com) - This is an amazing article which helped me finally understand styling and organizing the elements in the page. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Emmanuel](https://github.com/Emmyk-17)
- Frontend Mentor - [@Emmyk-17](https://www.frontendmentor.io/profile/Emmyk-17)