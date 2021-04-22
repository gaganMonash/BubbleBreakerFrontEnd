

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
  

  // <h1 id="title" class="news-heading">Western Sydney Aerotropolis rezoning submissions detail heartbreak after homes rendered &#x27;worthless&#x27; </h1>
  // <h6 class="heading source-and-time">From 9 News</h6>
  // <h6 class="heading source-and-time">Posted 1 Mar 2021</h6><img src="images/photo-1418985227304-f32df7d84e39.jpg" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 750px" srcset="images/photo-1418985227304-f32df7d84e39-p-500x334.jpeg 500w, images/photo-1418985227304-f32df7d84e39-p-1080x721.jpeg 1080w, images/photo-1418985227304-f32df7d84e39.jpg 1300w" alt="" class="image">
  function retrieve()
  {
      console.log("HERE")
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    var url = urlParams.get('url').toString()
    url=url.replaceAll("**","&")
    console.log(url);   



    var docRef = cloudDB.collection("news").doc(url);
  
  docRef.get().then((doc) => {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          const data= doc.data();

          var heading = document.createElement("H1");
          heading.setAttribute('class','news-heading');
          heading.textContent=data.title;
          
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

var source1 = document.createElement("H6");
source1.setAttribute('class',"heading source-and-time");
source1.textContent=source;

          var published = document.createElement("H6")
          published.setAttribute('class',"heading source-and-time");
          published.textContent=data.published;


          var image = document.createElement("IMG")
          image.setAttribute('src',data.top_image)
          // d1.appendChild(image)
          document.getElementById("news-head").appendChild(heading);
          document.getElementById("news-head").appendChild(source1);
          document.getElementById("news-head").appendChild(published);
          document.getElementById("news-head").appendChild(image);


       

          var s= data.summary;
          var summary = document.createElement("P")
     
          s1=s.replace( /(<([^>]+)>)/ig, '')



        
          summary.textContent=s1
          document.getElementById("summary").textContent=s1;
          document.getElementById("sentiment_label").textContent=data.sentiment;
          num=data.sentiment_percentage;
          var s_percent=""+num.toFixed(2).toString()+" "+ (100-num.toFixed(2)).toString();
          console.log(s_percent)
          document.getElementById("don_seg").setAttribute("stroke-dasharray",s_percent);
          document.getElementById("percent").textContent=num.toFixed(2);
          if(data.sentiment==="POSITIVE")
          {
          document.getElementById("don_seg").style.stroke = "#7FFF00";
          }
//          document.getElementById("percent").style.stroke = "#7FFF00";

          
          
         // d1.appendChild(summary)
      
        //<a href="topic.html" class="link-10">Text Link</a>
       //   <li class="cat-item"><a href="#">Sports</a></li>
        keywords=data.keywords
         
           keywords.forEach(myFunction);

         function myFunction(value) {
            
             var link = document.createElement("A");
             link.setAttribute('href',"topic.html?keyword="+value);
             link.setAttribute('class',"link-10");

             link.textContent=value;
            
             document.getElementById("keywords").appendChild(link);
    
    }
    tags=data.tags
         
    tags.forEach(myFunction1);

  function myFunction1(value) {
     
      var link = document.createElement("A");
      link.setAttribute('href',"topic.html?keyword="+value);
      link.setAttribute('class',"link-11");

      link.textContent=value;
     
      document.getElementById("Tags").appendChild(link);

}
         
//      var btn = document.createElement("BUTTON");   // Create a <button> element
//  btn.innerHTML = "Go to the Article";
//  btn.onclick = function(){
//      window.open(data.url);
//      document.getElementById("btn").appendChild(btn);
//    };  


         s_e=data.sentiment_entity
        for (const [key, value] of Object.entries(s_e)) {
            
    var div = document.createElement("DIV");
    div.setAttribute('class',"div-block-21");
   

    
  // Anchor
    var link = document.createElement("A");
    link.setAttribute('class',"link-11");
    link.setAttribute('href','news-page.html?url=' + doc.id);
    link.textContent=`${key}`

    var div_type = document.createElement("DIV");
    div_type.setAttribute('class',"div-block-51");
    div_type.textContent=`${value.label}`

    var div_s_score = document.createElement("DIV");
    div_s_score.setAttribute('class',"div-block-52");
    div_s_score.textContent=`${value.sentiment}`

    
            div.appendChild(link);
            div.appendChild(div_type);
            div.appendChild(div_s_score);
            document.getElementById("entity_sentiment_block").appendChild(div);
           
           // console.log(`${key}: ${value.label}`);
          }


      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
  }
    retrieve();