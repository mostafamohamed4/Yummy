import { ui } from "./ui.module.js";

export class details {
    constructor() {
        this.ui = new ui()
        this.btn = document.getElementById("btn")
        this.btn.addEventListener('click', () => {
            document.querySelector(".home").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");

        })
        // this.getDetails(idGame)
        // this.getCategoriesDetails(idcategories)
    }


    async getDetails(id) {
        rowData.innerHTML = ""
        this.loading= $(".loading-screen").fadeIn(100)
        let resultDetails = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        resultDetails = await resultDetails.json()
        console.log(id);
        this.ui.displaydetiles(resultDetails.meals[0])
        this.loading= $(".loading-screen").fadeOut(2500)

    }

    async getCategoriesDetails(id) {
        let resultDetails = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
        resultDetails = await resultDetails.json()
        console.log(resultDetails.meals);
        this.ui.displayDetilscategories(resultDetails.meals)
        this.Startgetcategories()
    }

    Startgetcategories() {
        document.querySelectorAll(".meal").forEach(e => {
            e.addEventListener('click', () => {
                const id = e.id
                this.getDetails(id)
                this.showDetailscategories(id)
                rowData.innerHTML = ""
            })
        });
    }
    showDetailscategories(id) {
        rowData.innerHTML = ""
        this.loading = $(".loading-screen").fadeIn(100)
        this.ui.displaydetiles(id);
        document.querySelector(".home").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
        this.loading= $(".loading-screen").fadeOut(2500)
    }

    async getAreaDetails(id) {
        let resultDetails = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`)
        resultDetails = await resultDetails.json()
        console.log(resultDetails.meals);
        this.ui.displayDetilsArea(resultDetails.meals)
        this.StartgetArea()
    }
    StartgetArea() {
        document.querySelectorAll(".meal").forEach(e => {
            e.addEventListener('click', () => {
                const id = e.id
                console.log(id);
                this.getDetails(id)
                this.showDetailsArea(id)
                rowData.innerHTML = ""
            })
        });
    }

    showDetailsArea(id) {
        console.log(id);
        this.ui.displaydetiles(id);
        document.querySelector(".home").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
    }

    // end getIngredients


    async getIngredients(id) {
        console.log(id);
        let resultDetails = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`)
        resultDetails = await resultDetails.json()
        console.log(resultDetails.meals);
        this.ui.displayDetilsIngredients(resultDetails.meals)
        this.StartgetArea()
    }
    StartgetIngredients() {
        document.querySelectorAll(".meal").forEach(e => {
            e.addEventListener('click', () => {
                const id = e.id
                console.log(id);
                this.getAreaDetails(id)
                this.showDetailsIngredients(id)
                rowData.innerHTML = ""
            })
        });
    }

    showDetailsIngredients(id) {
        console.log(id);
        this.ui.displaydetiles(id);
        document.querySelector(".home").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
    }



}
