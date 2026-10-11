import { blogPosts } from "./blogPosts.js";

// Look check the URL for the slug and search for that slug in the database
const URLparameters = new URLSearchParams(window.location.search);
const searchedSlug = URLparameters.get("slug");
const blogPost = blogPosts.find((post) => post.slug === searchedSlug);
const blogPostContainer = document.querySelector("#blogPost")

// Format found data on page
if (!blogPost)
{ // Error message if erroneous slug
    console.error("Searched slug not found.");
    blogPostContainer.innerHTML = `<p>This post does not exist.</p>`
}
else
{ // Output wanted info
    const blogPostHTML = `
    <h1>${blogPost.title}</h1>
    <p>${blogPost.body}</p> `;

    blogPostContainer.innerHTML = blogPostHTML;
}