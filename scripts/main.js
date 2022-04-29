async function apiCall(url) {


    //add api call logic here
    try{
      let res = await fetch(url);
      let data = await res.json();
      return data;
    }
    catch(err){
        console.log("Err:",err)
    }


}

// export {apiCall}


function appendArticles(articles, main) {

    //add append logic here

    articles.forEach(ele=>{
        let div=document.createElement("div");

        let image=document.createElement("img");
        image.src=ele.urlToImage;
        image.setAttribute("id","image")

        let p=document.createElement("h4");
        p.innerText=ele.title;

        let  p1= document.createElement("p");
        p1.innerText=ele.description;


        let name=document.createElement("h3")
        name.innerText=ele.source.name;

        div.append(name,image,p,p1);
        

        div.onclick=()=>{
           localStorage.setItem("article",JSON.stringify(ele));
           window.location.href="news.html" 
        }
        main.append(div)
    })

    
    // content: "Life Insurance Corporation of India's initial public offering (IPO) is expected to file its Draft Red Herring Prospectus (DRHP) on February 11, sources told CNBC-TV18.\r\nIt has learned that the Insura… [+914 chars]"
    // description: "LIC IPO: The quantum of divestment and EV numbers will be mentioned in the DRHP."
    // publishedAt: "2022-02-11T01:27:00Z"
    // source:
    // id: null
    // name: "Moneycontrol"  

}

export { apiCall, appendArticles }