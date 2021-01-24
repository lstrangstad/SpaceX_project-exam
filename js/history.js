fetch("https://api.spacexdata.com/v3/history")
  .then((response) => response.json())
  .then((json) => historyContent(json))
  .catch((error) => console.log(error));

function historyContent(json) {
  const historyContainer = document.querySelector(".container");
  console.log(json);

  let html = "";

  json.forEach((result) => {
    let newDate = result.event_date_utc.slice(0, 10);
    html += ` 
    <div class="timeline">
      <span class="dot"></span>
      <div class="box">
        <div class="content">
          <div class="top-box">
            <h2>${newDate}</h2>
          </div>
          <h3>${result.title}</h3>
          <p>${result.details}</p>
            <div class="btn-container">
            <a class="button" href="${result.links.article}">More info</a>
          </div>
        </div>
      </div>
  </div>  
    `;
  });
  historyContainer.innerHTML = html;
}
