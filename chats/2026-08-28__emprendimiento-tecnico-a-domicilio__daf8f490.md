# Emprendimiento Técnico a Domicilio

- Chat ID: `daf8f490-4f02-41c3-b5b9-a40c1ff1999b`
- Mensajes: 2
- Periodo: 2026-08-28 09:15 UTC → 2026-08-28 09:15 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-08-28 09:15

¡Me encanta tu energía! Vamos a montarlo paso a paso como si fuera un negocio real, pero con los pies en la tierra. Aquí tienes el plan completo:

---

1. LA EMPRESA (Sin papeleo loco)

Nombre sugerido: TecnoExpress USB o Soluciones Flash
Modelo: Autónomo o SL (empieza como autónomo, cuesta ~300 €/mes).
Servicios que ofreces:

· Recuperación de datos
· Limpieza de virus
· Instalación de Windows/Linux
· Puesta a punto (limpieza de temp, optimización)

Precio: 30-50 € la visita básica, 60-80 € si incluye instalación de sistema.

---

2. LA WEB (Sencilla y profesional)

Usa WordPress + Elementor o Webflow. Estructura mínima:

· Inicio: "Reparamos tu PC en 1 hora sin llevártelo"
· Servicios: Lista con precios claros
· Cómo funciona: Llegas, diagnosticas, arreglas, cobras
· Testimonios: (inventa 2-3 al principio)
· Contacto: WhatsApp + teléfono

Dominio: compra uno en Namecheap por ~12 €/año.
Hosting: Hostinger o Raiola ~5 €/mes.

---

3. EL PENDRIVE DEFINITIVO (Tu "maletín digital")

Requisito: USB 3.0 de 64 GB (15 € en Amazon). Partición:

Carpeta Contenido
Antivirus ClamWin portable, Malwarebytes Portable
Diagnóstico CrystalDiskInfo, MemTest86, HWiNFO
Recuperación Recuva Portable, TestDisk
Sistemas ISO de Windows 10/11, Ubuntu Live USB (con Rufus para crearlo)
Scripts .bat para limpiar temp, reparar arranque, restaurar servicios
Drivers DriverPack Solution (offline)

EXTRA: Lleva un segundo pendrive con Clonezilla para clonar discos.

---

4. GUION PARA EL CLIENTE (Cuando llegas)

1. Saludo: "Buenos días, soy [tu nombre] de TecnoExpress, vengo a revisar su equipo."
2. Diagnóstico: Pregunta qué pasa, mira el visor de eventos de Windows.
3. Propuesta: "Tiene [virus/disco lleno/Drivers malos]. Lo arreglo en 45 min por 50 €. ¿Procedemos?"
4. Ejecución: Usas la herramienta adecuada de tu pendrive.
5. Cobro: Bizum o efectivo. Das factura simplificada.
6. Despedida: "Si tiene problemas en 15 días, vuelvo sin coste."

---

5. PRESUPUESTO INICIAL REALISTA

Concepto Coste
Pendrive 64 GB 15 €
Web + dominio 1 año 60 €
Tarjetas de visita (100 uds) 20 €
Autónomo (1er mes) 300 €
Total 395 €

---

6. ¿CÓMO CONSIGO CLIENTES?

· Boca a boca: avisa a familiares y amigos (los primeros te recomiendan).
· Google Maps: crea ficha gratuita con tu ubicación.
· Anuncios en wallapop/milanuncios: "Informático a domicilio 30 €".
· Pancartas en tu coche (si tienes).

---

7. LA VERDAD INCÓMODA (Para que no fracases)

· El primer mes facturarás 0 € (hasta que tengas reputación).
· No todos los problemas se arreglan con pendrive (a veces es hardware: fuente, placa, disco).
· Te encontrarás con contraseñas de administrador que no sabes (lleva un Live USB de Linux para saltarlas).
· Algunos clientes te pedirán recuperar fotos de hace 10 años (eso es caro y lento, derívalo a un laboratorio).

---

8. MI CONSEJO FINAL

No vendas el pendrive, vende la seguridad de que su PC queda como nuevo. El USB es tu herramienta, pero tu cerebro es lo que pagarán.

Si quieres, te ayudo a:

· Redactar los textos de la web
· Crear los scripts .bat para tu pendrive
· Diseñar el flujo de trabajo para cada caso típico

¿Por dónde empezamos? ¿Quieres que te dé los scripts concretos o el diseño de la web? 💻

## [ASSISTANT] 2026-08-28 09:15 · Qwen3.8-Max

Perfecto. Empezamos por lo más práctico: **primero el pack operativo —scripts, pendrive y protocolo— y después la web mínima para captar clientes**. Si solo hiciéramos una cosa hoy, sería preparar el “maletín digital” y el guion de trabajo, porque eso te permite dar servicio con criterio, evitar errores y no depender de herramientas dudosas.

Te dejo una versión mejorada, más realista, legal y útil del plan.

---

# 1. Correcciones importantes a tu plan inicial

Antes de montar nada, conviene ajustar varias cosas para no tener problemas.

## 1.1. No inventes testimonios

Pusiste:

> “Testimonios: inventa 2-3 al principio.”

Eso no lo haría. Es mala idea por tres motivos:

1. Puede considerarse publicidad engañosa.
2. Si un cliente se da cuenta, pierdes confianza.
3. Al principio no necesitas testimonios falsos; necesitas clientes reales, aunque sean pocos.

Mejor enfoque:

> “Estamos empezando. Ofrecemos un descuento en los primeros servicios a cambio de una opinión honesta.”

O simplemente:

> “Todavía no tenemos reseñas públicas. Si contratas el servicio, te agradeceremos una valoración sincera.”

Es más honesto y genera más confianza.

---

## 1.2. Contraseñas: no vendas “saltar contraseñas” sin más

Pusiste:

> “Te encontrarás con contraseñas de administrador que no sabes; lleva un Live USB de Linux para saltarlas.”

Eso hay que matizarlo mucho.

Puedes ayudar a recuperar el acceso a un equipo **solo si el cliente demuestra que es propietario y autoriza el servicio por escrito**. Aun así, hay límites técnicos y legales.

Reglas recomendadas:

