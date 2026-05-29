# Prueba tecnica DevSu LLC Opcion 1 de automatización E2E utilizando el framework Cypress #

Este proyecto contiene un suite de pruebas automatizadas de extremo a extremo (E2E) utilizando Cypress para validar el flujo de compra de articulos tecnlogogicos en una plataforma de comercio electrónico. La arquitectura del proyecto sigue el patrón de diseño Page Object Model (POM) para garantizar la mantenibilidad y reutilización del código.

El proyecto contine dos carpetas para realizar la ejecución que se encuentran dentro de la carpeta principal "Cypress":

1. e2e: esta carpeta contine la clase homePage la cual es la encargada de la declarar el flujo de compra y ejecutar los metodos en orden correcto.
2. Pages: esta carpeta contiene las tres clases que se usaron para dividir la automatizacion segun las fases mostradas acontinuación.

# Flujo de automatización

La prueba principal (`homePage.cy.js`) ejecuta el flujo completo de compra de dos productos:
1. Cargue de la pagina web :** Inicialización y carga de la página web.
2. **Selección:** Adición de dos productos específicos al carrito de compras.
3. **Carrito (Cart):** Navegación al carrito de compras y progreso hacia la orden (`Place Order`).
4. **Pago (Checkout):** Llenado automatizado del formulario de facturación empleando generación de datos aleatorios (Nombre, Ciudad, País, Tarjeta, Mes y Año).
5. **Simulación Humana:** El flujo incluye esperas dinámicas aleatorias (entre 0.5 y 3 segundos) entre interacciones para permitir una visualización realista de la navegación.


## 🛠️ Prerrequisitos

Antes de clonar y ejecutar este proyecto, asegúrate de tener instalado:
* [Node.js](https://nodejs.org/) (Versión 18 o superior recomendada)
* npm (incluido por defecto con Node)

---

## 📦 Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone <URL_DE_TU_REPOSITORIO>
