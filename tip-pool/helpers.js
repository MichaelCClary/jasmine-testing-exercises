
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}


function appendDeleteBtn(tr) {
  let newDelete = document.createElement('td');
  newDelete.innerText = "X";

  tr.append(newDelete)
}

serverTbody.addEventListener("click", function (event) {
  const deleteBtn = event.target.innerText;
  if (deleteBtn === "X") {
    delete allServers[event.target.parentNode.getAttribute('ID')];
    updateServerTable();
  }
});

paymentTbody.addEventListener("click", function (event) {
  const deleteBtn = event.target.innerText;
  if (deleteBtn === "X") {
    delete allPayments[event.target.parentNode.getAttribute('ID')];
    updateSummary();
    event.target.parentNode.remove();
  }
});