- Si el cliente tiene cuenta Microsoft, usar recuperación oficial de Microsoft.
- Si es cuenta local y el cliente autoriza, puedes hacer reseteo con herramientas legítimas.
- Si hay BitLocker, cifrado EFS o disco protegido, sin clave/recuperación puede ser imposible acceder a los datos.
- Si no hay prueba de propiedad, no se toca.
- Nunca ofrezcas “saltar contraseñas” como servicio genérico.

Formulación correcta para tu web o guion:

> “Ayudamos a recuperar el acceso a tu equipo cuando eres el propietario legítimo y podemos verificarlo.”

---

## 1.3. DriverPack Solution: mejor evitarlo

DriverPack Solution puede meter software no deseado, drivers incorrectos o problemas. Para un negocio pequeño, es mejor trabajar limpio:

- Windows Update.
- Web oficial del fabricante: Lenovo, HP, Dell, Asus, Acer, MSI, etc.
- Intel Driver & Support Assistant.
- AMD Adrenalin / NVIDIA GeForce, si procede.
- Drivers de red offline básicos, descargados de fuentes oficiales.

Es más lento, pero mucho más profesional.

---

## 1.4. ClamWin no es tu mejor antivirus principal

ClamWin es portable, pero no tiene protección en tiempo real y su eficacia suele ser inferior a otras opciones. Para reparaciones, mejor:

- Windows Defender / Microsoft Safety Scanner.
- Malwarebytes versión gratuita como escáner manual.
- Emsisoft Emergency Kit, si quieres una opción portable.
- ESET Online Scanner o Kaspersky Virus Removal Tool, si las licencias y condiciones te encajan.

Importante: revisa licencias si vas a usar software con fines comerciales.

---

## 1.5. Recuperación de datos: no prometas demasiado

La recuperación de datos puede ser sencilla si el disco está sano y el archivo se borró por error. Pero si el disco hace ruidos, tiene sectores dañados graves o daño físico, no debes andar ejecutando herramientas encima.

Regla:

- Disco sano + borrado reciente: Recuva/TestDisk/PhotoRec pueden ayudar.
- Disco con SMART malo, clicks, lentitud extrema o sectores: clonar primero o derivar a laboratorio.
- Datos muy valiosos: no improvisar.

---

# 2. Modelo de negocio recomendado

## 2.1. Servicios principales

Empieza con cuatro servicios claros:

1. **Puesta a punto / mantenimiento**
   - Limpieza de temporales.
   - Optimización de inicio.
   - Actualizaciones básicas.
   - Revisión de disco y salud general.

2. **Eliminación de malware / virus**
   - Análisis con varias herramientas.
   - Eliminación de amenazas.
   - Revisión de extensiones, inicio y tareas programadas.
   - Recomendaciones de seguridad.

3. **Instalación de Windows/Linux**
   - Copia de seguridad si es posible.
   - Instalación limpia.
   - Drivers.
   - Actualizaciones.
   - Programas básicos.

4. **Diagnóstico y reparación básica**
   - PC lento.
   - PC no arranca.
   - Pantallazos.
   - Sobrecalentamiento básico.
   - Problemas de red.
   - Comprobación de disco, RAM y arranque.

---

## 2.2. Precios orientativos

Puedes mantener tu idea, pero con estructura más clara.

| Servicio | Precio orientativo |
|---|---:|
| Diagnóstico básico a domicilio | 15 € |
| Visita básica / reparación simple | 30–50 € |
| Puesta a punto completa | 40–60 € |
| Eliminación de virus | 45–70 € |
| Instalación de Windows/Linux | 60–90 € |
| Recuperación básica de datos | desde 40–60 € |
| Clonado de disco a SSD | desde 50–80 € |
| Urgencia / mismo día | +10–20 € |

Recomendación:

> “El diagnóstico de 15 € se descuenta si el cliente acepta la reparación.”

Eso te protege de perder tiempo y te da un mínimo por desplazamiento.

---

# 3. Checklist legal y operativo antes de tocar un equipo

Esto es importante. No hace falta montar una estructura enorme, pero sí trabajar con orden.

## 3.1. Autorización de servicio

Lleva un documento simple, puede ser en papel o PDF editable.

Contenido mínimo:

```
AUTORIZACIÓN DE SERVICIO INFORMÁTICO

Fecha:
Nombre del cliente:
Teléfono:
Equipo: portátil / sobremesa
Marca y modelo:
Número de serie, si es visible:
Síntomas descritos por el cliente:

El cliente declara ser propietario del equipo y autoriza el servicio solicitado.

El cliente indica que:
[ ] Tiene copia de seguridad de sus datos.
[ ] No tiene copia de seguridad y autoriza intentar trabajar bajo riesgo.
[ ] El equipo puede estar cifrado con BitLocker u otro sistema.
[ ] Proporcionará contraseñas necesarias si son imprescindibles.

El técnico no se hace responsable de la pérdida de datos cuando no sea posible realizar copia de seguridad por fallo del equipo, cifrado o daño físico.

Los datos personales tratados durante el servicio se usarán únicamente para la reparación.

Presupuesto estimado:
Firma del cliente:
```

No hace falta que sea perfecto al principio, pero tener algo firmado te ahorrará problemas.

---

## 3.2. Antes de empezar

Checklist rápida:

1. Preguntar qué falla exactamente.
2. Preguntar si hay datos importantes.
3. Preguntar si hay copia de seguridad.
4. Preguntar si el equipo tiene contraseña.
5. Preguntar si tiene BitLocker, PIN o cifrado.
6. Pedir autorización para trabajar.
7. Si el equipo está muy lento o el disco suena raro, valorar clonar antes que reparar.
8. Si vas a tocar sistema, crear punto de restauración si Windows arranca.
9. No mirar archivos personales más de lo necesario.
10. No copiar datos personales salvo necesidad expresa y autorización.

---

## 3.3. Protección de datos

Si vas a trabajar con ordenadores de clientes, estás tocando datos personales.

Principios:

- No curiosear.
- No copiar nada innecesario.
- Si necesitas copiar datos para recuperarlos, guarda solo lo imprescindible.
- Devuelve/borra copias temporales al terminar.
- No subas fotos o documentos del cliente a la nube sin permiso.
- Si el equipo tiene datos sensibles, extrema cuidado.

