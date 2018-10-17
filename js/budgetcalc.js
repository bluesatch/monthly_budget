function satchInc() {
    event.preventDefault;
    var coding = Number(document.getElementById('coding').value);
    var ssc = Number(document.getElementById('ssc').value);
    var income1 = coding + ssc;
    console.log(income1)
    var outputincome1 = document.getElementById('income1');
    outputincome1.innerHTML = "$" + income1.toFixed(2);
}