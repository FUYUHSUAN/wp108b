
const Shop = {
    name: 'Christina Restaurant ',
    address: 'Kinmen college Taiwan',
    tel: '082-333333',
    items: {'Pizza': 300, 'Sandwich': 130, 'Dessert': 150,'Juice':80,'Steak':350 },
    addons: {'Normal': 0, 'Bigger/More': 15, 'hot': 0, 'cool': 0 },
    orderCount: 0,
  }
  
  Shop.html = `
  <div>
    <div class="w3-display-topleft w3-container w3-xlarge">

    </div>
    <button class="w3-button w3-black w3-round-xlarge" onclick="Setting.start()">Store setting</button></br></br>
    <button class="w3-button w3-black w3-round-xlarge" onclick="Report.start()">Daily earnings</button></br></br>
    <button class="w3-button w3-black w3-round-xlarge" onclick="Pos.start()">A La Cart</button></br></br>
    <button class="w3-button w3-black e3-round-xlarge">~<a href="../main.html">Go back host's page</a>~ </button>
  </div>
  `
  
  Shop.start = function () {
    Shop.init()
    Shop.name = localStorage.getItem('Shop.name') || Shop.name
    Shop.address = localStorage.getItem('Shop.address') || Shop.address
    Shop.tel = localStorage.getItem('Shop.tel') || Shop.tel
    Ui.id('menuShopName').innerHTML = Shop.name
    const itemsJson = localStorage.getItem('Shop.items')
    const addonsJson = localStorage.getItem('Shop.addons')
    if (itemsJson != null) Shop.items = JSON.parse(itemsJson)
    if (addonsJson != null) Shop.addons = JSON.parse(addonsJson)
    Ui.show(Shop.html)
  }

  function startShop(){
    location.href="index.html";
  }
  
  Shop.init = function () {
    Shop.orderCount = localStorage.getItem('Pos.Order.count')
    if (Shop.orderCount == null) {
      Shop.orderCount = 0
      localStorage.setItem('Pos.Order.count', Shop.orderCount)
    }
  }
  
  Shop.incCount = function () {
    // let orderCount = parseInt(localStorage.getItem('Pos.Order.count')) + 1
    localStorage.setItem('Pos.Order.count', ++ Shop.orderCount)
  }
  
  Shop.saveOrder = function (Order) {
    localStorage.setItem('Pos.Order.' + Shop.orderCount, JSON.stringify(Order))
  }
  
  Shop.getOrder = function (i) {
    let orderJson = localStorage.getItem('Pos.Order.'+i)
    if (orderJson == null) return null
    return JSON.parse(orderJson)
  }



  