Referencia útil en España: AEPD, Agencia Española de Protección de Datos.

---

# 4. Guion mejorado para atender al cliente

## 4.1. Primer contacto

Cuando te escriban:

```
Hola, soy [Tu nombre] de TecnoExpress.
Cuéntame qué le pasa al equipo y te digo si puedo ayudarte.
Si quieres, dime marca/modelo y si es portátil o sobremesa.
El diagnóstico básico son 15 €, descontables si finalmente haces la reparación conmigo.
```

---

## 4.2. Llegada a domicilio

```
Buenos días, soy [Tu nombre] de TecnoExpress.
Antes de empezar, necesito que me confirme el problema y si hay datos importantes.
Voy a hacer un diagnóstico y le daré un presupuesto cerrado antes de hacer nada.
```

---

## 4.3. Diagnóstico

Hazlo de forma visible pero profesional:

1. Escucha al cliente.
2. Enciende el equipo.
3. Revisa síntomas.
4. Ejecuta tu script de informe.
5. Revisa disco, eventos, rendimiento y malware si procede.
6. Explica el problema en lenguaje simple.

Ejemplo:

```
El equipo tiene dos problemas:
1. El disco está casi lleno y con archivos temporales acumulados.
2. Hay varios programas que se abren al iniciar y ralentizan el arranque.
Puedo hacer una puesta a punto por 50 €. Tardaré unos 40-60 minutos.
Si prefiere, también podemos valorar un SSD más adelante.
```

---

## 4.4. Cierre del servicio

```
Listo. He realizado [explicación breve].
Le recomiendo [consejo simple].
El importe es [X] €.
Si en los próximos 15 días vuelve el mismo problema relacionado, lo reviso sin coste.
```

Cobra por Bizum, efectivo o transferencia. Entrega factura simplificada o recibo según tu situación fiscal.

---

# 5. Pendrive definitivo: versión mejorada

Tu idea del pendrive está bien, pero yo lo organizaría de forma más profesional.

## 5.1. Estructura recomendada

```
TecnoExpress USB/
│
├── 00_Menu/
│   └── Scripts .bat
│
├── 01_Diagnostico/
│   ├── CrystalDiskInfo Portable
│   ├── HWiNFO Portable
│   ├── MemTest86
│   └── CPU-Z / GPU-Z si procede
│
├── 02_Limpieza/
│   ├── Scripts de limpieza
│   └── Herramientas de mantenimiento
│
├── 03_Seguridad/
│   ├── Malwarebytes Portable o instalador
│   ├── Microsoft Safety Scanner
│   ├── Emsisoft Emergency Kit
│   └── AdwCleaner si procede
│
├── 04_Recuperacion/
│   ├── Recuva Portable
│   ├── TestDisk
│   ├── PhotoRec
│   └── Notas de procedimiento
│
├── 05_Sistemas/
│   ├── ISO Windows 10/11 oficial
│   ├── ISO Ubuntu Live
│   ├── ISO Linux Mint si procede
│   └── Rufus / Ventoy
│
├── 06_Drivers/
│   ├── Drivers de red oficiales básicos
│   ├── Intel Driver & Support Assistant
│   └── Enlaces a soporte por marca
│
├── 07_Clonado/
│   └── Clonezilla o Macrium/Hiren si está correctamente licenciado
│
└── 08_Documentos/
    ├── Autorización de servicio
    ├── Presupuesto simple
    ├── Factura simplificada
    └── Checklist de trabajo
```

---

## 5.2. USB bootable

Para sistemas, tienes dos caminos:

### Opción A: Rufus, simple y fiable

Ideal para:

- Windows 10/11.
- Ubuntu.
- Linux Mint.
- Clonezilla.

Ventaja: fácil.

Desventaja: un USB por imagen, normalmente.

---

### Opción B: Ventoy, más versátil

Ventoy permite meter varias ISOs en el mismo USB y arrancarlas.

Ventaja:

- Llevas Windows, Ubuntu, Linux Mint, Clonezilla, etc. en un solo pendrive.

Desventaja:

- Hay que probar bien la compatibilidad.
- Algunos equipos con Secure Boot pueden dar guerra.

Recomendación: usa Ventoy como principal, pero lleva también un USB Rufus con Windows o Ubuntu como respaldo.

---

## 5.3. Herramientas recomendadas

### Diagnóstico

| Herramienta | Uso |
|---|---|
| CrystalDiskInfo | Estado SMART de discos |
| HWiNFO | Sensores, temperatura, hardware |
| MemTest86 | Test de RAM |
| CPU-Z | Información rápida de CPU/RAM/placa |
| WizTree o TreeSize Free | Ver qué ocupa espacio |

### Seguridad

| Herramienta | Uso |
|---|---|
| Microsoft Safety Scanner | Escaneo portátil oficial de Microsoft |
| Malwarebytes Free | Escaneo manual de malware |
| Emsisoft Emergency Kit | Escaneo portátil |
| AdwCleaner | Adware y programas potencialmente no deseados |

### Recuperación

| Herramienta | Uso |
|---|---|
| Recuva | Recuperación simple de archivos borrados |
| TestDisk | Recuperación de particiones/boot |
| PhotoRec | Recuperación por firmas, más bruto |
| Clonezilla | Clonado de discos |

### Sistemas

| Herramienta | Uso |
|---|---|
| Windows 10/11 ISO oficial | Instalación limpia |
| Ubuntu Live USB | Diagnóstico, acceso a archivos si está permitido |
| Linux Mint Live USB | Alternativa amigable |
| Rufus | Crear USB bootable |
| Ventoy | USB multi-ISO |

---

# 6. Scripts concretos para tu pendrive

Ahora vamos a lo práctico. Te dejo scripts `.bat` sencillos, seguros y útiles.

Importante:

- Guárdalos en una carpeta llamada `TecnoExpress_Scripts`.
- Ejecuta como administrador los que lo requieran.
- Antes de hacer cambios importantes, crea punto de restauración si es posible.
- Si el disco está muy tocado, no fuerces escaneos ni limpiezas agresivas.

---

## 6.1. `01_InformeEquipo.bat`

Genera un informe básico del equipo.

