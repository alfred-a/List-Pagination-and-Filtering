// Global variables
const lists = document.querySelectorAll(".student-item");
const numberPerPage = 10;

// Function to dislay 10 students per page

const showPage = (list, page) => {
  let pageStart = page * numberPerPage - numberPerPage;
  let pageEnd = page * numberPerPage;

  for (let i = 0; i < list.length; i++) {
    if (i >= pageStart && i < pageEnd) {
      list[i].style.display = "block";
    } else {
      list[i].style.display = "none";
    }
  }
};

// Function to create tags to be appended

const appendPageLinks = list => {
  let numberOfPages = Math.ceil(list.length / numberPerPage);

  const div = document.createElement("div");
  div.className = "pagination";
  document.querySelector(".page").appendChild(div);
  const ul = document.createElement("ul");
  div.appendChild(ul);

  for (let i = 0; i < numberOfPages; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = `${i + 1}`;

    if (i === 0) {
      a.className = "active";
    }
    ul.appendChild(li);
    li.appendChild(a);
  }

  // Click listener

  ul.addEventListener("click", e => {
    const link = e.target;
    if (link.tagName === "A") {
      pageNumber = e.target.textContent;
      const clicked = document.querySelectorAll(".pagination a");

      for (let i = 0; i < clicked.length; i++) {
        clicked[i].classList.remove("active");
      }
      link.className = "active";
    }
    showPage(lists, pageNumber);
  });
};

appendPageLinks(lists);
showPage(lists, 1);
