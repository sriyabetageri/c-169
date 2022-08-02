AFRAME.registerComponent("markerHandler",{
 init: async function(){
this.el.addEventListner("markerFound",()=>{
    console.log("marker is found")
    this.handleMarkerFound();
});
this.el.addEventListner("markerLost",()=>{
    console.log("marker is lost")
    this.handleMarkerLost();
})

 },
 handleMarkerFound(){
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "flex";

    var ratingButton = document.getElementById("rating-button")
    var orderButton = document.getElementById("order-button")

    //handling click events

    ratingButton.addEventListener("click",function(){
        swal({
            icon: "warning",
            title:"rate dish",
            text:"work in progress"
        })
    });

    orderButton.addEventListener("click",function(){
        swal({
            icon: "https://i.imgur.com/4NZ6uLY.jpg",
            title:"Thanks for ordering!",
            text:"your order will be served at your table shortly"
        })

    });



 },

 handleMarkerLost(){
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
 },
})