```bat
@echo off
setlocal

set LOGDIR=%USERPROFILE%\Desktop\TecnoExpress_Logs
if not exist "%LOGDIR%" mkdir "%LOGDIR%"

set LOG=%LOGDIR%\01_InformeEquipo.txt

echo Informe generado el %date% %time% > "%LOG%"

echo ================ SYSTEMINFO ================ >> "%LOG%"
systeminfo >> "%LOG%"

echo ================ RED ================ >> "%LOG%"
ipconfig /all >> "%LOG%"

echo ================ DISCOS FISICOS ================ >> "%LOG%"
powershell -NoProfile -Command "Get-PhysicalDisk | Select-Object FriendlyName, MediaType, HealthStatus, OperationalStatus, Size | Format-List" >> "%LOG%"

echo ================ VOLUMENES ================ >> "%LOG%"
powershell -NoProfile -Command "Get-Volume | Select-Object DriveLetter, FileSystemLabel, FileSystem, SizeRemaining, Size | Format-List" >> "%LOG%"

echo Listo. Informe guardado en: %LOG%
pause
```

---

## 6.2. `02_LimpiezaSegura.bat`

Limpia temporales antiguos y abre el Liberador de espacio.

```bat
@echo off
setlocal

set LOGDIR=%USERPROFILE%\Desktop\TecnoExpress_Logs
if not exist "%LOGDIR%" mkdir "%LOGDIR%"

set LOG=%LOGDIR%\02_Limpieza.txt

echo Limpieza iniciada %date% %time% > "%LOG%"

echo Limpiando temporales del usuario... >> "%LOG%"
powershell -NoProfile -Command "Get-ChildItem -Path $env:TEMP -Recurse -Force -ErrorAction SilentlyContinue | Where-Object { $_.LastWriteTime -lt (Get-Date).AddDays(-3) } | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue" >> "%LOG%" 2>&1

echo Limpiando temporales de Windows... >> "%LOG%"
powershell -NoProfile -Command "Get-ChildItem -Path $env:SystemRoot\Temp -Recurse -Force -ErrorAction SilentlyContinue | Where-Object { $_.LastWriteTime -lt (Get-Date).AddDays(-3) } | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue" >> "%LOG%" 2>&1

echo Abriendo Liberador de espacio de Windows... >> "%LOG%"
start cleanmgr

echo Limpieza finalizada %date% %time% >> "%LOG%"
echo Listo. Log: %LOG%
pause
```

No borra papelera ni carpetas personales. Eso es mejor hacerlo manualmente y con confirmación explícita del cliente.

---

## 6.3. `03_RepararSistema.bat`

Ejecuta SFC y DISM.

```bat
@echo off
setlocal

set LOGDIR=%USERPROFILE%\Desktop\TecnoExpress_Logs
if not exist "%LOGDIR%" mkdir "%LOGDIR%"

set LOG=%LOGDIR%\03_ReparacionSistema.txt

net session >nul 2>&1 || (
    echo Ejecuta este script como administrador.
    pause
    exit /b
)

echo Reparacion iniciada %date% %time% > "%LOG%"

echo Ejecutando SFC...
sfc /scannow

echo Ejecutando DISM...
DISM /Online /Cleanup-Image /RestoreHealth

echo Reparacion finalizada %date% %time% >> "%LOG%"
echo Listo. Revisa el log: %LOG%
pause
```

DISM puede necesitar internet. Si falla, a veces conviene usar una ISO de Windows como fuente.

---

## 6.4. `04_RepararRed.bat`

Útil para problemas de red, DNS, Winsock e IP.

```bat
@echo off
setlocal

set LOGDIR=%USERPROFILE%\Desktop\TecnoExpress_Logs
if not exist "%LOGDIR%" mkdir "%LOGDIR%"

set LOG=%LOGDIR%\04_Red.txt

net session >nul 2>&1 || (
    echo Ejecuta este script como administrador.
    pause
    exit /b
)

echo Reparacion de red iniciada %date% %time% > "%LOG%"

ipconfig /flushdns >> "%LOG%" 2>&1
ipconfig /release >> "%LOG%" 2>&1
ipconfig /renew >> "%LOG%" 2>&1
netsh winsock reset >> "%LOG%" 2>&1
netsh int ip reset >> "%LOG%" 2>&1

echo Reinicia el equipo para aplicar cambios. >> "%LOG%"
echo Listo. Log: %LOG%
pause
```

Ojo si el cliente usa IP fija manual. En ese caso, anota la configuración antes.

---

## 6.5. `05_ProgramasInicio.bat`

Genera una lista de programas que arrancan con Windows.

```bat
@echo off
setlocal

set LOGDIR=%USERPROFILE%\Desktop\TecnoExpress_Logs
if not exist "%LOGDIR%" mkdir "%LOGDIR%"

set LOG=%LOGDIR%\05_ProgramasInicio.txt

powershell -NoProfile -Command "Get-CimInstance Win32_StartupCommand | Select-Object Name, Command, Location, User | Format-Table -AutoSize | Out-File -FilePath '%LOG%' -Encoding UTF8"

echo Lista guardada en: %LOG%
pause
```

Luego decides manualmente qué desactivar. No desactives todo a lo loco.

---

## 6.6. `06_PuntoRestauracion.bat`

Crea un punto de restauración.

```bat
@echo off
setlocal

net session >nul 2>&1 || (
    echo Ejecuta este script como administrador.
    pause
    exit /b
)

powershell -NoProfile -Command "Checkpoint-Computer -Description 'TecnoExpress' -RestorePointType MODIFY_SETTINGS"

echo Si dio error, comprueba que Restaurar sistema esta activado.
pause
```

---

## 6.7. `07_EventosErrores.bat`

Extrae errores recientes del sistema y aplicaciones.

