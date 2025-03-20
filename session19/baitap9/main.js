// let result = “javascript” + 5; kết quả sẽ là javascript 5 vì dấu + trong trường hợp này là dùng để gán chuỗi
// let result = “javascript” - 1; kêt quả sẽ là NaN vì dấu _ trong trường hợp này là chỉ là toán tử trừ bình thường
// let result = “3” + 2; kêt quả sẽ là 32 dấu cộng dùng để nối chuỗi 
// let result = “5” - 4;  kết quả là 1 vì dấu trừ chỉ là toán tử bình thường
// let result =  isNaN( “123”); kết quả cho ra sẽ là sai vì  isNaN sẽ cố gắng ép kiểu chuỗi ký tự có phải NaN không vì 123 là Number khồn phải là NaN nên kết quả sai
// let result = isNaN(“hello”); kết quả đúng vì isNaN hello là không phải là số nên hello là NaN hợp lệ
// let result = Number.isNaN("123"); Number. isNaN sẽ không cố gắng ép kiểu để kiểm tra nên kết quả là sai
// let result = Number.isNaN(NaN);Number. isNaN sẽ không cố gắng ép kiểu để kiểm tra nên kết quả là đúng