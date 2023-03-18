// import { contact } from "./contact.js";
import { details } from "./details.module.js";
import { search } from "./search.module.js"
import { ui } from "./ui.module.js";
export class home {
    constructor() {
        $(document).ready(() => {
            this.loading = $(".loading-screen").fadeOut(2500)
        })
        // this.contact = new contact()
        this.details = new details()
        this.search = new search()
        this.startdetiles()
        this.ui = new ui()
        this.ux()
        this.CloseNav()
        $(".icon").click(this.OpenNav)

        // link Search
        this.searchbtn = document.getElementById("Search")
        this.searchbtn.addEventListener('click', () => {
            document.querySelector(".search").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
            this.search.searchContainer.innerHTML = ""
            this.OpenNav()
        })
        // link Categories
        this.Categories = document.getElementById("Categories")
        this.Categories.addEventListener('click', () => {
            document.querySelector(".search").classList.add("d-none");
            document.querySelector(".home").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
            this.getcategories()
            this.OpenNav()
        })
        // link getArea
        this.Area = document.getElementById("Area")
        this.Area.addEventListener('click', () => {
            document.querySelector(".search").classList.add("d-none");
            document.querySelector(".home").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
            // document.getElementById("getArea").classList.remove("d-none");
            // this.search.searchContainer.innerHTML = ""
            this.getArea()
            this.OpenNav()
        })

        // Ingredients
        this.Ingredients = document.getElementById("Ingredients")
        this.Ingredients.addEventListener('click', () => {
            document.querySelector(".search").classList.add("d-none");
            document.querySelector(".home").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
            this.getIngredients()
            this.OpenNav()
        })
        // Contacts





    }

    CloseNav() {
        this.width = $(".nav-tab").outerWidth(true)
        $(".side-nav-menu").animate({ left: `-${this.width}px` })
        this.topp = $(".links").outerHeight(true)
        $(".links li").animate({ top: `${this.topp}px` })
    }

    OpenNav() {
        let left = $(".side-nav-menu").css("left")
        // console.log(left);
        if (left == "0px") {

            let width = $(".nav-tab").outerWidth(true)
            console.log(width);
            $(".side-nav-menu").animate({ left: `-${width}px` }, 1000)
            $(".open-close-icon").removeClass("fa-x");
            $(".open-close-icon").addClass("fa-align-justify");

            // link
            let top = $(".links").outerHeight(true)
            $(".links li").animate({ top: `${top}px` })
            // link


        } else {
            $(".side-nav-menu").animate({ left: `0px` }, 1000)
            $(".open-close-icon").removeClass("fa-align-justify");
            $(".open-close-icon").addClass("fa-x");
            // link
            for (let i = 0; i < 5; i++) {
                $(".links li").eq(i).animate({
                    top: 0
                }, (i + 5) * 100)
            }
        }
    }

    async ux() {
        let respose = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        let resposedata = await respose.json()
        console.log(resposedata.meals);
        this.ui.displayDataGame(resposedata.meals)
        this.startdetiles(resposedata.meals)
    }
    startdetiles() {
        document.querySelectorAll(".meal").forEach(e => {
            e.addEventListener('click', () => {
                const id = e.id
                console.log(id);
                this.showDetails(id);
            })
        });
    }
    showDetails(idGame) {
        this.details.getDetails(idGame);
        document.querySelector(".home").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
        this.searchbtn = document.getElementById("Search")
        this.searchbtn.addEventListener('click', () => {
            document.querySelector(".details").classList.add("d-none");

        })
    }
    // getcategories
    async getcategories() {
        row.innerHTML = ""
        this.loading = $(".loading-screen").fadeIn(100)
        let respose = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        let resposedata = await respose.json()
        console.log(resposedata.categories);
        this.ui.displaycategories(resposedata.categories)
        this.Startgetcategories()
        this.loading = $(".loading-screen").fadeOut(2500)
    }
    Startgetcategories() {
        document.querySelectorAll(".meal").forEach(e => {
            e.addEventListener('click', () => {
                const id = e.id
                console.log(id);
                this.showDetailscategories(id)
                // this.ui.getCategoriesDetails(id)
            })
        });
    }
    showDetailscategories(id) {
        rowData.innerHTML = ""
        this.loading = $(".loading-screen").fadeIn(100)
        this.details.getCategoriesDetails(id);
        this.loading = $(".loading-screen").fadeOut(2500)
    }

    // getArea
    async getArea() {
        row.innerHTML = ""
        this.loading = $(".loading-screen").fadeIn(100)
        let respose = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        let resposedata = await respose.json()
        console.log(resposedata.meals);
        this.ui.displayArea(resposedata.meals)
        this.StartgetArea()
        this.loading = $(".loading-screen").fadeOut(2500)
    }
    StartgetArea() {
        document.querySelectorAll(".meal").forEach(e => {
            e.addEventListener('click', () => {
                const id = e.id
                console.log(id);
                this.showDetailsgetArea(id)
                // this.ui.getCategoriesDetails(id)
            })
        });
    }
    showDetailsgetArea(id) {
        rowData.innerHTML = ""
        this.loading = $(".loading-screen").fadeIn(100)
        this.details.getAreaDetails(id);
        this.loading = $(".loading-screen").fadeOut(2500)
    }





    // Ingredients
    async getIngredients() {
        rowData.innerHTML = ""
        this.loading = $(".loading-screen").fadeIn(100)
        let respose = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        let resposedata = await respose.json()
        console.log(resposedata.meals);
        this.ui.displayIngredients(resposedata.meals.slice(0, 20))
        this.StartgetIngredients()
        this.loading = $(".loading-screen").fadeOut(2500)

    }
    StartgetIngredients() {
        document.querySelectorAll(".meal").forEach(e => {
            e.addEventListener('click', () => {
                const id = e.id
                console.log(id);
                this.showDetailsIngredients(id)
                // this.ui.getCategoriesDetails(id)
            })
        });
    }
    showDetailsIngredients(id) {
        rowData.innerHTML = ""
        this.loading = $(".loading-screen").fadeIn(100)
        this.details.getIngredients(id);
        this.loading = $(".loading-screen").fadeOut(2500)
    }







}

















// nav
// let width = $(".nav-tab").outerWidth(true)
// $(".side-nav-menu").animate({ left: `-${width}px` })
// nav
// link
// let topp = $(".links").outerHeight(true)
// $(".links li").animate({ top: `${topp}px` })
// link


// function ss(eq) {
//     let left = $(".side-nav-menu").css("left")
//     // console.log(left);
//     if (left == "0px") {
//         let width = $(".nav-tab").outerWidth(true)
//         console.log(width);
//         $(".side-nav-menu").animate({ left: `-${width}px` }, 1000)
//         $(".open-close-icon").removeClass("fa-x");
//         $(".open-close-icon").addClass("fa-align-justify");

//         // link
//         let top = $(".links").outerHeight(true)
//         $(".links li").animate({ top: `${top}px` })
//         // link


//     } else {
//         $(".side-nav-menu").animate({ left: `0px` }, 1000)
//         $(".open-close-icon").removeClass("fa-align-justify");
//         $(".open-close-icon").addClass("fa-x");
//         // link
//         for (let i = 0; i < 5; i++) {
//             $(".links li").eq(i).animate({
//                 top: 0
//             }, (i + 5) * 100)
//         }
//     }
    // link


// }
