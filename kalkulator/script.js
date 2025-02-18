function hitung(operator) {
  let angka1 = parseFloat(document.getElementById("angka1").value);
  let angka2 = parseFloat(document.getElementById("angka2").value);
  let hasil = 0;

  if (isNaN(angka1) || isNaN(angka2)) {
    alert("Masukkan angka yang valid!");
    return;
  }

  switch (operator) {
    case "+":
      hasil = angka1 + angka2;
      break;
    case "-":
      hasil = angka1 - angka2;
      break;
    case "*":
      hasil = angka1 * angka2;
      break;
    case "/":
      hasil = angka1 / angka2;
      break;
    default:
      alert("Operator tidak valid!");
  }

  document.getElementById("hasil").textContent = hasil;
}

function reset() {
  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";
  document.getElementById("hasil").textContent = "0";
}
