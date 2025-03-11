function toggleFact(factId){
    var factElement = document.getElementById(factId);

    if (factElement.style.display === "none"){
        factElement.style.display = "block"; //reveals the fact
    } else{
        factElement.style.display = "none"; //hide the fact
    }
    
}