import { blogPosts } from "../javascript/blogPosts.js";

const blogCardContainer = document.querySelector("#blog-cards-container");

blogPosts.forEach(post=>
{
    const blogCard = document.createElement("div");
    blogCard.classList.add("card");
    blogCard.setAttribute("data-id", post.id);

    const blogCardHTML  = `
    <a class="normal" href="/posts/readPost.html?slug=${post.slug}" data-link>
        <h2> ${post.title} </h2>
        <p> ${post.body.substring(0,100)} </p>
    </a>`;

    blogCard.innerHTML = blogCardHTML;
    blogCardContainer.appendChild(blogCard);
}
)
