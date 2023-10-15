AFRAME.registerComponent("markerhandler", {
    init: async function () {

      var toys = await this.getToys() //get from firestore
  
      this.el.addEventListener("markerFound", () => {
        console.log("marker found")
        this.handleMarkerFound();
      });
  
      this.el.addEventListener("markerLost", () => {
        console.log("marker lost")
        this.handleMarkerLost();
      });
    },
    handleMarkerFound: function () {
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "flex";
  
      var summaryButton = document.getElementById("summary-button");
      var orderButtton = document.getElementById("order-button");
  
      summaryButton.addEventListener("click", function () {
        swal({
          icon: "warning",
          title: "Order Summary",
          text: "Work In Progress"
        });
      });
  
      orderButtton.addEventListener("click", () => {
        swal({
          icon: "https://i.imgur.com/4NZ6uLY.jpg",
          title: "Thanks For Order!",
          text: "Your order will be delivered to your house!"
        });
      });

      var toy = toys.filter(toy => toy.id === markerID)[0]

      var model = document.querySelector(`#model-${dish.id}`)
      model.setAttribute("position", dish.model_geometry.postion)
      model.setAttribute("rotation", dish.medel_geometry.rotation)
      model.setAttribute("scale", dish.model_geometry.scale)
    },
  
    handleMarkerLost: function () {
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "none";
    },

    getToys: async function () {
      return await firebase
        .firestore()
        .collection("dishes")
        .get()
        .then(snap => {
          return snap.docs.map(doc => doc.data())
        })
    }
  });