for (let i = 1; i <= 10; i++) {
    let tabrow = "";
    for ( let j = 1; j <= 10; j++) {
        tabrow =  tabrow + (i*j).toString().padStart(4, "_")
        
    }
    console.log("Row " +i+ "->" + tabrow)
}