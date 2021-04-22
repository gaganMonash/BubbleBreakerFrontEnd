
var password="";
var s =""; 
const firebaseConfig = {
    apiKey: "AIzaSyDqh6OXXtetcybxeFNPOU5see_yue0b9lg",
    authDomain: "bubblebreaker-eb404.firebaseapp.com",
    projectId: "bubblebreaker-eb404",
    storageBucket: "bubblebreaker-eb404.appspot.com",
    messagingSenderId: "22510277361",
    appId: "1:22510277361:web:2361c6c3dd60bfe7f70f50",
    measurementId: "G-7C2TEGPKV0"
  };
  
  firebase.initializeApp(firebaseConfig);
  let cloudDB=firebase.firestore();
  
  function retrieve()
  {
 


    var docRef = cloudDB.collection("news").doc("https:||bestinau.com.au|5-content-marketing-tactics-that-will-help-you-win-in-2021|");
  
  docRef.get().then((doc) => {
      if (doc.exists) {
          console.log("Document data:", doc.data());
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
  }
  
  function retrieveLatestNews()
  {
      
    cloudDB.collection("news").orderBy('date', "desc").limit(9).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const data= doc.data();
            console.log(data.url)
            console.log(doc.id, " => ", doc.data());

            //---------------

        //     <div class="div-block-8">
        //     <a href="news-page.html" class="link-block-5 w-inline-block">
        //       <div class="text-block-35">Melbourne Storm&#x27;s consistency remains, winning another NRL season opener even without Cameron Smith</div>
        //     </a>
        //     <div class="columns-23 w-row">
        //       <div class="column-14 w-col w-col-4">
        //         <h6 class="heading-35">News Source</h6>
        //       </div>
        //       <div class="column-15 w-col w-col-4">
        //         <h6 class="heading-36">Date &amp; time</h6>
        //       </div>
        //       <div class="column-16 w-col w-col-4">
        //         <h6 class="heading-37">SENTIMENT</h6>
        //       </div>
        //     </div>
        //   </div>
            
            
    
   
    var div = document.createElement("DIV");
    div.setAttribute('class',"div-block-8");
    //div.setAttribute('background-image',data.top_image);
   

    
  // Anchor
    var link = document.createElement("A");
    link.setAttribute('class',"link-block-5 w-inline-block");
    id= doc.id.toString();
    
    link.setAttribute('href','news-page.html?url=' + doc.id.replaceAll("&","**"));
    link.setAttribute('data-w-id','883a83c1-1417-c7d1-156c-a275a7fd899d')
    link.style.backgroundImage = "url('"+data.top_image +"')";
    link.style.backgroundSize = "contain";
    
    



    // var image = document.createElement("IMG")
    // image.setAttribute('src',data.top_image)

    // link.appendChild(image);



// Text
    var div1 = document.createElement("DIV")
    div1.setAttribute('class',"text-block-35");
    div1.textContent=data.title.substr(0,60);

 
    link.appendChild(div1);

    var divFoot = document.createElement("DIV")
    divFoot.setAttribute('class',"columns-18 w-row");

// Source

var source=""; 
var url=String(doc.id);
console.log("Determining source")
console.log(url)
if(url.includes("9news"))
{
source="9 News";
}  
else if(url.includes("theage"))
{
    source="The Age";

}
else if(url.includes("news.com"))
{
    source="NEWS.com";

}
else if(url.includes("guardian"))
{
    source="Guardian";

}
else if(url.includes("bestin"))
{
    source="bestInAustralia";

}
else if(url.includes("uq"))
{
    source="Uni. Queensland";

}
else{
    source=data.source;
}
    var div2 = document.createElement("DIV")
    div2.setAttribute('class'," w-col w-col-4");
   

    var div2_1 = document.createElement("DIV")
    div2_1.setAttribute('class',"text-block-37");
    div2_1.textContent=source;
    
            div2.appendChild(div2_1);


    //Date 

    var div3 = document.createElement("DIV")
    div3.setAttribute('class'," w-col w-col-4");
   

    var div3_1 = document.createElement("DIV")
    div3_1.setAttribute('class',"text-block-37");
    div3_1.textContent=data.published;
    
            div3.appendChild(div3_1);

// Sentiment
            
    var div4 = document.createElement("DIV")
    div4.setAttribute('class',"w-col w-col-4");
   

    var div4_1 = document.createElement("DIV")
    div4_1.setAttribute('class',"text-block-37");
    div4_1.textContent=data.sentiment ;
    
            div4.appendChild(div4_1);


            
divFoot.appendChild(div2);
divFoot.appendChild(div3);
divFoot.appendChild(div4);
link.appendChild(divFoot);
div.appendChild(link);

 

     document.getElementById("Latest").appendChild(div);
            //--------------



        });



    });
}       
    
