const form = document.getElementById("inserisci");

const scontoGiovani = 0.2;
const scontoAnziani = 0.4;
const giovani = 18;
const anziani = 65;
const basePrezzo = 0.21;

form.addEventListener("submit", calculatePrice());

function calculatePrice(event)
{
    event.preventDefault();

    let res;

    const km = document.getElementById("km").value;
    console.log("km");
    const eta = document.getElementById("eta").value;
    console.log("eta");

    if(eta<giovani)
        res = (basePrezzo * km ) * scontoGiovani;
    else if (eta>anziani)
        res = (basePrezzo * km ) * oldDisc;
    else
        res = (basePrezzo * km);

    let price = document.getElementById(finalPrice);
    console.log(finalPrice);
    let ageOut = document.getElementById(ageOutput);
    console.log(ageOut);
    let kmOut = document.getElementById(kmOutput);
    console.log(kmOut);

}
