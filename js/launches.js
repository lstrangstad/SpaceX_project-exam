fetch("https://api.spacexdata.com/v3/launches/upcoming/")
  .then((response) => response.json())
  .then((json) => nextLaunchesInfo(json))
  .catch((error) => console.log(error));

function nextLaunchesInfo(json) {
  console.log(json);

  let html = "";

  const nextLaunchesContainer = document.querySelector(".upcoming-container");

  json.slice(1).forEach((result) => {
    let manufacturerUnknown = "Unknown";
    if (result.rocket.second_stage.payloads[0].manufacturer) {
      manufacturerUnknown = result.rocket.second_stage.payloads[0].manufacturer;
    }

    let ifNoPatch = "images/patch_coming_soon.png";
    if (result.links.mission_patch) {
      ifNoPatch = result.links.mission_patch;
    }
    html += `
    <div class="card" id="next-info">
        <div class="patch">
          <img src="${ifNoPatch}" alt="Mission patch">
         <p>Mission patch</p>
        </div>
        <div class="card-info">
        <p class="headers">Mission name</p>
        <p class="fact">${result.mission_name}</p>
        <p class="headers">Launch date</p>
        <p class="fact">${result.launch_date_local}</p>
        <p class="headers">Rocket name</p>
        <p class="fact">${result.rocket.rocket_name}</p>
        <p class="headers">Nationality</p>
        <p class="fact">${result.rocket.second_stage.payloads[0].nationality}</p>
        <p class="headers" id="manufacturer">Manufacturer</p>
        <p class="fact">${manufacturerUnknown}</p>
        <p class="headers">Payload type</p>
        <p class="fact">${result.rocket.second_stage.payloads[0].payload_type}</p>
        <p class="headers">Orbit</p>
        <p class="fact">${result.rocket.second_stage.payloads[0].orbit}</p>
        <p class="headers">Launch site</p>
        <p class="fact">${result.launch_site.site_name}</p>
        </div>
      </div>`;
  });
  nextLaunchesContainer.innerHTML = html;
}

fetch("https://api.spacexdata.com/v3/launches/past")
  .then((response) => response.json())
  .then((data) => pastLaunchesInfo(data))
  .catch((error) => console.log(error));

function pastLaunchesInfo(data) {
  let reversedData = data.slice(79).reverse();

  let html = "";

  const pastLaunchesContainer = document.querySelector(".past-container");

  reversedData.forEach((result) => {
    html += `
    <div class="card" id="past-info">
        <div class="patch">
          <img src="${result.links.mission_patch}" alt="Mission patch">
          <p>Mission patch</p>
        </div>
        <div class="card-info">
        <p class="headers">Mission name</p>
        <p class="fact">${result.mission_name}</p>
        <p class="headers">Launch date</p>
        <p class="fact">${result.launch_date_local}</p>
        <p class="headers">Rocket name</p>
        <p class="fact">${result.rocket.rocket_name}</p>
        <p class="headers">Nationality</p>
        <p class="fact">${result.rocket.second_stage.payloads[0].nationality}</p>
        <p class="headers" id="manufacturer">Manufacturer</p>
        <p class="fact">${result.rocket.second_stage.payloads[0].manufacturer}</p>
        <p class="headers">Payload type</p>
        <p class="fact">${result.rocket.second_stage.payloads[0].payload_type}</p>
        <p class="headers">Orbit</p>
        <p class="fact">${result.rocket.second_stage.payloads[0].orbit}</p>
        <p class="headers">Launch site</p>
        <p class="fact">${result.launch_site.site_name}</p>
        </div>
      </div>`;
  });
  pastLaunchesContainer.innerHTML = html;
}
