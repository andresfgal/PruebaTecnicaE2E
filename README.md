# Prueba tecnica DevSu LLC Opcion 1 de automatización E2E utilizando el framework Cypress #

Este proyecto contiene un suite de pruebas automatizadas de extremo a extremo (E2E) utilizando Cypress para validar el flujo de compra de articulos tecnlogogicos en una plataforma de comercio electrónico. La arquitectura del proyecto sigue el patrón de diseño Page Object Model (POM) para garantizar la mantenibilidad y reutilización del código.

El proyecto contine dos carpetas para realizar la ejecución que se encuentran dentro de la carpeta principal "Cypress":

1. e2e: esta carpeta contine la clase homePage la cual es la encargada de la declarar el flujo de compra y ejecutar los metodos en orden correcto.
2. Pages: esta carpeta contiene las tres clases que se usaron para dividir la automatizacion segun las fases mostradas acontinuación, cada item sera el orden de los metodos invocados en la clase mencionada en el punto 1.

# Flujo de automatización

La prueba principal (`homePage.cy.js`) ejecuta el flujo completo de compra de dos productos:
1. home.visit: este metodo carga la pagina en la cual realizamos la automatizacion
2. home.selectProduct: este metodo se usa dos veces para seleccionar productos especificos.
3. home.addToCart: este metodo se usa dos veces igualmente para añadir cada producto al carrito
4. home.goHome: este metodo es usado para simular que el usuario regrese a la pagina principal luego de seleccionar el primer producto y añadirlo al carrito
5. cartPage.goToCart: este metodo se usa para llevar al usuario al carrito
6. cartPage.goToPlaceOrder: este metodo simula el click que le abre el formulario que debe llenar el usuario para "pagar" los productos
7. checkoutPage.PaymentForm: este metodo llena el formulario de compra.
8. checkoutPage.confirmPurchase: este metodo confirma la compra.
9. checkoutPage.confirmOk: este metodo finaliza el proceso de compra dando Ok en el ultimo boton y este regresa a la pagina inicial del comercio
10. Finalmente para cada metodo se agrego una timpo de espera para que se permita visualizar de mejor manera el flujo de la automatizacion.

# Paso a paso de ejecución

Para clonar y ejecutar este proyecto se ebe tener instalado lo siguiente:
* Node.js (https://nodejs.org/) (Versión 18 o superior)
* npm (esto viend incluido en la descarga de Node.js)



## 📦 Instalación

1. Clonar el repositorio en local
   git clone <URL_DE_TU_REPOSITORIO>




   