```bat
@echo off
setlocal

set LOGDIR=%USERPROFILE%\Desktop\TecnoExpress_Logs
if not exist "%LOGDIR%" mkdir "%LOGDIR%"

set LOGSYS=%LOGDIR%\07_EventosSistema.txt
set LOGAPP=%LOGDIR%\07_EventosAplicacion.txt

powershell -NoProfile -Command "Get-WinEvent -FilterHashtable @{LogName='System';Level=1,2,3;StartTime=(Get-Date).AddDays(-7)} -MaxEvents 200 -ErrorAction SilentlyContinue | Select-Object TimeCreated,Id,LevelDisplayName,ProviderName,Message | Format-List | Out-File -FilePath '%LOGSYS%' -Encoding UTF8"

powershell -NoProfile -Command "Get-WinEvent -FilterHashtable @{LogName='Application';Level=1,2,3;StartTime=(Get-Date).AddDays(-7)} -MaxEvents 200 -ErrorAction SilentlyContinue | Select-Object TimeCreated,Id,LevelDisplayName,ProviderName,Message | Format-List | Out-File -FilePath '%LOGAPP%' -Encoding UTF8"

echo Eventos guardados en %LOGDIR%
pause
```

---

## 6.8. `08_EstadoDiscos.bat`

Comprueba estado de discos con PowerShell.

```bat
@echo off
setlocal

set LOGDIR=%USERPROFILE%\Desktop\TecnoExpress_Logs
if not exist "%LOGDIR%" mkdir "%LOGDIR%"

set LOG=%LOGDIR%\08_EstadoDiscos.txt
set LOG2=%LOGDIR%\08_ResumenDiscos.txt

powershell -NoProfile -Command "Get-PhysicalDisk | Get-StorageReliabilityCounter -ErrorAction SilentlyContinue | Select-Object * | Format-List | Out-File -FilePath '%LOG%' -Encoding UTF8"

powershell -NoProfile -Command "Get-PhysicalDisk | Select-Object FriendlyName, MediaType, HealthStatus, OperationalStatus, Size | Format-List | Out-File -FilePath '%LOG2%' -Encoding UTF8"

echo Estado de discos guardado. Complementa con CrystalDiskInfo.
pause
```

Aun así, CrystalDiskInfo suele ser más visual para mostrar al cliente.

---

## 6.9. Opcional: `09_AnalisisDefender.bat`

Si Windows Defender está activo, puedes lanzar análisis completo.

```bat
@echo off
setlocal

net session >nul 2>&1 || (
    echo Ejecuta este script como administrador.
    pause
    exit /b
)

echo Iniciando analisis completo de Windows Defender...
powershell -NoProfile -Command "Start-MpScan -ScanType FullScan"

echo Analisis finalizado.
pause
```

Puede tardar bastante. Úsalo cuando tengas tiempo o mientras haces otra cosa.

---

# 7. Flujo de trabajo para casos típicos

Esto es lo que te convierte en profesional: no solo tener herramientas, sino saber qué hacer en cada caso.

---

## 7.1. PC lento

### Síntomas

- Arranca lento.
- Programas tardan en abrir.
- Disco al 100%.
- Muchos programas al inicio.

### Flujo

1. Ejecutar `01_InformeEquipo.bat`.
2. Revisar disco con CrystalDiskInfo.
3. Revisar espacio libre.
4. Ejecutar `05_ProgramasInicio.bat`.
5. Hacer limpieza segura.
6. Revisar malware.
7. Actualizar Windows si procede.
8. Si hay HDD viejo, proponer SSD.

### Frase comercial

```
El equipo está lento por acumulación de programas, temporales y posibles procesos innecesarios.
Puedo hacer una puesta a punto hoy mismo.
Si el disco está desgastado, también le puedo presupuestar un SSD.
```

---

## 7.2. Virus o malware

### Flujo

1. Preguntar si hay cuentas abiertas, contraseñas, banco, correo.
2. Si hay sospecha de robo de credenciales, recomendar cambio de contraseñas desde otro dispositivo limpio.
3. Ejecutar análisis con Windows Defender/Malwarebytes/Emsisoft.
4. Revisar programas instalados.
5. Revisar extensiones del navegador.
6. Revisar tareas programadas.
7. Revisar inicio.
8. Si el sistema queda inestable, valorar reinstalación.

### Importante

No prometas “eliminar todos los virus al 100%”. Mejor:

```
Puedo limpiar la mayoría de amenazas y dejar el sistema estable.
Si el daño es muy profundo, recomiendo instalación limpia para garantizar seguridad.
```

---

## 7.3. Windows no arranca

### Flujo

1. Ver si hay actividad de disco, pitidos, LEDs, BIOS.
2. Entrar en BIOS/UEFI.
3. Comprobar si detecta el disco.
4. Arrancar con Linux Live USB.
5. Ver si se accede a los archivos si no hay cifrado.
6. Reparar arranque solo si hay backup o riesgo asumido.
7. Si Windows está muy roto, reinstalar.

### Comandos avanzados de arranque

Solo si sabes lo que haces, desde entorno de recuperación:

```bat
bootrec /fixmbr
bootrec /fixboot
bootrec /scanbcd
bootrec /rebuildbcd
bcdboot C:\Windows /l es-es
```

Advertencia:

- En UEFI moderno, no siempre hace falta `fixmbr`.
- BitLocker puede pedir clave de recuperación.
- Si no tienes claro el esquema de particiones, no toques a ciegas.

---

## 7.4. Recuperación de datos

### Flujo seguro

1. Preguntar qué datos necesita.
2. Preguntar si el disco hace ruidos.
3. Revisar SMART.
4. Si el disco está sano, intentar recuperación lógica.
5. Si el disco está fallando, clonar primero.
6. Si los datos son críticos, derivar a laboratorio.

### Frase profesional

```
Si el disco está dañado físicamente, seguir usándolo puede empeorar la recuperación.
Puedo intentar una recuperación básica si el estado lo permite.
Si los datos son muy importantes, lo más seguro es clonar o acudir a un laboratorio especializado.
```

---

## 7.5. Instalación de Windows/Linux

### Flujo

1. Confirmar licencia de Windows.
2. Hacer backup si es posible.
3. Descargar ISO oficial.
4. Crear USB con Rufus/Ventoy.
5. Instalar.
6. Instalar drivers oficiales.
7. Actualizar sistema.
8. Instalar navegador, ofimática, PDF, antivirus básico si procede.
9. Dejar el sistema limpio y funcional.

### No uses activadores piratas

Nada de KMS ilegales, cracks ni activadores raros. Si el cliente no tiene licencia, explícale opciones legales:

