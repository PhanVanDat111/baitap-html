
let employee = JSON.parse(localStorage.getItem("employee")) || [];
    let currentPage = 0;
    const productCountPerPage = 5;

    const getTotalPages = () => Math.ceil(employee.length / productCountPerPage);

    const paginationProduct = (page) => {
      let start = page * productCountPerPage;
      let end = start + productCountPerPage;
      return employee.slice(start, end);
    };

    const renderList = (paginatedList) => {
      const tbody = document.getElementById("tbody");
      let html = "";
      paginatedList.forEach((item, index) => {
        html += `
          <tr>
            <td>${index + 1 + currentPage * productCountPerPage}</td>
            <td>${item.name}</td>
            <td>${item.position}</td>
          </tr>`;
      });
      tbody.innerHTML = html;
      renderPagination();
    };

    const renderPagination = () => {
      const totalPages = getTotalPages();
      let pageHTML = "";


      pageHTML += `<li class="page-item ${currentPage === 0 ? 'disabled' : ''}"><a href="#" onclick="prevPage(); return false;">Previous</a></li>`;


      for (let i = 0; i < totalPages; i++) {
        pageHTML += `<li class="page-item ${currentPage === i ? 'active' : ''}"><a href="#" onclick="goToPage(${i}); return false;">${i + 1}</a></li>`;
      }


      pageHTML += `<li class="page-item ${currentPage === totalPages - 1 ? 'disabled' : ''}"><a href="#" onclick="nextPage(); return false;">Next</a></li>`;

      document.getElementById("list-pagination").innerHTML = pageHTML;
    };

    const renderData = () => {
      const paginated = paginationProduct(currentPage);
      renderList(paginated);
    };

    const goToPage = (page) => {
      currentPage = page;
      renderData();
    };

    const nextPage = () => {
      if (currentPage < getTotalPages() - 1) {
        currentPage++;
        renderData();
      }
    };

    const prevPage = () => {
      if (currentPage > 0) {
        currentPage--;
        renderData();
      }
    };

    document.getElementById("addEmp").addEventListener("click", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const position = document.getElementById("position").value.trim();

      if (!name || !position) {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
      }

      employee.push({ name, position });
      localStorage.setItem("employee", JSON.stringify(employee));
      currentPage = getTotalPages() - 1; 
      renderData();
      document.getElementById("name").value = "";
      document.getElementById("position").value = "";
    });

    renderData();
