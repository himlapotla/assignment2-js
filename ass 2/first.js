
fetch("https://openapi.programming-hero.com/api/videos/categories")
.then((res) => res.json())
.then((data) => {
    data.data.forEach((c) => {
        createbuttonn(c.category, c.category_id)
    })
})

function createbuttonn(categoryName, category_id) {
    const butDiv = document.getElementById("buttons")
    const createbutton = document.createElement("div")
    createbutton.innerHTML = `
        <button onclick = "displayData('${category_id}')" class="bbttnn"> ${categoryName} </button>
    `
    butDiv.appendChild(createbutton);
}

function displayData(category_id) {
    fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`)

    .then((res) => res.json())
    .then((data) => {

        const element = document.getElementById("elemnt")
        element.innerHTML = " "

        const itm = document.getElementById("items")
        itm.innerHTML = " "
    
        if (data.data.length === 0)
        {
            itm.innerHTML = `
                <div class="no-data d-flex mt-5">
                    <img src="icon.png" alt="">
                    <h3 text-5> Oops sorry. No data found! </h3>
                </div>
            `
        }     
        else
        {
            data.data.forEach((obj) => {

                const intTime = parseInt(obj.others.posted_date)
                const time = Math.floor(intTime / 60) 

                const card = document.createElement("div")
                card.classList.add("box")
                card.innerHTML = `
                <div class="contents">
                    <div class="t-c mt-0">
                        <img class="imgg d-flex pb-0" src="${obj.thumbnail}" alt="">
                        ${obj.others.posted_date ? `<p class="timee">${time} seconds ago</p>` : ''}
                    </div>
                
                    <div class="div2 d-flex"> 
                        <img class="pro-img" src="${obj.authors[0].profile_picture}" alt="">
                        <div class="div3"> 
                            <h5>${obj.title}</h5>
                            <p>${obj.authors[0].profile_name} ${obj.authors[0].verified ? '<img class="tik" src="tik.png" alt="">' : ''} </p>
                            <p>${obj.others.views + ' views'}</p>
                        </div> 
                    </div>
                </div>
                `
                itm.appendChild(card)
            })
        }
    })
}




//.....................................................................................................................................................




fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
.then((res) => res.json())
.then((dataa) => {
    const btnDv = document.getElementById("view")
    const cB = document.createElement("div")
    cB.innerHTML = `
        <button onclick = "displayDataForAll('1000')" class="bbttnnn"> Sort by view </button>
    `
    btnDv.appendChild(cB);
})

function displayDataForAll(a) {
    fetch(`https://openapi.programming-hero.com/api/videos/category/${a}`)
    .then((res) => res.json())
    .then((data) => {

        let dat = data.data;
        
        for (let i = 0; i < dat.length-1; i++) 
        {
            for (let j = i+1; j < dat.length; j++) 
            {
                if (parseInt(dat[i].others.views) < parseInt(dat[j].others.views)) 
                {
                    let tmp = dat[j];
                    dat[j] = dat[i];
                    dat[i] = tmp;
                }
            }
        }

        const element = document.getElementById("elemnt")
        element.innerHTML = " "

        const itm = document.getElementById("items")
        itm.innerHTML = " "

        dat.forEach((obj) => {

            const intTime = parseInt(obj.others.posted_date)
            const time = Math.floor(intTime / 60) 

            const show = document.createElement("div")
            show.classList.add("boxShow")

            show.innerHTML = `
                                                
                <div class="contents">
                    
                    <div class = "t-c"> 
                        <img class="imgg d-flex" src="${obj.thumbnail}" alt="">
                        ${obj.others.posted_date ? `<p class="timee">${time} seconds ago</p>` : ''}
                    </div>
                    
                                                    
                    <div class="div2 d-flex"> 
                      <img class="pro-img" src="${obj.authors[0].profile_picture}" alt="">
                        <div class="div3"> 
                            <h5>${obj.title}</h5>
                            <p>${obj.authors[0].profile_name} ${obj.authors[0].verified ? '<img class="tik" src="tik.png" alt="">' : ''} </p>
                            <p>${obj.others.views + ' views'}</p>
                        </div> 
                    </div>
                </div>
                `
            element.appendChild(show)
        })
    })
}



function newPage(){
    const newWindow = window.open();

    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" 
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
            </head>
            <body>


                <div class="accordion accordion-flush container" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Discuss the scope of var, let, and const.
                        </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">          </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Tell us the use cases of null and undefined.
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">          </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            What do you mean by REST API?
                        </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">        </div>
                        </div>
                    </div>
                </div>


            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" i
            ntegrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            </body>
            </html>
    `)
}