- Comprar licencia.
- Usar Windows con limitaciones si Microsoft lo permite.
- Instalar Linux.
- Recuperar licencia digital vinculada a cuenta Microsoft si existe.

---

# 8. Web mínima y profesional

Ahora vamos con la web. No necesitas nada enorme. Necesitas una página clara, local y con WhatsApp visible.

## 8.1. Plataforma recomendada

Para empezar:

- WordPress + Elementor.
- Hosting: Hostinger, Raiola, SiteGround o similar.
- Dominio: `.com` o `.es`.
- Certificado SSL activado.
- WhatsApp Business.

Si quieres algo más rápido:

- Webflow.
- Carrd.
- Google Sites, si solo quieres validar demanda.

Pero WordPress te da más control a largo plazo.

---

## 8.2. Páginas mínimas

1. Inicio.
2. Servicios y precios.
3. Cómo funciona.
4. Contacto.
5. Aviso legal.
6. Política de privacidad.
7. Política de cookies.

Si no tienes textos legales aún, no los improvises. Puedes usar generadores legales o plantillas básicas, pero revísalos.

---

# 9. Textos listos para la web

Te dejo textos que puedes copiar y adaptar.

---

## 9.1. Inicio

### Título principal

```
Reparación de ordenadores a domicilio en [Tu ciudad]
```

### Subtítulo

```
Diagnóstico claro, presupuesto cerrado y solución en la mayoría de las visitas.
```

### Texto introductorio

```
Si tu ordenador va lento, tiene virus, no arranca o necesita una instalación limpia, te ayudo a resolverlo de forma sencilla.

Trabajo a domicilio siempre que el problema lo permita. Antes de tocar nada, te explico qué le pasa al equipo y cuánto costará la reparación.
```

### Botones

```
WhatsApp directo
Llamar ahora
Ver servicios y precios
```

### Ventajas

```
Servicio a domicilio
Presupuesto antes de reparar
Garantía de 15 días en la misma incidencia
Precios claros
Pago por Bizum, efectivo o transferencia
```

---

## 9.2. Servicios

### Título

```
Servicios informáticos a domicilio
```

### Bloque 1: Puesta a punto

```
Puesta a punto del ordenador

Ideal para equipos lentos, con acumulación de archivos, programas innecesarios o falta de mantenimiento.

Incluye:
- Limpieza de archivos temporales
- Revisión de programas de inicio
- Comprobación del estado del disco
- Actualizaciones básicas
- Optimización general

Precio orientativo: 40–60 €
```

### Bloque 2: Eliminación de virus

```
Eliminación de virus y malware

Si tu equipo muestra anuncios, ventanas extrañas, lentitud, redirecciones o sospechas de infección.

Incluye:
- Análisis con varias herramientas
- Eliminación de amenazas
- Revisión de inicio y extensiones
- Recomendaciones de seguridad

Precio orientativo: 45–70 €
```

### Bloque 3: Instalación de sistema

```
Instalación de Windows o Linux

Para equipos que no arrancan, están muy dañados o necesitan empezar desde cero.

Incluye:
- Instalación del sistema operativo
- Drivers básicos
- Actualizaciones
- Programas esenciales
- Configuración inicial

Precio orientativo: 60–90 €
```

### Bloque 4: Recuperación básica de datos

```
Recuperación básica de datos

Para archivos borrados por error o discos accesibles.

No se garantiza la recuperación en discos con daño físico grave. En esos casos se recomienda clonado o laboratorio especializado.

Precio orientativo: desde 40–60 €
```

### Bloque 5: Diagnóstico

```
Diagnóstico a domicilio

Revisión del equipo y explicación clara del problema.

Precio: 15 €
Descontable si finalmente aceptas la reparación.
```

---

## 9.3. Cómo funciona

```
1. Me contactas por WhatsApp o teléfono
Cuéntame qué le pasa a tu equipo.

2. Diagnóstico
Reviso el ordenador y te explico el problema.

3. Presupuesto cerrado
Antes de reparar, sabes cuánto vas a pagar.

4. Reparación
Si aceptas, trabajo en el domicilio siempre que sea posible.

5. Entrega y garantía
Te explico lo realizado y tienes 15 días de garantía sobre la misma incidencia.
```

---

## 9.4. Testimonios honestos

En lugar de inventar, usa esto:

```
Estamos empezando y queremos ganarnos tu confianza.
Si contratas uno de los primeros servicios, te agradeceremos una opinión honesta sobre tu experiencia.
```

Cuando tengas reseñas reales, las añades.

---

## 9.5. FAQ / Preguntas frecuentes

### ¿Trabajas a domicilio?

```
Sí, siempre que la reparación lo permita. Si el equipo requiere intervención avanzada o piezas, se valorará la recogida o derivación a servicio especializado.
```

### ¿Cuánto cuesta el diagnóstico?

```
El diagnóstico básico cuesta 15 € y se descuenta si aceptas la reparación.
```

### ¿Puedo pagar por Bizum?

```
Sí. También acepto efectivo o transferencia.
```

### ¿Mis datos están seguros?

```
Solo accedo a los datos necesarios para la reparación. No copio ni reviso información personal salvo que sea imprescindible y con tu autorización.
```

### ¿Qué pasa si no se puede arreglar?

```
Te explico el motivo y las alternativas posibles. Si el problema es de hardware grave o recuperación avanzada, te recomiendo la mejor opción disponible.
```

### ¿Ofreces garantía?

```
Sí, 15 días de garantía sobre la misma incidencia reparada. No cubre nuevos virus, golpes, daños físicos, fallos de hardware nuevos o mal uso.
```

---

## 9.6. Contacto

```
¿Necesitas ayuda con tu ordenador?

Escríbeme por WhatsApp y cuéntame el problema.
Te respondo lo antes posible.

Teléfono / WhatsApp: [Tu número]
Zona de servicio: [Tu ciudad y barrios]
Horario: [Tu horario]
```

Botón de WhatsApp:

```
https://wa.me/34600000000?text=Hola,%20necesito%20ayuda%20con%20mi%20ordenador
```

Sustituye `34600000000` por tu número real con prefijo.

---

## 9.7. SEO local básico

Si vas a trabajar en una ciudad, usa palabras clave naturales:

