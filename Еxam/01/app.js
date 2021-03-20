function solve() {

  const createButton = document.getElementsByClassName("btn create")[0];
  const posts = document

    .getElementsByClassName("site-content")[0]
    .getElementsByTagName("section")[0]

  createButton.addEventListener("click", (g) => {
    const author = document.getElementById("creator").value;
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const content = document.getElementById("content").value;

    g.target.type = "button";

    g.preventDefault();

    const artc = document.createElement("artc");
    const h1 = document.createElement("h1");

    h1.textContent = title;

    artc.appendChild(h1);
    const p1 = document.createElement("p");
    p1.textContent = "Category:";

    const str1 = document.createElement("strong");
    str1.textContent = category;
    p1.appendChild(str1);
    artc.appendChild(p1);

    const p2 = document.createElement("p");
    p2.textContent = "Creator:";
    const str2 = document.createElement("strong");

    str2.textContent = author;
    p2.appendChild(str2);
    artc.appendChild(p2);

    const p3 = document.createElement("p");
    p3.textContent = content;
    artc.appendChild(p3);

    const div = document.createElement("div");
    div.classList.add("buttons");

    const button1 = document.createElement("button");

    button1.textContent = "Delete";
    button1.className = "btn delete";
    button1.addEventListener("click", () => {
      artc.remove();
    });
    div.appendChild(button1);
    const button2 = document.createElement("button");
    button2.textContent = "Archive";
    button2.className = "btn archive";
    button2.addEventListener("click", () => {
      const ol = document
        .getElementsByClassName("archive-section")[0]
        .getElementsByTagName("ol")[0];
      const li = document.createElement("li");

      li.textContent = title;
      ol.appendChild(li);
      artc.remove();
      Array.from(ol.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach((e) => ol.appendChild(e));
    });

    div.appendChild(button2);

    artc.appendChild(div);

    posts.appendChild(artc);

  });

}
