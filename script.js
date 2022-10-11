
   
var res = fetch("https://restcountries.com/v3.1/all");
res.then((data) => data.json())
  .then((data1) => foo(data1));


function foo(data1) {
  for (var i = 0; i <= data1.length; i++) {
    console.log(data1[i]);
    var div = document.createElement("div");
    //div.innerHTML=`${data1[i]}`;
    div.innerHTML =

      `<div class="card-group">
              <div class="card">
               <div><img src="${data1[i].flags.svg}" alt="..."></div>
                  <div class="card-body">
                    <h5 class="card-title">${data1[i].name.common}</h5>
                    <h6 class="region">region:${data1[i].region}</h6>
                    <p class="card-text">capital:${data1[i].capital}</p>
                    <p class="card-text">latitude:${data1[i].latlng[0]}</p>
                    <p class="card-text">longitude:${data1[i].latlng[1]}</p>
                    <p class="card-text">country code:${data1[i].cca3}</p>
                    <button type="submit">click for weather</button>
                  </div>
              </div>
            </div>`
    document.body.append(div);
  }
}

// var res=fetch("https://restcountries.com/v3.1/all");
// res.then((data)=>data.json())
// .then((data1)=>foo(data1));
// function foo(data1){
//     for(var i in data1){
//    console.log(i,data1[i]);
//       var div=document.createElement("div");
//       div.innerHTML=`<div class="container">
//             <div class="row">
//               <div class="col-md-4">
//                   <div class="box-part text-left">   
//                     <img src="${data1[i].flags.svg}" width="200" "height=300">                   
//                       <h2 class="card-title">${data1[i].name.common}</h2>
//                       <p class="card-text">Region: ${data1[i].region}</p>
//                       <p class="card-text">Capital: ${data1[i].capital}</p>
//                       <p class="card-text">Latitude: ${data1[i].latlng[0]}</p>
//                       <p class="card-text">Longitude: ${data1[i].latlng[1]}</p>
//                       <p class="card-text">Country code: ${data1[i].cca3}</p>
                      
//                       <button onclick="myfunction(data1)">Click for weather</button>
//                       <div class="clearfix"></div>
//                     </div>                
//               </div>
//             </div>       
//       </div>`
     
//       document.body.append(div);
//     }
// }

// var res1=fetch("https://openweathermap.org/");
// res1.then((data)=>data.json())
// .then((data1)=>myfunction(data1));
// function myfunction(data1)
// { 
    
//     var div=document.createElement("div");
//     div.innerHTML=`<div class="box"></div>`



// }


            