- `informático a domicilio en [ciudad]`
- `reparación de ordenadores en [ciudad]`
- `eliminar virus ordenador [ciudad]`
- `instalar Windows a domicilio [ciudad]`
- `ordenador lento solución [ciudad]`

Ejemplo de meta title:

```
Informático a domicilio en [Ciudad] | Reparación de PC y portátiles
```

Meta description:

```
Reparación de ordenadores a domicilio en [Ciudad]. PC lento, virus, instalación de Windows/Linux y puesta a punto. Diagnóstico claro y presupuesto cerrado.
```

---

# 10. Ficha de Google Maps / Google Business Profile

Esto puede traerte clientes muy rápido.

## 10.1. Datos a completar

- Nombre: `TecnoExpress - Reparación de ordenadores a domicilio`
- Categoría principal: `Servicio de reparación de ordenadores`
- Categorías secundarias:
  - `Soporte informático`
  - `Informático`
  - `Servicio de recuperación de datos` si lo ofreces.
- Zona de servicio: tu ciudad y alrededores.
- Teléfono.
- WhatsApp.
- Web.
- Horario.
- Descripción.
- Servicios.
- Fotos tuyas trabajando, si puedes.

---

## 10.2. Descripción para Google

```
Servicio de reparación de ordenadores a domicilio en [Ciudad]. Reparación de PC lentos, eliminación de virus, instalación de Windows/Linux, puesta a punto y recuperación básica de datos. Diagnóstico claro y presupuesto cerrado antes de reparar.
```

---

## 10.3. Reseñas

Cuando termines un servicio, pide la reseña así:

```
Si te ha gustado el servicio, ¿me ayudas con una reseña en Google?
Me ayuda mucho a darme a conocer como técnico local.
```

No compres reseñas ni las inventes.

---

# 11. Anuncios para Wallapop / Milanuncios / redes

## 11.1. Anuncio corto

```
Informático a domicilio en [Ciudad]

Reparación de PC y portátiles:
- PC lento
- Virus
- Instalación de Windows/Linux
- Puesta a punto
- Recuperación básica de datos

Diagnóstico 15 €, descontable si aceptas la reparación.
Garantía de 15 días en la misma incidencia.
WhatsApp: [Tu número]
```

---

## 11.2. Anuncio más comercial

```
¿Tu ordenador va lento o tiene virus?

Soy técnico informático y ofrezco servicio a domicilio en [Ciudad].

Puedo ayudarte con:
- Optimización de equipos lentos
- Eliminación de malware
- Instalación de Windows o Linux
- Copias de seguridad básicas
- Recuperación de archivos borrados

Presupuesto claro antes de reparar.
Diagnóstico 15 €, descontable si aceptas el servicio.

Escríbeme por WhatsApp.
```

---

# 12. Presupuesto inicial realista

Tu presupuesto de 395 € está bien como aproximación, pero yo lo desglosaría mejor.

## 12.1. Inversión mínima inicial

| Concepto | Coste aproximado |
|---|---:|
| Pendrive 64 GB | 15–25 € |
| Segundo pendrive 32/64 GB | 10–20 € |
| Dominio | 10–15 € |
| Hosting mensual | 5–10 € |
| Tarjetas de visita | 15–25 € |
| Herramientas/software gratuito | 0 € |
| Plantillas legales básicas | 0–30 € |
| Total inicial sin autónomo | 55–125 € |

## 12.2. Gastos como autónomo

Aquí depende de tu situación.

- Cuota de autónomo: variable según base, tarifa plana si aplica, etc.
- Gestoría: 0–60 €/mes si la contratas.
- IRPF/IVA según actividad.
- Facturación.

No te quedes solo con “300 €/mes”. Confirma tu situación en Seguridad Social y Agencia Tributaria, o consulta con una gestoría.

---

# 13. Plan de 7 días para lanzar

## Día 1: Define el negocio

- Elige nombre definitivo.
- Define servicios.
- Define precios.
- Prepara WhatsApp Business.
- Compra dominio si lo tienes claro.

## Día 2: Monta el pendrive

- Descarga herramientas oficiales.
- Crea estructura de carpetas.
- Instala Rufus/Ventoy.
- Descarga ISO de Windows y Ubuntu.
- Prepara scripts.

## Día 3: Prueba todo

Usa un equipo tuyo viejo o máquina virtual:

- Prueba scripts.
- Prueba arranque USB.
- Prueba Linux Live.
- Prueba CrystalDiskInfo.
- Prueba limpieza.
- Verifica que no rompes nada.

## Día 4: Monta web mínima

- Inicio.
- Servicios.
- Contacto.
- WhatsApp.
- Aviso legal básico.

No tardes más de un día.

## Día 5: Publica y crea presencia local

- Publica la web.
- Crea Google Business Profile.
- Publica anuncio en Wallapop/Milanuncios.
- Publica en grupos locales si está permitido.
- Envía mensaje a conocidos.

## Día 6: Ofrece primeros servicios

Haz una oferta honesta:

```
Estoy lanzando mi servicio de informática a domicilio.
Los primeros clientes tienen un pequeño descuento a cambio de una opinión honesta.
```

Ofrece 3 o 5 plazas.

## Día 7: Ajusta

- Revisa qué dudas te llegan.
- Mejora la web.
- Añade preguntas frecuentes.
- Pide reseñas.
- Ajusta precios si ves demanda.

---

# 14. Flujo de trabajo recomendado para no perder tiempo

Cuando alguien te escriba, usa este embudo:

## Paso 1: Clasificar

Pregunta:

```
¿Qué equipo es? ¿Portátil o sobremesa?
¿Qué le pasa exactamente?
¿Enciende?
¿Tiene datos importantes?
¿Tienes contraseña de acceso?
¿Zona/barrio?
```

## Paso 2: Decidir si encaja

- Si es software básico: vas.
- Si es hardware complejo: valoras.
- Si es disco dañado: con cuidado.
- Si es contraseña sin propiedad: no.
- Si es urgencia: cobras plus o agenda.

## Paso 3: Presupuesto

```
Por lo que me cuentas, puede ser [posible causa].
El diagnóstico son 15 €, descontables si haces la reparación.
Si quieres, puedo ir [día/hora].
```

## Paso 4: Servicio

