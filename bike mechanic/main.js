
  const vehicleModels = {
    bajaj: ["CT 100", "Platina 110 H Gear", "Platina 110", "Platina 100", "Pulsar 125","Pulsar 150","Pulsar 180","Pulsar 220","Pulsar 250","Pulsar NS125","Pulsar NS160","Pulsar NS200","Pulsar NS250","Pulsar NS250","Avenger 220","Avenger 160","Avenger 150","Discover 100","Discover 125","Discover 150"],
    hero: ["Glamour", "Destini 125", "Maestro","Pleasure","Duet","HF 100","HF Deluxe","Super Splendor","Passion","Splendor","Splendor iSmart","Xtream 200","CBZ","Xtream 160"],
    honda: ["Grazia", "Dio", "Activa","Activa 125","CD 110","Livo","Twister","Trigger","Unicorn","X-Blade","Shine","Dream Yoga","Hornet","Stunner","Aviator"],
    tvs: ["Jupiter", "Apache 160", "Raider","Radeon","NTORQ 125","Scooty Pep Plus","Star City Plus","Sport","Apache RTR 180","Apache RTR 200","Scooty Zest"],
    suzuki: ["Access 125", "New Access 125", "Gixxer","Gixxer SF","Avenis 125","Swish"],
    yamaha: ["FZ-FI", "FZ-S FI", "Fascino 125","FZ 25","MT-15","R15","RAYZ"],
    royal_Enfield: ["Bullet 350", "Classic 350", "Classic 500","Meteor 350","Thunderbird 350","Thunderbird 500",""],
  };
  
  const brandDropdown = document.getElementById("vehicle-brand");
  const modelDropdown = document.getElementById("vehicle-model");
  
  brandDropdown.addEventListener("change", () => {
    const selectedBrand = brandDropdown.value;
    modelDropdown.innerHTML = "<option value=''>--Select--</option>"; // reset options
    if (selectedBrand) {
      vehicleModels[selectedBrand].forEach((model) => {
        const option = document.createElement("option");
        option.value = model;
        option.textContent = model;
        modelDropdown.appendChild(option);
      });
      modelDropdown.style.display = "block"; // show model dropdown
    } else {
      modelDropdown.style.display = "none"; // hide model dropdown
    }
  });


  var coll = document.getElementsByClassName("collap");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("actived");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


