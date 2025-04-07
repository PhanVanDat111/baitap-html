let products = [{
    id: 1,

    name: "Cà phê Arabica Đà Lạt",

    price: 150000,

    category: "Cà phê hạt",

    quantity: 50

},

{

    id: 2,

    name: "Cà phê Robusta Buôn Ma Thuột",

    price: 120000,

    category: "Cà phê hạt",

    quantity: 40

},

{

    id: 3,

    name: "Cà phê rang xay đặc biệt",

    price: 180000,

    category: "Cà phê bột",

    quantity: 30

},

{

    id: 4,

    name: "Máy pha cà phê Espresso",

    price: 2500000,

    category: "Máy pha cà phê",

    quantity: 10

},

{

    id: 5,

    name: "Phin pha cà phê inox",

    price: 50000,

    category: "Phụ kiện",

    quantity: 100

}

];


function addProduct() {

let newProduct = {

    id: Number(prompt("Mời nhập vào id sản phẩm")),

    name: prompt("Mời nhập tên sản phẩm"),

    price: Number(prompt("Mời nhập giá sản phẩm")),

    category: prompt("Mời nhập danh mục sản phẩm"),

    quantity: Number(prompt("Mời nhập số lượng sản phẩm"))

};

products.push(newProduct);

alert("Thêm sản phẩm mới thành công!");

}


function showListProduct() {

console.table(products);

}


function showDetailProductbyId() {

let inputId = Number(prompt("Mời nhập vào ID cần tìm"));

let c = products.find((c) => c.id === inputId);

console.log(

    `Thông tin chi tiết của sản phẩm:\nTên: ${c.name}\nGiá: ${c.price}\nDanh mục: ${c.category}\nSố lượng: ${c.quantity}`

);

}


function updateProductById() {

let inputId = Number(prompt("Nhập id sản phẩm cần cập nhật"));

let c = products.find((c) => c.id === inputId);

c.name = prompt("Nhập tên mới của sản phẩm");

c.price = Number(prompt("Mời nhập giá mới"));

c.category = prompt("Mời nhập danh mục sản phẩm");

c.quantity = Number(prompt("Mời nhập số lượng sản phẩm"));

alert("Thay đổi thông tin thành công");

}


function deleteProductById() {

let inputId = Number(prompt("Mời nhập vào id cần xóa"));

products = products.filter((c) => c.id !== inputId);

alert("Xóa sản phẩm thành công");

}


function filterProductsByPriceRange() {

let initialPrice = Number(prompt("Mời nhập vào giá thấp nhất bạn muốn mua"));

let finalPrice = Number(prompt("Mời nhập vào giá tối đa bạn có thể chi trả"));

let filterProduct = products.filter((product) => product.price >= initialPrice && product.price <=

    finalPrice);

console.table(filterProduct);

}


function main() {

let running = true;

while (running) {

    let choice = Number(prompt(

        "Mời nhập chức năng:\n1. Thêm sản phẩm\n2. Hiển thị tất cả sản phẩm\n3. Hiển thị chi tiết sản phẩm theo id\n4. Cập nhật thông tin sản phẩm theo id\n5. Xóa sản phẩm theo id\n6. Lọc sản phẩm theo khoảng giá\n7. Thoát"

    ));

    switch (choice) {

        case 1:

            addProduct();

            break;

        case 2:

            showListProduct();

            break;

        case 3:

            showDetailProductbyId();

            break;

        case 4:

            updateProductById();

            break;

        case 5:

            deleteProductById();

            break;

        case 6:

            filterProductsByPriceRange();

            break;

        case 7:

            running = false;

            break;

    }

}

}


main();
