fetch("http://127.0.0.1:8000/wp-json")
  .then(r => r.text())
  .then(data => {
    document.body.innerHTML += `
      <div style="position:fixed;bottom:0;left:0;background:green;color:white;padding:10px;z-index:9999">
        CONNECTED ✔
      </div>
    `;
  })
  .catch(err => {
    document.body.innerHTML += `
      <div style="position:fixed;bottom:0;left:0;background:red;color:white;padding:10px;z-index:9999">
        ERROR ❌
      </div>
    `;
  });