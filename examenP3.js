function calculateTip() {
  const subtotal = parseFloat(document.getElementById("subtotal").value);
  const percentage = parseFloat(document.getElementById("percentage").value);
 
  if (isNaN(subtotal) || isNaN(percentage)) {
    alert("No has puesto nada, o tus valores son invalidos");
    return;
  }
 
  const tip = subtotal * (percentage / 100);
  const total = subtotal + tip;
 
  document.getElementById("result").innerHTML = `
    Propina: $${tip.toFixed(2)}<br>
    Total a pagar: $${total.toFixed(2)}
  `;
}