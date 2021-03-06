# LUKEANDO: Multiplaforma “única” de pagos

![Lukeando](/src/images/Lukeando_final.png)


## Índice

* [1. Contexto](#1-contexto)
* [2. Público Objetivo](#2-público-objetivo)
* [3. Planteamiento del Problema](#3-planteamiento-del-problema)
* [4. Objetivo](#4-objetivo)
* [5. Solución Planteada](#5-solución-planteada)
* [6. Cómo funciona?](#6-cómo-funciona)
* [7. Diagrama de Flujo](#7-diagrama-de-flujo)
* [8. User Flow](#8-user-flow)
* [9. Prototipo](#9-prototipo)


***

## 1. Contexto

Escenario de pandemia y post-pandemia , donde el protocolo sanitario prioriza los mecanismos de mínima o nula exposición al virus SARS-COVID 19 (y otros) como el pago virtual. 


## 2. Público Objetivo

Todo individuo/empresa que use un smartphone y disponga de cuenta(s) y tarjeta(s) en banco(s). 


## 3. Planteamiento del Problema

Manejo “único” de ingresos y egresos de dinero para usuarios (personas/empresas) con diferentes cuentas y bancos.
Plataforma multipagos que permite al usuario tanto recibir dinero, como debitarlo, y escoger, de entre sus cuentas y tarjetas, el método (débito/crédito) de recepción/pago -con cargo inmediato al mismo- de compras y/o pago de servicios.


## 4. Objetivo (importancia)

Ahorro de tiempo y recursos.


## 5. Solución Planteada

Este proyecto abarca dos etapas: En la primera se crea la cuenta de usuario y la segunda es la aplicación de pago en sí.
De acuerdo con los objetivos del ejercicio, he desarrollado la primera, donde como parte de la creación de cuenta, el usuario debe ingresar sus tarjetas, y por ende validarlas. Adicionalmente, al ingresar el número de tarjeta, y con el fin de mantener la confidencialidad, éste se enmascarará, ocultando todos los dígitos menos los últimos cuatro.
La temática adoptada es la peruanidad. En las diferentes páginas de la aplicación se hace referencia al arte urbano local.


## 6. Cómo funciona?

La aplicación para smartphone, estará disponible en App Store y Google Play para descargar. Una vez descargada en el dispositivo, se instalará y ejecutará con la aprobación del usuario.
La persona/negocio creará una cuenta de usuario donde ingresará y almacenará los datos de todas sus tarjetas de débito y crédito asociadas a sus cuentas bancarias, obteniendo un código QR único para cada una de ellas.
Permitiéndole recibir dinero asociando ese código a una factura o recibo emitido en el caso de empresas; y compartiéndolo por SMS, email, chat o redes sociales para recibir transferencias al instante en el caso de personas.
A la hora de realizar un pago/transferencia, el usuario escaneará el código QR proporcionado y seleccionará la cuenta o tarjeta de su cuenta de usuario para concretar la operación.
La aplicación generará y enviará a los correos de usuarios asociados a ambas cuentas (pagador/receptor) el comprobante de la operación.


## 7. Diagrama de Flujo

![Diagrama de Flujo](/src/images/diagrama_de_flujo.jpg)


## 8. User Flow

###  Flujo Inicial

####  Página 0': Home (Inicio)/Landing Page
* (Imagen de fondo)
* LOGO
* Mensaje: Breve descripción de app
* Botón INGRESAR > Ir a 1

####  Página 1':
* (Imagen de fondo)
* LOGO
* H1: Nombre
* Opción CREAR CUENTA > Ir a 2’
* Opción CAMBIAR USUARIO
* Ingresar clave
* Botón OK > Ir a 2’’

####  Página 2': Crear Cuenta
* (Imagen de fondo)
* LOGO
* H2: Crear cuenta
* FORMULARIO: Nombre/Razón Social, N° Documento (DNI, CE/RUC, RUS), Correo electrónico, Clave.
* Botón CREAR  > Ir a 3’

####  Página 3': Ingresar tarjeta(s) débito/crédito
* (Imagen de fondo)
* LOGO
* H2: Confirma tus Datos
* Datos de la cuenta ingresados
* Opción EDITAR > Ir a 2’
* Opción AÑADIR TARJETA DÉBITO/CRÉDITO > Ir a 4’
* H2: Tarjetas asociadas
* Cuadro/lista de tarjetas asociadas con opciones de Editar, Eliminar en cada línea
* Botón OK > Ir a 1

####  Página 4':
* (Imagen de fondo)
* LOGO
* H2: Añadir tarjeta
* FORMULARIO: N° de tarjeta [funciones de validación y enmascarado del número de tarjeta], opciones (Visa, MasterCard, American Express, etc.), MM/AA, CVV
* Botón AÑADIR > ir a 3’


## 9. Prototipo

###  Inicial (papel)
![Prototipo en papel](/src/images/Lukeando_prototipo_papel.jpg)

###  Resumen Feedback
En el prototipo inicial, en la segunda página, se le daban al usuario las opciones de crear clave y crear cuenta como funciones separadas; como mejora se implementó en el prototipo final, la creación de clave como parte de la creación de cuenta.

###  Final (Figma)
![Prototipo final](/src/images/Lukeando_prototipo_final.png)
