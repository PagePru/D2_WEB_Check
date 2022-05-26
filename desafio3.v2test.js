const puppeteer = require('puppeteer')

describe('Prueba Unitarias: ir al carrito de compras y comprar ', () => {
	it('Prueba1: ir al carro de compras', async () => {
		const browser = await puppeteer.launch({
			headless: false,
		})
		const page = await browser.newPage()
		await page.goto('http://automationpractice.com/index.php')

		// ///////////////////// no se que hace aqui const pp = await page.waitForSelector('.tab-content')

		// const itemsList = await page.$('.ajax_block_product')
		const productName = await page.$eval('h5', (element) => element.textContent)
		const productPrice = await page.$eval('.content_price', (element) => element.textContent)


		productNameD = productName.trim()
		productPriceD = productPrice.trim()
		console.log('Nombre del Productp : ', productNameD, ' Precio :', productPriceD )

		// Ahora dar click en el botón "ADD to Car":   button ajax_add_to_cart_button btn btn-default
		await page.click('.ajax_add_to_cart_button')

		
		// Verificar si el precio a elegir en el carrito corresponde al precioa anterior de la página ppal: layer_cart_product_price  999  layer_cart_product_info
		
		await page.waitForSelector('#layer_cart_product_price')
		const productPriceInCar = await page.evaluate( ()=> document.querySelector('#layer_cart_product_price').innerText)
		// const productPriceInCar = await page.$eval('#layer_cart_product_price', (element) => element)

		console.log('Precio en el carrito :', productPriceInCar )


		


		// await browser.close()
	})
})
