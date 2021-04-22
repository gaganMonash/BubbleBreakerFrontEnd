


const firebaseConfig = {
    apiKey: "AIzaSyDqh6OXXtetcybxeFNPOU5see_yue0b9lg",
    authDomain: "bubblebreaker-eb404.firebaseapp.com",
    projectId: "bubblebreaker-eb404",
    storageBucket: "bubblebreaker-eb404.appspot.com",
    messagingSenderId: "22510277361",
    appId: "1:22510277361:web:2361c6c3dd60bfe7f70f50",
    measurementId: "G-7C2TEGPKV0"
  };
  var text_wc=" "
  
  firebase.initializeApp(firebaseConfig);
  let cloudDB=firebase.firestore();


function getData1()
{

    

const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  var source = urlParams.get('source');
 

  s_image=""
  if(source=="guardian")
  {s_image="images/new_source_logos/Thw G a.png"}
else if(source=="uq")
{s_image="images/new_source_logos/UQ a.png"}
else if(source=="sbs")
{s_image="images/new_source_logos/sbs a.png"}
else if(source=="bestInAustralia")
{s_image="images/new_source_logos/BIA a.png"}
else if(source=="9news")
{s_image="images/new_source_logos/9 news a.png"}



    document.getElementById("image-source").setAttribute("src",s_image); 
 
cloudDB.collection("news").limit(20).where("source", "==", source)
  .get()
  .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
         console.log(doc.id, " => ", doc.data());
          const data= doc.data();
          var div = document.createElement("DIV");
          div.setAttribute('class',"div-block-8");
          div.style.marginLeft="30px"
         
      
          
        // Anchor
          var link = document.createElement("A");
          link.setAttribute('class',"link-block-5 w-inline-block");
          id= doc.id.toString();
          
          link.setAttribute('href','news-page.html?url=' + doc.id.replaceAll("&","**"));
          link.setAttribute('data-w-id','883a83c1-1417-c7d1-156c-a275a7fd899d')
          link.style.backgroundImage = "url('"+data.top_image +"')";
          link.style.backgroundSize = "contain";
          
          
      
        
          
      
      // Text
          var div1 = document.createElement("DIV")
          div1.setAttribute('class',"text-block-35");

          div1.textContent=data.title.substr(0,60)+"..";
      
       
          link.appendChild(div1);
      
          var divFoot = document.createElement("DIV")
          divFoot.setAttribute('class',"columns-18 w-row");
      
      // Source
      
      var source=""; 
      var url=String(doc.id);
      //console.log("Determining source")
      //console.log(url)
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
          div2.setAttribute('class',"w-col w-col-4");
         
      
          var div2_1 = document.createElement("DIV")
          div2_1.setAttribute('class',"text-block-36");
          div2_1.textContent=source;
          
                  div2.appendChild(div2_1);
      
      
          //Date 
      
          var div3 = document.createElement("DIV")
          div3.setAttribute('class',"w-col w-col-4");
         
      
          var div3_1 = document.createElement("DIV")
          div3_1.setAttribute('class',"text-block-37");
          div3_1.textContent=data.published;
          
                  div3.appendChild(div3_1);
      
      // Sentiment
                  
          var div4 = document.createElement("DIV")
          div4.setAttribute('class',"w-col w-col-4");
         
      
          var div4_1 = document.createElement("DIV")
          div4_1.setAttribute('class',"text-block-38");
          div4_1.textContent=data.sentiment ;
          
                  div4.appendChild(div4_1);


                  
          
      
      divFoot.appendChild(div2);
      divFoot.appendChild(div3);
      divFoot.appendChild(div4);
      link.appendChild(divFoot);
      div.appendChild(link);
      console.log("LODAAA")
      console.log(data.sentiment) 
      document.getElementById("source-result").appendChild(div); 


      });
  })
  .catch((error) => {
      console.log("Error getting documents: ", error);
  });
  
 
} 
getData1()