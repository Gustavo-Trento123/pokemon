const state = {
    views: {
        menuOptions: document.querySelectorAll(".option"),
    },

    values: {
        mapedKeys: [a, w, s, d],
    },

    actions: {

    }
}

function menuNavigation(){
    state.views.menuOptions.forEach((option) =>{
        option.addEventListener("keydown", (e) => {

        })
    })
}


function main(){

}

main()