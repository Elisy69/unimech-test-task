const tbody = document.querySelector(".table-body");
const table = document.querySelector(".postsTable");
const searchedValue = document.querySelector(".searchInput");
let posts = [];
let sortState = {};

async function getPosts() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Fetch failed");
    }
    posts = await res.json();
    renderPosts(posts);
  } catch (error) {
    console.log("Fetch failed", error);
  }
}

function renderPosts(data) {
  tbody.innerHTML = "";
  data.forEach((post) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${post.userId}</td>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
        `;
    tbody.appendChild(row);
  });
}

function sortPosts(column) {
  if (sortState[column] === undefined) {
    sortState[column] = false;
  }
  if (sortState[column] === false) {
    console.log(sortState[column]);
    posts.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];
      return typeof valueA === "string"
        ? valueA.localeCompare(valueB)
        : valueA - valueB;
    });
    sortState[column] = !sortState[column];
  } else {
    posts.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];
      return typeof valueA === "string"
        ? valueB.localeCompare(valueA)
        : valueB - valueA;
    });
    sortState[column] = !sortState[column];
  }

  renderPosts(posts);
}

function filterPosts(searchText) {
  const filteredData = posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchText.toLowerCase()) ||
      post.body.toLowerCase().includes(searchText.toLowerCase())
    );
  });
  renderPosts(filteredData);
}

searchedValue.addEventListener("input", () => {
  const searchText = searchedValue.value.trim();
  if (searchText.length >= 3) {
    filterPosts(searchText);
  } else {
    renderPosts(posts);
  }
});

table.addEventListener("click", (e) => {
  if (e.target.tagName === "TH") {
    const column = e.target.getAttribute("data-column");
    sortPosts(column);
  }
});

getPosts();
