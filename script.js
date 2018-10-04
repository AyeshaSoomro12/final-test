$.ajax({
    url: `https://techkaro-test.herokuapp.com/api/v1/getdata`,
    success: function (data) {
        console.log(data);

        document.querySelector("#data-img").innerHTML = `${data.imageURL}`;
        document.querySelector(".card-title").innerHTML = `${data.info.heading}`;
        document.querySelector(".card-text").innerHTML = `${data.info.description}`;
        document.querySelector("#data-img").innerHTML = `${data.imageURL}`;
        document.querySelector("#sale").innerHTML = `${data.sale.heading}`;
        document.querySelector("#sale-discription").innerHTML = `${data.sale.description}`;
        


    }
})
function getLanuage(){
    $.ajax({
    url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang=zh`,
    success: function (data) {
        console.log(data);

        document.querySelector("#data-img").innerHTML = `${data.imageURL}`;
        document.querySelector(".card-title").innerHTML = `${data.info.heading}`;
        document.querySelector(".card-text").innerHTML = `${data.info.description}`;
        


    }
})

}

