import { ui } from "./ui.module.js"
import { details } from "./details.module.js";
import { home } from "./index.module.js";

export class search {
    constructor() {
        this.details=new details
        this.searchContainer = document.getElementById("row")
        this.ui = new ui()
        this.Name = document.getElementById("Name").addEventListener("keyup", () => {
            this.Name = Name.value
            this.searchName(this.Name)
        })
        this.FirstLetter = document.getElementById("FirstLetter").addEventListener("keyup", () => {
            this.FirstLetter = FirstLetter.value
            this.FirstLetter == "" ? this.FirstLetter = "a" : "";
            this.searchFirstLetter(this.FirstLetter)
        })
        // this.searchbtn = document.getElementById("Search")
        // this.searchbtn.addEventListener('click', () => {
        //     document.querySelector(".search").classList.remove("d-none");
        //     this.searchContainer.innerHTML = ""
        //     // // nav
        //     // let width = $(".nav-tab").outerWidth(true)
        //     // $(".side-nav-menu").animate({ left: `-${width}px` })
        //     // $(".open-close-icon").removeClass("fa-x");
        //     // $(".open-close-icon").addClass("fa-align-justify");
        //     // // nav
        // })

    }


    async searchName(Name) {
        this.loading= $(".loading-screen").fadeIn(300)
        let respose = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Name}`)
        let resposedata = await respose.json()
        console.log(resposedata.meals);
        // this.ui.showsearch(resposedata.meals)
        resposedata.meals ? this.ui.displayDataGame(resposedata.meals) : this.ui.displayDataGame([])
        this.startdetiles()
        this.loading= $(".loading-screen").fadeOut(300)
    }

    async searchFirstLetter(FirstLetter) {
        this.loading= $(".loading-screen").fadeIn(300)
        let respose = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${FirstLetter}`)
        let resposedata = await respose.json()
        console.log(resposedata);
        this.ui.showSearchFirstLetter(resposedata.meals)
        this.startdetiles()
        this.loading= $(".loading-screen").fadeOut(300)
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
        document.querySelector(".search").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
        this.searchbtn = document.getElementById("Search")
        this.searchbtn.addEventListener('click', () => {
            document.querySelector(".details").classList.add("d-none");

        })
    }


}
new search()


// Name = document.getElementById("Name")
// Name.addEventListener("keyup", search)
// function search() {
//     carentcity = Name.value
//     console.log(carentcity);
//     getdata(carentcity)
// }

// async function getdata(inputname) {
//     let respose = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputname}`)
//     let resposedata = await respose.json()
//     console.log(resposedata);
// }

