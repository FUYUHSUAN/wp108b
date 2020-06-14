const Setting = {}

Setting.html = `
<link rel="stylesheet" href="Setting.css">
<div class="container">
<h1>Setting the store</h1>
<table>
  <thead><tr><th>column</th><th>contents</th></tr></thead>
  <tbody>
    <tr><td>Store's</td><td><input id="shopName" type="text" value=""/></td></tr>
    <tr><td>Address</td><td><input id="shopAddress" type="text" value=""/></td></tr>
    <tr><td>Mobile number</td><td><input id="shopTel" type="text" value=""/></td></tr>
    <tr><td>The list of products.</td><td><textarea id="items"></textarea></td></tr>
    <tr><td>Other's</td><td><textarea id="addons"></textarea></td></tr>
  </tbody>
</table>
</div>
<br/>
<button class="w3-button w3-sand w3-round-xlarge" onclick="Setting.save()">Saving</button>
<button class="w3-button w3-sand w3-round-xlarge" onclick="Shop.start()">Go back to main menu</button>
`

Setting.start = function () {
  Ui.show(Setting.html)
  Ui.id('shopName').value = Shop.name
  Ui.id('shopAddress').value = Shop.address
  Ui.id('shopTel').value = Shop.tel
  Ui.id('items').value = JSON.stringify(Shop.items, null, 2)
  Ui.id('addons').value = JSON.stringify(Shop.addons, null, 2)
}

Setting.save = function () {
  try {
    Shop.name = Ui.id('shopName').value
    Shop.address = Ui.id('shopAddress').value
    Shop.tel = Ui.id('shopTel').value
    Shop.items = JSON.parse(Ui.id('items').value)
    Shop.addons = JSON.parse(Ui.id('addons').value)
  } catch (error) {
    alert('Saving fail.Please check have any wrong in format！\n', error)
    return
  }
  localStorage.setItem('Shop.name', Shop.name)
  localStorage.setItem('Shop.address', Shop.address)
  localStorage.setItem('Shop.tel', Shop.tel)
  localStorage.setItem('Shop.items', Ui.id('items').value)
  localStorage.setItem('Shop.addons', Ui.id('addons').value)
  Ui.id('menuShopName').innerHTML = Shop.name
  alert('Saving Success！')
}