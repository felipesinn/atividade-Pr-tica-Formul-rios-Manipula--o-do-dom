document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name1").value;
        const address = document.getElementById("address1").value;
        const city = document.getElementById("pcode1").value;
        const state = document.getElementById("state").value;
        const naturezaCargo = document.querySelector('input[name="natureza_cargo"]:checked').value;
        const areaInteresseCheckboxes = document.querySelectorAll('input[name="area_interesse"]:checked');
        const areaInteresse = Array.from(areaInteresseCheckboxes).map(checkbox => checkbox.value);
        const miniCurriculo = document.getElementById("msg").value;

        console.log("Nome:", name);
        console.log("Endereço:", address);
        console.log("Cidade:", city);
        console.log("Estado:", state);
        console.log("Natureza do cargo:", naturezaCargo);
        console.log("Área de interesse:", areaInteresse);
        console.log("Mini-curriculo:", miniCurriculo);

   
        alert("Dados enviados com sucesso!"); 
        form.reset();
    });
});
