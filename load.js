if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js").then(
        (reg) => console.log("Registrado")
    ).catch(
        (error) => console.log(error)
    )
}