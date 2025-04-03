let students = [
    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature: 7 } },
    { name: "Hà Bích Ngọc", scores: { math: 3, english: 2, literature: 5 } },
    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature: 9 } }
  ];
  
  function tbscorestudent() {
    return students.filter(element => {return (element.scores.math + element.scores.english + element.scores.literature) / 3 >= 8;
    });
  }
  
  console.log(tbscorestudent());
  