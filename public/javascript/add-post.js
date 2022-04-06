async function newFormHandler(event) {
  event.preventDefault();
  console.log("button.click");
  const title = document.querySelector(".post-title").value;
  const post_text = document.querySelector(".post-text").value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      post_text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".post-submit")
  .addEventListener("click", newFormHandler);
