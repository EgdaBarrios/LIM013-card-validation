# LUKEANDO: Multiplaforma “única” de pagos

![Lukeando](/src/images/Lukeando_final.png)


## Índice

* [1. Qué es mdLinks?](#1-qué-es-mdLinks?)


***

###  CONTEXTO
Escenario de pandemia y post-pandemia , donde el protocolo sanitario prioriza los mecanismos de mínima o nula exposición al virus SARS-COVID 19 (y otros) como el pago virtual. 

###  PÚBLICO OBJETIVO
Todo individuo/empresa que use un smartphone y disponga de cuenta(s) y tarjeta(s) en banco(s). 

### PROBLEMA
Manejo “único” de ingresos y egresos de dinero para usuarios (personas/empresas) con diferentes cuentas y bancos.
Plataforma multipagos que permite al usuario tanto recibir dinero, como debitarlo, y escoger, de entre sus cuentas y tarjetas, el método (débito/crédito) de recepción/pago -con cargo inmediato al mismo- de compras y/o pago de servicios.

###  OBJETIVO (IMPORTANCIA)
Ahorro de tiempo y recursos.

###  SOLUCIÓN PLANTEADA
Este proyecto abarca dos etapas: En la primera se crea la cuenta de usuario y la segunda es la aplicación de pago en sí.
De acuerdo con los objetivos del ejercicio, he desarrollado la primera, donde como parte de la creación de cuenta, el usuario debe ingresar sus tarjetas, y por ende validarlas. Adicionalmente, al ingresar el número de tarjeta, y con el fin de mantener la confidencialidad, éste se enmascarará, ocultando todos los dígitos menos los últimos cuatro.
La temática adoptada es la peruanidad. En las diferentes páginas de la aplicación se hace referencia al arte urbano local.

###  CÓMO FUNCIONA?
La aplicación para smartphone, estará disponible en App Store y Google Play para descargar. Una vez descargada en el dispositivo, se instalará y ejecutará con la aprobación del usuario.
La persona/negocio creará una cuenta de usuario donde ingresará y almacenará los datos de todas sus tarjetas de débito y crédito asociadas a sus cuentas bancarias, obteniendo un código QR único para cada una de ellas.
Permitiéndole recibir dinero asociando ese código a una factura o recibo emitido en el caso de empresas; y compartiéndolo por SMS, email, chat o redes sociales para recibir transferencias al instante en el caso de personas.
A la hora de realizar un pago/transferencia, el usuario escaneará el código QR proporcionado y seleccionará la cuenta o tarjeta de su cuenta de usuario para concretar la operación.
La aplicación generará y enviará a los correos de usuarios asociados a ambas cuentas (pagador/receptor) el comprobante de la operación.

###  DIAGRAMA DE FLUJO
![] (images/diagrama_de_flujo.jpg)

###  USER FLOW
FLUJO INICIAL:

Página 0: Home (Inicio)/Landing page
* (Imagen de fondo)
* LOGO
* Mensaje: Breve descripción de app
* Botón INGRESAR > Ir a 1

Página 1:
* (Imagen de fondo)
* LOGO
* H1: Nombre
* Opción CREAR CUENTA > Ir a 2’
* Opción CAMBIAR USUARIO
* Ingresar clave
* Botón OK > Ir a 2’’

Página 2: Crear Cuenta
* (Imagen de fondo)
* LOGO
* H2: Crear cuenta
* FORMULARIO: Nombre/Razón Social, N° Documento (DNI, CE/RUC, RUS), Correo electrónico, Clave.
* Botón CREAR  > Ir a 3’

Página 3’: Ingresar tarjeta(s) débito/crédito
* (Imagen de fondo)
* LOGO
* H2: Confirma tus Datos
* Datos de la cuenta ingresados
* Opción EDITAR > Ir a 2’
* Opción AÑADIR TARJETA DÉBITO/CRÉDITO > Ir a 4’
* H2: Tarjetas asociadas
* Cuadro/lista de tarjetas asociadas con opciones de Editar, Eliminar en cada línea
* Botón OK > Ir a 1

Página 4’:
* (Imagen de fondo)
* LOGO
* H2: Añadir tarjeta
* FORMULARIO: N° de tarjeta [funciones de validación y enmascarado del número de tarjeta], opciones (Visa, MasterCard, American Express, etc.), MM/AA, CVV
* Botón AÑADIR > ir a 3’

###  PROTOTIPO
INICIAL (papel):
![] (images/Lukeando_prototipo_papel1.JPG)
![] (images/Lukeando_prototipo_papel2.JPG)
![] (images/Lukeando_prototipo_papel3.JPG)

RESUMEN FEEDBACK:
En el prototipo inicial, en la segunda página, se le daban al usuario las opciones de crear clave y crear cuenta como funciones separadas; como mejora se implementó en el prototipo final, la creación de clave como parte de la creación de cuenta.

FINAL (Figma):
![] (images/Lukeando_prototipo_final.png)
