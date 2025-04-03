const rectangle = {
width: 10,
height: 5,
getArea : function (width,height) {
    dt = width * height;
    console.log(dt);
}
};
console.log(rectangle);
rectangle.getArea(rectangle.width, rectangle.height) 