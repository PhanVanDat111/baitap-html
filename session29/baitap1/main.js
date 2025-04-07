
        let contact = [{
                id: 1381,
                name: "phan Van datdat",
                email: "mtung3365@gmail.com",
                phone: "0987654321"
            },
            {
                id: 1382,
                name: "Nguyễn Văn A",
                email: "vana@gmail.com",
                phone: "0987654322"
            },
            {
                id: 1383,
                name: "Nguyễn Văn B",
                email: "vanb@gmail.com",
                phone: "0987654323"
            }
        ];

        function addContact() {
            let newContact = {
                id: Number(prompt("Nhập id của contact")),
                name: prompt("Nhập tên của contact"),
                email: prompt("Nhập email của contact"),
                phone: prompt("Nhập số điện thoại của contact")
            };
            contact.push(newContact);
            alert("Đã thêm contact thành công!");
        }

        function showlistContact() {
            console.table(contact);
        }

        function findContactByPhone() {
            let inputPhone = prompt("Nhập số điện thoại cần tìm").trim();
            let c = contact.find((c) => c.phone === inputPhone);
            console.log(
                `Thông tin chủ nhân số điện thoại:\nHọ và tên: ${c.name}\nSố điện thoại: ${c.phone}\nEmail: ${c.email}`
            );
        }

        function updateContactById() {
            let inputId = Number(prompt("Nhập id contact cần cập nhật"));
            let c = contact.find((c) => c.id === inputId);
            c.name = prompt("Nhập tên mới của contact").trim();
            c.email = prompt("Nhập email mới của contact").trim();
            c.phone = prompt("Nhập số điện thoại mới của contact").trim();
            alert("Thay đổi thông tin thành công");
        }

        function deleteContactById() {
            let inputId = Number(prompt("Nhập id contact cần xóa"));
            contact = contact.filter((c) => c.id !== inputId);
            alert("Đã xóa thành công!");
        }

        function main() {
            let running = true;
            while (running) {
                let choice = Number(prompt(
                    "Mời bạn chọn chức năng:\n1. Thêm contact\n2. Hiện danh sách contact\n3. Tìm contact theo số điện thoại\n4. Cập nhật thông tin của contact theo id\n5. Xóa contact theo id\n6. Thoát chương trình"
                ));
                switch (choice) {
                    case 1:
                        addContact();
                        break;
                    case 2:
                        showlistContact();
                        break;
                    case 3:
                        findContactByPhone();
                        break;
                    case 4:
                        updateContactById();
                        break;
                    case 5:
                        deleteContactById();
                        break;
                    case 6:
                        running = false;
                        break;
                }
            }
        }

        main();
 

