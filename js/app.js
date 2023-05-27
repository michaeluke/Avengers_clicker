var thumbnails = document.getElementById("thumbnails");
var main = document.getElementById("main_avenger");
var count = document.createElement("div")
var counter = 0;
//model

model = {

current_avenger : null,
counter_main : 0,


avengers:[
  
{

  id:1,
  name:"iron man",
  img:"./images/ironman.png",
  //counter: counter_main

},


{
  id:2,
  name:"thor",
  img:"./images/thor.png",
 // counter:counter_main
},



{
  id:3,
  name:"hulk",
  img:"./images/hulk.png",
  //counter:counter_main
},

]
}



//view
view = {


  init: function(item){ 
    
    thumbnails.append(item)
    
    
  },

  render: function(img,name){


  //old image
  var old_image =  main.getElementsByTagName("img")[0];
  //remove it
  old_image.remove();
  //append new selected image
  main.prepend(name);
  main.prepend(img);
  
  
  }
}


//controller
contorller = {

  init: function(){
    
$("#form").hide();
$("#admin").bind('click',function(e){
  e.preventDefault();

  $("#form").show();
})

$("#cancel").bind('click',function(e){

  e.preventDefault();
  $("#form").hide();
})

$("#save").bind('click',function(e){

  var name = $("#name_avg").val();
  var count_num = $("#count_avg").val();


  contorller.change_avenger_data(name,count_num);

  e.preventDefault();
  debugger
  $("#form").hide();
})

    if(model.avengers.length !=0 && model.avengers.current_avenger == null){

      for(var i=0 ; i<model.avengers.length; i++){

        item = document.createElement("img");
        item.src = model.avengers[i].img;
        item.setAttribute("avenger_name",model.avengers[i].name);
        item.style.cursor ="pointer";
        item.addEventListener('click',this.add_avenger,this.counter_fn)
        view.init(item);
      }
  
      //initialize main avenger 
      avenger = document.createElement("img");
      avenger.src = model.avengers[0].img;
      avenger.classList.add("main__avenger")
      avenger.style.cursor = "pointer"

      

      var name = document.createElement("div");
      name.id= "name";
      name.innerText = model.avengers[0].name;

      count.innerText= counter;
      count.id = "counter_main"





      main.append(avenger,name,count)


      
      avenger.addEventListener('click',this.increment_counter)

     
 
      
    }
   
  },

  add_avenger: function(e){

    var x = e.target;
    
    for(var i =0 ;i<model.avengers.length; i++){

      
      if(e.target.getAttribute("avenger_name") == model.avengers[i].name){
      
        
        selected_avenger = document.createElement("img")
        //set the selected avenger image.
        selected_avenger.src = model.avengers[i].img;
        selected_avenger.style.cursor = "pointer";
        selected_avenger.classList.add("main__avenger");
        contorller.counter_reset();

        var name = document.getElementById("name");
        name.innerText = model.avengers[i].name

        selected_avenger.addEventListener('click',contorller.increment_counter)
        view.render(selected_avenger,name);
        
   
       }

       

    }
    

   

  },


  counter_reset: function(){
    counter = 0;
    var c = document.getElementById("counter_main");
    c.innerText =  counter;
    debugger
  },

  increment_counter: function(){
    debugger

    var c = document.getElementById("counter_main");
    

    
    counter++

     c.innerText =  counter;
     debugger
     //re-render changes

    
    },


  change_avenger_data: function(name,countnum){
    $("#name").text(name);
    $("#counter_main").text(countnum)

    counter = countnum;
    debugger

  },

  
  }




document.addEventListener("DOMContentLoaded", () => {


contorller.init();


});