function getSourceCount()
{
    var docRef = cloudDB.collection("stats").doc("source");
  
    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            const data= doc.data();
                
           var obj= document.getElementById("source-9news")
            obj.textContent = 321;
            animateValue(obj, 0,obj.textContent , 5000);

            var obj= document.getElementById("source-guardian")
            obj.textContent = data.guardian;
            animateValue(obj, 0,obj.textContent , 5000);

            var obj= document.getElementById("source-bia")
            obj.textContent = data.bestInAustralia;
            animateValue(obj, 0,obj.textContent , 5000);

            var obj= document.getElementById("source-sbs")
            obj.textContent = data.sbs;
            animateValue(obj, 0,obj.textContent , 5000);
            var obj= document.getElementById("source-Dailytelegraph")
            obj.textContent = data.Dailytelegraph;
            animateValue(obj, 0,obj.textContent , 5000);


            var obj= document.getElementById("source-uq")
            obj.textContent = data.uq;
            animateValue(obj, 0,obj.textContent , 5000);


           
            




        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

   





    }

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          obj.innerHTML = Math.floor(progress * (end - start) + start);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }
      
     
      function sortBy(arr, prop) {
        return arr.sort((a, b) => a[prop] - b[prop]);
      }
      
    
    
         
function getKeyword()
{


    
    var docRef = cloudDB.collection("stats").doc("tags");
    var keywordArray=new Array();
   
    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            const tags=doc.data();
            for (const property in tags) {
                //  console.log(`${property}: ${tags[property]}`);
                var keywordMap=new Map();
                if(`${tags[property]}`>10)
                {
                keywordMap.set("name",`${property}`);
                keywordMap.set("count",`${tags[property]}`);
                keywordArray.push(keywordMap);
                }
              }
          
             console.log(keywordArray)
            // keywordArray.sort((a, b) => {
            //     return a.count - b.count;
            // });
            // console.log("After Sorting")  
            // keywordArray.forEach((e) => {
            //     console.log(`${e.count}`);
            // });


        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

   





    }


// The Guardian
function retrieveDocument_Guardian()
{
    
  cloudDB.collection("news").limit(3).where("source", "==", "guardian").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          const data= doc.data();
          console.log("---------------------guardian")
          console.log(data.url)
          console.log(doc.id, " => ", doc.data());

          //----------------
          
        //   <li>
        //           <figure class="bsbig_fig"> <a href="pages/single_page.html" class="featured_img"> <img alt="" src="images/featured_img1.jpg"> <span class="overlay"></span> </a>
        //             <figcaption> <a href="pages/single_page.html">Proin rhoncus consequat nisl eu ornare mauris</a> </figcaption>
        //             <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a phare...</p>
        //           </figure>
        //         </li>
  var node = document.createElement("LI");
 
  var div = document.createElement("DIV");
  div.setAttribute('class',"media wow fadeInDown");
  

  var link = document.createElement("A");
  link.setAttribute('class',"media-left");
  link.setAttribute('href','pages/single_page.html?url=' + doc.id);

 var image = document.createElement("IMG")
  image.setAttribute('src',data.top_image)

   var div1 = document.createElement("DIV")
   div1.setAttribute('class',"media-body");
   var link1 = document.createElement("A");
   link1.setAttribute('class',"catg_title");
   link1.setAttribute('href','pages/single_page.html?url=' + doc.id);
  link1.textContent=data.title
     
  var image_src = document.createElement("H5")
  image_src.textContent="The Guardian"
  div1.appendChild(image_src)
  div1.appendChild(link1)



 link.appendChild(image)
 div.appendChild(link)
 div.appendChild(div1)
 
  node.appendChild(div)
   document.getElementById("The Guardian").appendChild(node);
          //--------------



      });



  });
}  

   
// The Guardian
function retrieveDocument_SBS()
{
    
  cloudDB.collection("news").limit(3).where("source", "==", "sbs").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          const data= doc.data();
          console.log("---------------------guardian")
          console.log(data.url)
          console.log(doc.id, " => ", doc.data());

          //----------------
          
        //   <li>
        //           <figure class="bsbig_fig"> <a href="pages/single_page.html" class="featured_img"> <img alt="" src="images/featured_img1.jpg"> <span class="overlay"></span> </a>
        //             <figcaption> <a href="pages/single_page.html">Proin rhoncus consequat nisl eu ornare mauris</a> </figcaption>
        //             <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a phare...</p>
        //           </figure>
        //         </li>
  var node = document.createElement("LI");
 
  var div = document.createElement("DIV");
  div.setAttribute('class',"media wow fadeInDown");
  

  var link = document.createElement("A");
  link.setAttribute('class',"media-left");
  link.setAttribute('href','pages/single_page.html?url=' + doc.id);

 var image = document.createElement("IMG")
  image.setAttribute('src',data.top_image)

   var div1 = document.createElement("DIV")
   div1.setAttribute('class',"media-body");
   var link1 = document.createElement("A");
   link1.setAttribute('class',"catg_title");
   link1.setAttribute('href','pages/single_page.html?url=' + doc.id);
  link1.textContent=data.title
     
  var image_src = document.createElement("H5")
  image_src.textContent="SBS NEWS"
  div1.appendChild(image_src)
  div1.appendChild(link1)



 link.appendChild(image)
 div.appendChild(link)
 div.appendChild(div1)
 
  node.appendChild(div)
   document.getElementById("SBS").appendChild(node);
          //--------------



      });



  });
}  

