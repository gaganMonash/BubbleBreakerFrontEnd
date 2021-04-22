


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

  drawCheck=0;
  var countPositive=0
  var countNegative=0
 function getData()
  {
  const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    var keyword = urlParams.get('keyword').toString().toLowerCase();
    document.getElementById("topic-name").textContent=keyword.toUpperCase();
    var keyword_bag=[]
   
  cloudDB.collection("news").where("search_keyword", "array-contains", keyword)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
           // console.log(doc.id, " => ", doc.data());
            const data= doc.data();
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


                    keywords=data.search_keyword
                    len= keywords.length
                    iter_count=0
                   
         
                    keywords.forEach(myFunction);

                  function myFunction(value) {
                      iter_count=iter_count+1
                      console.log(iter_count)
                      console.log(len)
                           

                 
                        text_wc= text_wc.concat( " ")
                        text_wc= text_wc.concat( value)   
                    console.log(text_wc)
                     keyword_bag.push( value)
                    // console.log(text_wc)
                      
                    //    if(drawCheck==0 && text_wc.length>4000){
                    //     console.log("More But drawn-1000")
                    //     zingchart.MODULESDIR = 'https://cdn.zingchart.com/modules/';
                    //     draw()

                    //       drawCheck=1;
                    //   }
                    //   else if( drawCheck==0 && text_wc.length>3000)
                    //   {
                    //       console.log("More But drawn-2000")
                    //     zingchart.MODULESDIR = 'https://cdn.zingchart.com/modules/';
                    //     draw()
                    //     drawCheck=2
                    //   }
                    //   else if( drawCheck==0 && text_wc.length>2000)
                    //   {

                    //       console.log("More But drawn-3000")
                    //     zingchart.MODULESDIR = 'https://cdn.zingchart.com/modules/';
                    //     draw()
                    //   }

                      console.log("BCCCCCCCCCCCCCCCCCCCCCCCC")
             
             }        
            
        
        divFoot.appendChild(div2);
        divFoot.appendChild(div3);
        divFoot.appendChild(div4);
        link.appendChild(divFoot);
        div.appendChild(link);
        console.log("LODAAA")
        console.log(data.sentiment)
         if(data.sentiment=="NEGATIVE")
         {
            document.getElementById("negative").appendChild(div);
         }
         else{
            document.getElementById("positive").appendChild(div);
         }
        
             document.getElementById("search-result").appendChild(div);


        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    console.log(" ----------------------");
    console.log(keyword_bag);
    console.log(text_wc);
   
   
} 

function getData1()
{
const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  var keyword = urlParams.get('keyword').toString().toLowerCase();
  document.getElementById("topic-name").textContent=keyword.toUpperCase();
  var keyword_bag=[]
 
cloudDB.collection("news").where("search_keyword", "array-contains", keyword)
  .get()
  .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
         // console.log(doc.id, " => ", doc.data());
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
          
          
      
      
      
          // var image = document.createElement("IMG")
          // image.setAttribute('src',data.top_image)
      
          // link.appendChild(image);
      
        
          
      
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
       if(data.sentiment=="NEGATIVE")
       {
          document.getElementById("negative").appendChild(div);
          countNegative=countNegative+1
       }
       else{
          document.getElementById("positive").appendChild(div);
          countPositive=countPositive+1
       }
      
        


      });
  })
  .catch((error) => {
      console.log("Error getting documents: ", error);
  });
  console.log(" ----------------------");
  console.log(keyword_bag);
  console.log(text_wc);
 
 
} 
function draw()
{
    
var myConfig = {
  type: 'wordcloud',
  options: {
    text:text_wc,
    minLength: 5,
    ignore: ["America", "American", "Applause", "Because", "because", "could", "don’t", "people", "That’s", "that’s", "Their", "their", "there", "these", "thing", "those", "through", "We’re", "we’re", "where", "would"],
    maxItems: 200,
    aspect: 'flow-center',
 
    colorType: 'palette',
    palette: ['#D32F2F', '#5D4037', '#1976D2', '#E53935', '#6D4C41', '#1E88E5', '#F44336', '#795548', '#2196F3', '#EF5350', '#8D6E63', '#42A5F5'],
 
    style: {
      fontFamily: 'Crete Round',
 
      hoverState: {
        backgroundColor: '#D32F2F',
        borderRadius: 2,
        fontColor: 'white'
      },
      tooltip: {
        text: '%text: %hits',
        visible: true,
        alpha: 0.9,
        backgroundColor: '#1976D2',
        borderRadius: 2,
        borderColor: 'none',
        fontColor: 'white',
        fontFamily: 'Georgia',
        textAlpha: 1
      }
    }
  },
 
  source: {
    text: '--President Barack Obama<br> Selma 50th anniversary speech<br>March 7, 2015',
    //Source: https://obamawhitehouse.archives.gov/the-press-office/2015/03/07/remarks-president-50th-anniversary-selma-montgomery-marches
    fontColor: '#64B5F6',
    fontSize: 10,
    fontFamily: 'Georgia',
    fontWeight: 'normal',
    marginBottom: '10%'
  }
};
 
zingchart.render({
  id: 'myChart',
  data: myConfig,
  height: 400,
  width: '100%'
});
console.log(text_wc)
console.log("Completed")
}

function draw1()
{
    
    // var divPie = document.createElement("DIV");
    // divPie.setAttribute("class","piechart");
    // document.getElementById("sentiment_tab").appendChild(divPie);

   // <div style="margin-left: 33%;" id="piechart"></div>
// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
    
  var data = google.visualization.arrayToDataTable([
  ['Keyword', 'Sentiment Count'],
  ['Positive', countPositive],
  ['Negative', countNegative]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Sentiment Analysis', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
}
getData();
getData1();
setTimeout(() => {  draw1() }, 3000);
zingchart.MODULESDIR = 'https://cdn.zingchart.com/modules/';
setTimeout(() => {  draw() }, 3000);

   
