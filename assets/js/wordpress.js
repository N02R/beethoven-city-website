function getSiteInfo() {
  fetch("http://127.0.0.1:8000/wp-json")
    .then(res => res.json())
    .then(data => {
      
      console.log("WordPress Data:", data);
      
      const title = document.getElementById("site-title");
      if (title) {
        title.textContent = data.name;
      }
      
    })
    .catch(err => {
      console.log("WP Error:", err);
    });
}