//Nine
function retrieveDocument_Nine()
{
    
  cloudDB.collection("news").limit(3).where("source", "==", "9news").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          const data= doc.data();
          console.log("---------------------9 news")
          console.log(data.url)
          console.log(doc.id, " => ", doc.data());

          //----------------
          
        //   <li>
        //           <figure class="bsbig_fig"> <a href="pages/single_page.html" class="featured_img"> <img alt="" src="images/featured_img1.jpg"> <span class="overlay"></span> </a>
        //             <figcaption> <a href="pages/single_page.html">Proin rhoncus consequat nisl eu ornare mauris</a> </figcaption>
        //             <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a phare...</p>
        //           </figure>
        //         </li>
  var node = document.createElement("LI");
 
  var div = document.createElement("DIV");
  div.setAttribute('class',"media wow fadeInDown");
  

  var link = document.createElement("A");
  link.setAttribute('class',"media-left");
  link.setAttribute('href','pages/single_page.html?url=' + doc.id);

 var image = document.createElement("IMG")
  image.setAttribute('src',data.top_image)

   var div1 = document.createElement("DIV")
   div1.setAttribute('class',"media-body");
   var link1 = document.createElement("A");
   link1.setAttribute('class',"catg_title");
   link1.setAttribute('href','pages/single_page.html?url=' + doc.id);
  link1.textContent=data.title
     
  var image_src = document.createElement("H5")
  image_src.textContent="9 NEWS"
  div1.appendChild(image_src)
  div1.appendChild(link1)



 link.appendChild(image)
 div.appendChild(link)
 div.appendChild(div1)
 
  node.appendChild(div)
   document.getElementById("9News").appendChild(node);
          //--------------



      });



  });
}      

function retrieveDocument_imageslider()
{

    
  cloudDB.collection("news").orderBy('date').limit(5).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          const data= doc.data();
          console.log(data.url)
          console.log(doc.id, " => ", doc.data());

          //----------------
          
  
 
  var div = document.createElement("DIV");
  div.setAttribute('class',"single_iteam");
  

  var link = document.createElement("A");
  link.setAttribute('href',data.url);

 var image = document.createElement("IMG")
  image.setAttribute('src',data.top_image)

   var div1 = document.createElement("DIV")
   div1.setAttribute('class',"slider_article");

   var head = document.createElement("H3")
   
   var link1 = document.createElement("A");
   link1.setAttribute('class',"slider_tittle");
   link1.setAttribute('href',data.url);
  link1.textContent=data.title

  var summary = document.createElement("P")
  var s=data.summary;
  var s1=s.replace("<p>"," ");
  s1=s1.replace("</p>"," ");

  summary.textContent=s1

  head.appendChild(link1)
  div1.appendChild(head)
  div1.appendChild(summary)



 link.appendChild(image)
 div.appendChild(link)
 div.appendChild(div1)
 
  
   document.getElementById("slider_1").appendChild(div);
          //--------------



      });



  });
}      
      
  
  
  
function passWord() {
    

while (s!= "mypassword"  )
{
s=prompt("please enter your password");
if (s=="mypassword")
{
   
    window.open('protectpage.html');

//window.location.href="correct.html"; //page to redirect if password entered is correct

}
else
{
alert("Incorrect password-Try again");

}
}
      
    }
    

  
  
  
  console.log("tetsinggg1234")
  retrieveLatestNews();
  getSourceCount();
  getKeyword();
 // passWord();
//  retrieveDocument_Nine();  
 //  retrieveDocument_Guardian(); 
  // retrieveDocument_SBS();
 // retrieveDocument_imageslider();
