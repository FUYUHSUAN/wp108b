  
const Pos = {
  order: {
    totalPrice: 0,
    records: [],
    submitted: false
  }
}

const Order = Pos.order

Pos.html = `
<div class="continer">

<table id="orderTable">
<div id="wrapper">
<h1>Do you want to order A La Carte?</h1>
<table id="keywords" cellspacing="0" cellpadding="0" style="min-width:845px">

<thead>
<tr>
<td>
  <select id="items" onchange="Pos.calcPrice()"></select>
  <select id="addons" onchange="Pos.calcPrice()"></select>
</td>
<td><input id="price" type="number" value="0"></td>
<td>
<input id="quantity" type="number" value="1">
<button class="w3-button w3-light-grey w3-round-xlarge"onclick="Pos.addItem()">Add</button>
</td>
</tr>
  <tr>
        <th><span>A La Carte(Single)</span></th>
        <th><span>Price/in each</span></th>
        <th><span>The quantity what you want</span></th>
  </tr>
</thead>
<tbody id="orderTableBody">
  <tr><td>&nbsp;</td><td></td><td></td></tr>
</tbody>
</table>
<br/>
<div>
  <label>總價:</label>
  <input id="totalPrice" type="number" value="0">
  <button class="w3-button w3-sand w3-round-xlarge" id="submit" onclick="Pos.submit()">submit your order</button>
  <button class="w3-button w3-sand w3-round-xlarge" id="abort" onclick="Pos.abort()">abort your order</button>
  <br/><br/>
  <button class="w3-button w3-sand w3-round-xlarge" id="goShop" onclick="Pos.goShop()">Go back last page</button>
  <button class="w3-button w3-sand w3-round-xlarge" id="newOrder" onclick="Pos.start()" disabled="disabled">Add one more</button>
  <br/><br/>
</div>
</div>
</table>
</div>
</div>      

`

Pos.goShop = function () {
  if (!Order.submitted) {
    if (confirm("Your order didn't send already,do you want to abort it?？")) {
      Shop.start()
      return
    } else {
      return
    }
  }
  Shop.start()
}

Pos.abort = function () {
  if (confirm('Are you sure you want to abort this order？')) {
    Pos.start()
  }
}

Pos.start = function () {
  Ui.show(Pos.html)
  Ui.id('items').innerHTML = Pos.optionList(Shop.items)
  Ui.id('addons').innerHTML = Pos.optionList(Shop.addons)
  Pos.resetOrder(Order)
  Pos.calcPrice()
}

Pos.resetOrder = function (Order) {
  Order.totalPrice = 0
  Order.records = []
  Order.submitted = false
}

Pos.submit = function () {
  if (Order.records.length === 0) {
    alert("You didn't add anything in your order,you can't submit ！")
    return
  }
  Shop.incCount()
  Order.time = Date.now()
  Order.submitted = true
  Shop.saveOrder(Order)
  Ui.id('submit').disabled = 'disabled'
  Ui.id('submit').innerHTML = 'Already submit'
  Ui.id('abort').disabled = 'disabled'
  Ui.id('newOrder').disabled = ''
}

Pos.optionList = function (list) {
  let r = []
  for (let name in list) {
    let price = list[name]
    r.push('<option value="'+name+':'+price+'">'+name+':'+price+'</option>')
  }
  return r.join('\n')
}

Pos.list = function () {
  let records = Order.records
  let list = []
  for (let i=0; i<records.length; i++) {
    list.push(`<tr><td>${records[i].name}</td><td class="number">${records[i].price}</td><td class="number">${records[i].quantity}</td></tr>`)
  }
  return list.join('\n')
}

Pos.calcPrice = function () {
  let [item, itemPrice] = Ui.id('items').value.split(':')
  let [addon, addonPrice] = Ui.id('addons').value.split(':')
  let price = parseInt(itemPrice) + parseInt(addonPrice)
  Ui.id('price').value = price
  return {item, addon, price}
}

Pos.addItem = function () {
  let {item, addon, price} = Pos.calcPrice()
  let quantity = parseInt(Ui.id('quantity').value)
  let record = {name: item+'('+addon+')', price: price, quantity: quantity}
  Order.records.push(record)
  Ui.id('orderTableBody').innerHTML = Pos.list()
  Order.totalPrice += price * quantity
  Ui.id('totalPrice').value = Order.totalPrice
}



$(function(){
  $('#keywords').tablesorter(); 
});