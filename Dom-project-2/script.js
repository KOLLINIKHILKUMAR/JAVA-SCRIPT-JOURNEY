// What color beside the element

const red =  document.querySelector(".red");
const cyan =  document.querySelector(".cyan");
const violet =  document.querySelector(".violet");
const orange =  document.querySelector(".orange");
const pink =  document.querySelector(".pink");

const center = document.querySelector(".center");


// console.log(window.getComputedStyle(red).backgroundColor);

const getColor = (selectedelement) => { return window.getComputedStyle(selectedelement).background;}

// var COLOR = getColor(pink);

const getBGColor = (selectedelement) => { return window.getComputedStyle(selectedelement).background;}

// var BGCOLOR = getBGColor(center);

const magiccolorchanger = (element,COLOR,BGCOLOR) => {
element.addEventListener("mouseenter", () => { center.style.background=COLOR; setTimeout( () => { center.style.background=BGCOLOR; },1000); });
};

magiccolorchanger(red,getColor(red),getBGColor(center));
magiccolorchanger(cyan,getColor(cyan),getBGColor(center));
magiccolorchanger(violet,getColor(violet),getBGColor(center));
magiccolorchanger(orange,getColor(orange),getBGColor(center));
magiccolorchanger(pink,getColor(pink),getBGColor(center));















