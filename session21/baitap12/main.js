	//Hien thi dialog -> cho phep nhap gia tri cua N
	var N = prompt('Nhap gia tri N')
	//Chuyen kieu du lieu cua N tu string toi int
	N = parseInt(N)
	//xay dung do cao cua hinh tam giac
	for(i=0;i<N;i++) {
		//tao hang (row) *
		for(j=0;j<=i;j++) {
			document.writeln(" * ")
		}

		//xuong dong khi hien thi ket qua cua tung hang
		document.writeln("<br/>")
	}