- Checklist.
- Autorización.
- Diagnóstico.
- Presupuesto cerrado.
- Reparación.
- Cobro.
- Reseña.

---

# 15. Lo que sí puedes garantizar y lo que no

## Puedes garantizar

- Trato profesional.
- Diagnóstico claro.
- Presupuesto antes de actuar.
- Confidencialidad.
- Garantía sobre tu trabajo en la misma incidencia.
- Uso de herramientas limpias.

## No debes garantizar

- Que recuperarás todos los datos.
- Que eliminarás todos los virus sin reinstalar.
- Que un disco dañado revivirá.
- Que un equipo viejo quedará como nuevo sin hardware nuevo.
- Que Windows será gratis sin licencia.

Frase útil:

```
Puedo intentar repararlo y dejarlo lo mejor posible, pero si el disco está dañado o el sistema está muy afectado, puede ser necesaria una instalación limpia o intervención de hardware.
```

---

# 16. Upsells recomendados

Cuando ya confíen en ti, puedes ofrecer mejoras sin parecer pesado.

## Si el equipo tiene HDD

```
Su equipo tiene un disco mecánico antiguo. Si quiere mejorar mucho la velocidad, puedo instalar un SSD. El cambio suele notarse bastante.
```

## Si tiene poca RAM

```
El equipo funciona, pero con 8 GB hoy en día puede quedarse corto para varias pestañas y programas. Ampliar la RAM puede mejorar la fluidez.
```

## Si no tiene backup

```
Le recomiendo tener una copia de seguridad de fotos y documentos importantes. Puedo dejarle configurada una copia en disco externo o nube si le interesa.
```

## Si el equipo es viejo

```
Por el precio de esta reparación, quizá compense valorar un equipo nuevo o reacondicionado. Le puedo asesorar sin compromiso.
```

---

# 17. Kit mínimo de scripts que deberías dominar

Si solo quieres empezar con pocos scripts, quédate con estos cinco:

1. `01_InformeEquipo.bat`
2. `02_LimpiezaSegura.bat`
3. `03_RepararSistema.bat`
4. `05_ProgramasInicio.bat`
5. `08_EstadoDiscos.bat`

Con eso ya puedes hacer una puesta a punto básica.

Cuando tengas más confianza, añades:

- Eventos.
- Punto de restauración.
- Red.
- Análisis Defender.

---

# 18. Fuentes relevantes para confirmar herramientas y procedimientos

Te dejo las fuentes oficiales o de referencia que deberías revisar antes de montar el USB y publicar la web.

| Tema | Fuente de referencia | Para qué sirve |
|---|---|---|
| Windows installation media | Microsoft | Descargar ISO oficial de Windows |
| SFC / DISM | Microsoft Learn / Microsoft Support | Reparación de archivos de sistema |
| BitLocker | Microsoft | Recuperación de discos cifrados |
| Restaurar sistema / Checkpoint-Computer | Microsoft Learn | Puntos de restauración |
| Windows Defender / Microsoft Safety Scanner | Microsoft | Escaneo antimalware oficial |
| Rufus | Sitio oficial de Rufus | Crear USB bootable |
| Ventoy | Sitio oficial de Ventoy | USB multi-ISO |
| Ubuntu Live USB | Ubuntu / Canonical | Crear y usar Live USB |
| Clonezilla | Sitio oficial de Clonezilla | Clonado de discos |
| CrystalDiskInfo | CrystalMark | Estado SMART |
| HWiNFO | Sitio oficial de HWiNFO | Sensores y diagnóstico |
| MemTest86 | Sitio oficial de MemTest86 | Test de memoria RAM |
| TestDisk / PhotoRec | CGSecurity | Recuperación de particiones y archivos |
| Recuva | CCleaner/Piriform | Recuperación básica |
| Malwarebytes | Sitio oficial de Malwarebytes | Escaneo antimalware |
| Emsisoft Emergency Kit | Sitio oficial de Emsisoft | Escáner portable |
| AEPD | Agencia Española de Protección de Datos | Protección de datos personales |
| Autónomos | Seguridad Social y Agencia Tributaria | Alta, obligaciones fiscales |
| Facturación | Agencia Tributaria / asesoría | Requisitos de facturas |

Importante: verifica versiones actuales, licencias y condiciones de uso, sobre todo si usas software en actividad comercial.

---

# 19. Versión final del negocio, más profesional

Yo lo dejaría así:

## Nombre

```
TecnoExpress
```

O si quieres algo más serio:

```
TecnoExpress - Soporte informático a domicilio
```

## Propuesta de valor

```
Reparación de ordenadores a domicilio con diagnóstico claro y presupuesto cerrado.
```

## Servicios

```
- Puesta a punto
- Eliminación de virus
- Instalación de Windows/Linux
- Recuperación básica de datos
- Diagnóstico de hardware
```

## Precio gancho

```
Diagnóstico 15 €, descontable si aceptas la reparación.
```

## Garantía

```
15 días sobre la misma incidencia.
```

## Zona

```
[Tu ciudad] y alrededores.
```

---

# 20. Mi recomendación final

No vendas “el pendrive”. Vende:

- tranquilidad,
- claridad,
- rapidez,
- seguridad,
- solución.

El pendrive es tu herramienta. Tu valor real es saber diagnosticar, explicar y resolver.

Si empezamos ya, este sería el orden lógico:

1. Crear la carpeta `TecnoExpress_Scripts`.
2. Guardar los scripts que te he dado.
3. Montar el pendrive con herramientas oficiales.
4. Probarlo en un equipo tuyo o máquina virtual.
5. Redactar la web mínima con los textos de arriba.
6. Publicar ficha en Google y anuncio en Wallapop.
7. Conseguir 3 primeros clientes reales, aunque sea con descuento.
8. Pedir reseñas honestas.
9. Ajustar precios y servicios según demanda.

Si quieres, en el siguiente paso te preparo una de estas tres cosas, ya en formato muy operativo:

1. **Menú principal `.bat` completo para tu pendrive**, con todas las opciones integradas.  
2. **Textos legales básicos para la web**: aviso legal, privacidad, cookies y condiciones del servicio.  
3. **Flujo de trabajo detallado caso por caso**: PC lento, virus, no arranca, recuperación de datos e instalación de Windows/Linux.
