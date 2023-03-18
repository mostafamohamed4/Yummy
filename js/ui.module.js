export class ui {
    displayDataGame(data) {
        let temp = ``;
        for (let i = 0; i < data.length; i++) {
            temp += `<div class="col-lg-3 col-md-6">
            <div id=${data[i].idMeal} class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                <img class="w-100" src="${data[i].strMealThumb}" alt="">
                <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                    <h3>${data[i].strMeal}</h3>
                </div>
            </div>
        </div>`
        }
        document.getElementById("row").innerHTML = temp
    }
    displaydetiles(data) {
        let ingredients = ``
        for (let i = 1; i <= 20; i++) {

            if (data[`strIngredient${i}`]) {
                ingredients += `<li class="alert alert-info m-2 p-1">${data[`strMeasure${i}`]} ${data[`strIngredient${i}`]}</li>`

            }

        }
        let tags = data.strTags?.split(",")
        if (!tags) tags = []
        console.log(tags);
        let tagsStr = ''
        for (let i = 0; i < tags.length; i++) {
            tagsStr += `
            <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
        }
        const temp = ` <div class="col-md-4">
        <img class="w-100 rounded-3"
            src="${data.strMealThumb}" alt="">
        <h2>${data.strMeal}</h2>
    </div>
    <div class="col-md-8">
        <h2>Instructions</h2>
        <p>${data.strInstructions}</p>
        <h3><span class="fw-bolder">Area : </span>${data.strArea}</h3>
        <h3><span class="fw-bolder">Category : </span>${data.strCategory}</h3>
        <h3>Recipes :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
       ${ingredients}
        </ul>
        <h3>Tags :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap"> 
            ${tagsStr}
        </ul>

        <a target="_blank" href="${data.strSource}"
            class="btn btn-success">Source</a>
        <a target="_blank" href="${data.strYoutube}"
            class="btn btn-danger">Youtube</a>
    </div>`
        document.getElementById("rowData").innerHTML = temp
    }

    //     showSearchName(data) {
    //         let temp = ``
    //         for (let i = 0; i < data.length; i++) {
    //             temp += `<div class="col-lg-3 col-md-6">
    //        <div id=${data[i].idMeal} class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
    //            <img class="w-100" src="${data[i].strMealThumb}" alt="">
    //            <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
    //                <h3>${data[i].strMeal}</h3>
    //            </div>
    //        </div>
    //    </div>`
    //         }
    //         document.getElementById("row").innerHTML = temp
    //     }
    showSearchFirstLetter(data) {

        let temp = ``
        for (let i = 0; i < data.length; i++) {
            temp += `<div class="col-lg-3 col-md-6">
       <div id=${data[i].idMeal} class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
           <img class="w-100" src="${data[i].strMealThumb}" alt="">
           <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
               <h3>${data[i].strMeal}</h3>
           </div>
       </div>
   </div>`
        }
        document.getElementById("row").innerHTML = temp
    }

    displaycategories(data) {
        let temp = ``;
        for (let i = 0; i < data.length; i++) {
            temp += `<div class="col-lg-3 col-md-6">
            <div id=${data[i].strCategory} class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                <img class="w-100" src="${data[i].strCategoryThumb}" alt="">
                <div class="meal-layer position-absolute text-center text-black p-2">
                    <h3>${data[i].strCategory}</h3>
                    <P>${data[i].strCategoryDescription}</P>
                </div>
            </div>
        </div>`
        }
        document.getElementById("row").innerHTML = temp
    }
    displayDetilscategories(data) {
        let temp = ``;
        for (let i = 0; i < data.length; i++) {
            temp += `<div class="col-lg-3 col-md-6">
            <div id=${data[i].idMeal} class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                <img class="w-100" src="${data[i].strMealThumb}" alt="">
                <div class="meal-layer position-absolute d-flex justify-content-center align-items-center text-black p-2">
                    <h3>${data[i].strMeal}</h3>
                </div>
            </div>
        </div>`
        }
        document.getElementById("row").innerHTML = temp
    }

    displayArea(data) {
        let temp = ``;
        for (let i = 0; i < data.length; i++) {
            temp += `<div class="col-lg-3 col-md-6">
                <div id=${data[i].strArea} class="meal rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h3>${data[i].strArea}</h3>
                </div>
        </div>`
        }
        document.getElementById("row").innerHTML = temp
    }

    displayDetilsArea(data) {
        let temp = ``;
        for (let i = 0; i < data.length; i++) {
            temp += `<div class="col-lg-3 col-md-6">
            <div id=${data[i].idMeal} class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                <img class="w-100" src="${data[i].strMealThumb}" alt="">
                <div class="meal-layer position-absolute d-flex justify-content-center align-items-center text-black p-2">
                    <h3>${data[i].strMeal}</h3>
                </div>
            </div>
        </div>`
        }
        document.getElementById("row").innerHTML = temp
    }





    displayIngredients(data) {
        let temp = ``;
        for (let i = 0; i < data.length; i++) {
            temp += `<div class="col-lg-3 col-md-6">
            <div id="${data[i].strIngredient}" class="meal rounded-2 text-center cursor-pointer">
                    <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    <h3>${data[i].strIngredient}</h3>
                    <p>${data[i].strDescription.split(" ").slice(0, 20).join(" ")}}</p>
            </div>
    </div>`
        }
        document.getElementById("row").innerHTML = temp
    }

    displayDetilsIngredients(data) {
        let temp = ``;
        for (let i = 0; i < data.length; i++) {
            temp += `<div class="col-lg-3 col-md-6">
            <div id=${data[i].idMeal} class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                <img class="w-100" src="${data[i].strMealThumb}" alt="">
                <div class="meal-layer position-absolute d-flex justify-content-center align-items-center text-black p-2">
                    <h3>${data[i].strMeal}</h3>
                </div>
            </div>
        </div>`
        }
        document.getElementById("row").innerHTML = temp
    }





















}