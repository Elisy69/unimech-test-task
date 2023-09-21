const tbody = document.querySelector(".table-body");

async function getPosts() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Fetch failed");
    }
    let data = await res.json();
    renderPosts(data);
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

getPosts();
