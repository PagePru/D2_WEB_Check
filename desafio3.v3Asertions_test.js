// ''       ('')          '       '   http://automationpractice.com/index.php

( async()=>{
	const puppeteer = require('puppeteer')
	const browser = await puppeteer.launch({headless: false})
	const page = await browser.newPage()
	await page.goto('http://automationpractice.com/index.php')

	// Capturar el precio enla PAGINA PPAL
	const precioPpal = await page.$eval('.content_price', precio=>precio.textContent.trim())
	console.log ("Precio Pag Ppal= ", precioPpal)
	await page.click('.ajax_add_to_cart_button')

	// Capturar el precio dentro del CARRITO
	await page.waitFor(3000)
	const precioEnCarrito = await page.$eval('.ajax_block_products_total', precioIn=>precioIn.textContent.trim())
	console.log ("Precio En carrito= ", precioEnCarrito)
	
	// Comparar los precios son precios de la PAGINA PPAL y el CARRITO para seguir usando " assertion "
	await page.waitFor(3000)
    it ('Si el precio del carrito es igual al precio de la pag ppal, retorna "Exito"', () => {
	expect(precioPpal('precioEnCarrito')).to.be(Exito)
    })


	await browser.close() 


} )()