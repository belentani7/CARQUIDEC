# Windows Disk Doctor Safe Cleanup

- Chat ID: `3b485851-e76e-4614-a01f-dd2d607a265a`
- Mensajes: 2
- Periodo: 2026-07-31 08:12 UTC → 2026-07-31 08:12 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-07-31 08:12

un comando para opencode hacer una limpieza profunda segura y un recovery de windows nose algo muy bueno sano un windows disk doctor --fix sin borrar mis archivos, solo si realmente es duplicado de verdad no solo por nombre

## [ASSISTANT] 2026-07-31 08:12 · Qwen3.8-Max-Preview

## 1. Resumen ejecutivo — comité multidisciplinar

**Explícito:** quieres un “comando” para OpenCode que haga limpieza profunda segura, recuperación/reparación de Windows, tipo `windows disk doctor --fix`, sin borrar archivos personales y eliminando/marcando solo duplicados **reales por contenido**, no por nombre.

**Implícito:** necesitas algo ejecutable, auditable, reversible, sin “PC cleaner” peligroso, y con criterio criptográfico para duplicados: mismo tamaño + hash SHA-256, no coincidencia de nombre.

**Periférico:** si el disco está fallando, ningún “fix” es seguro sin antes clonar/backupear; si Windows no arranca, el flujo es WinRE; si quieres recuperar archivos borrados, eso es `winfr`, no reparación de sistema.

**Tesis operativa:** no existe un comando oficial `windows disk doctor --fix` en Windows. Lo más sano es una secuencia con herramientas oficiales Microsoft: **DISM**, **SFC**, **CHKDSK/Repair-Volume**, **Optimize-Volume**, reportes SMART/eventos, y un script de duplicados por hash. La limpieza de componentes de Windows puede borrar paquetes antiguos del almacén de componentes, pero **no tus documentos**; si quieres “cero borrado absoluto”, omite `StartComponentCleanup`.

---

## 2. Comando mínimo seguro para pegar en PowerShell elevado

Ejecuta **PowerShell como administrador**. Este bloque repara imagen, system files, escanea volumen, optimiza y analiza componentes. **No borra tus archivos personales**.

```powershell
# PowerShell elevado
$sys = $env:SystemDrive -replace ':',''

# Punto de restauración si System Protection está disponible
Enable-ComputerRestore -Drive "$($env:SystemDrive)\"
Checkpoint-Computer -Description "Pre-limpieza-segura" -RestorePointType MODIFY_SETTINGS

# Reparar componente store usando Windows Update
Repair-WindowsImage -Online -RestoreHealth

# Reparar archivos de sistema
sfc.exe /scannow

# Escaneo de sistema de archivos sin fix agresivo
chkdsk.exe "$($env:SystemDrive)" /scan
Repair-Volume -DriveLetter $sys -Scan

# Optimización segura: TRIM en SSD, mantenimiento recomendado
Optimize-Volume -DriveLetter $sys -Verbose

# Analizar almacén de componentes; no borra todavía
Dism.exe /Online /Cleanup-Image /AnalyzeComponentStore

# Limpieza segura de componentes superseded; borra backups antiguos de Windows, no documentos
Dism.exe /Online /Cleanup-Image /StartComponentCleanup
```

Si quieres **cero borrado incluso de componentes antiguos**, elimina la última línea:

```powershell
Dism.exe /Online /Cleanup-Image /StartComponentCleanup
```

---

## 3. Instrucción maestra para OpenCode

Si OpenCode es un agente que ejecuta comandos, no le pidas “arregla Windows” sin restricciones. Pega esto como prompt/orden:

```text
Actúa como administrador de sistemas Windows con principio de mínimo daño. Ejecuta PowerShell elevado. No uses Remove-Item, format, diskpart clean, cleanmgr /autoclean, chkdsk /f, chkdsk /r, ni registry cleaners sin confirmación explícita.

Orden:
1. Crea carpeta de reportes en el escritorio con fecha/hora.
2. Crea punto de restauración si existe System Protection.
3. Ejecuta Repair-WindowsImage -Online -RestoreHealth.
4. Ejecuta sfc.exe /scannow.
5. Ejecuta chkdsk C: /scan y Repair-Volume -DriveLetter C -Scan.
6. Ejecuta Dism /Online /Cleanup-Image /AnalyzeComponentStore.
7. Ejecuta Dism /Online /Cleanup-Image /StartComponentCleanup solo si el usuario acepta limpieza de componentes antiguos.
8. Ejecuta Optimize-Volume -DriveLetter C.
9. Genera reporte SMART con Get-PhysicalDisk y Get-StorageReliabilityCounter.
10. Exporta eventos de disco/NTFS de los últimos 30 días.
11. Para duplicados personales: escanea Documents, Downloads, Pictures, Videos, Music; agrupa por tamaño y luego por SHA256; no uses el nombre como criterio.
12. Genera CSV con SizeBytes, SHA256, Path, LastWriteTimeUtc, CreationTimeUtc, DuplicateGroup, Keep.
13. Marca Keep=True para la copia más antigua por LastWriteTimeUtc y Path; el resto Keep=False.
14. No borres nada. Si propones cuarentena, usa Move-Item con simulación previa y pide confirmación.
15. Devuelve ruta de reportes, resumen de errores, espacio recuperable por duplicados y comandos recomendados.
```

---

## 4. Matriz de comandos, riesgo y confirmación documental

| Objetivo | Comando | ¿Borra? | Riesgo | Fuente relevante |
|---|---|---:|---|---|
| Punto de restauración | `Enable-ComputerRestore`, `Checkpoint-Computer` | No | Bajo | Microsoft Learn, `Checkpoint-Computer` |
| Reparar imagen de Windows | `Repair-WindowsImage -Online -RestoreHealth` | No documentos; modifica componentes | Medio si no hay fuente sana | Microsoft Learn, DISM |
| Reparar archivos de sistema | `sfc.exe /scannow` | No documentos; repara system files | Medio | Microsoft Learn, SFC |
| Escaneo de volumen | `chkdsk C: /scan` o `Repair-Volume -Scan` | No | Bajo | Microsoft Learn, CHKDSK/Repair-Volume |
| Reparación puntual | `Repair-Volume -SpotFix` o `chkdsk /spotfix` | Puede corregir metadata | Medio | Microsoft Learn |
| Reparación profunda | `chkdsk /f`, `chkdsk /r` | Puede perder archivos ya corruptos | Alto si disco falla | Microsoft Learn |
| Limpieza componentes | `Dism /Online /Cleanup-Image /StartComponentCleanup` | Borra componentes antiguos, no documentos | Bajo/Medio | Microsoft Learn, DISM |
| Limpieza más agresiva | `Dism /Online /Cleanup-Image /StartComponentCleanup /ResetBase` | Borra versiones previas de updates | Medio | Microsoft Learn, DISM |
| Optimizar SSD/volumen | `Optimize-Volume -DriveLetter C` | No | Bajo | Microsoft Learn, `Optimize-Volume` |
| Salud física disco | `Get-PhysicalDisk`, `Get-StorageReliabilityCounter` | No | Bajo | Microsoft Learn, Storage |
| Eventos disco/NTFS | `Get-WinEvent` System providers | No | Bajo | Microsoft Learn, `Get-WinEvent` |
| Duplicados por contenido | `Get-FileHash -Algorithm SHA256` | No | Bajo | Microsoft Learn; NIST FIPS 180-4 |
| Cuarentena reversible | `Move-Item -WhatIf` | Mueve, no borra | Medio si rompe referencias | Microsoft Learn, PowerShell |
| Recuperar archivos borrados | `winfr` | No si destino es otro disco | Medio | Microsoft, Windows File Recovery |
| Registry cleaners | No recomendado | Sí, potencial | Alto | Microsoft KB2563254 |

---

## 5. Script completo: salud Windows segura sin borrar archivos

Guárdalo como:

```text
C:\Scripts\Salud-Windows-Segura.ps1
```

Contenido:

```powershell
#Requires -RunAsAdministrator
[CmdletBinding()]
param(
    [string]$ReportRoot = (Join-Path ([Environment]::GetFolderPath('Desktop')) "WindowsHealth_$(Get-Date -Format yyyyMMdd_HHmmss)"),
    [switch]$SkipComponentCleanup,
    [switch]$SkipRestorePoint
)

$ErrorActionPreference = 'Continue'
New-Item -ItemType Directory -Force -Path $ReportRoot | Out-Null
Start-Transcript -Path (Join-Path $ReportRoot '00_transcript.txt') -Force | Out-Null

$info = Join-Path $ReportRoot '01_systeminfo.txt'
"=== $(Get-Date) ===" | Out-File -LiteralPath $info
systeminfo | Out-File -LiteralPath $info -Append

Get-Volume |
    Export-Csv -LiteralPath (Join-Path $ReportRoot '02_volumes.csv') -NoTypeInformation -Encoding UTF8

Get-PhysicalDisk |
    Select-Object FriendlyName, MediaType, HealthStatus, OperationalStatus,
        @{n='SizeGB';e={[math]::Round($_.Size/1GB,2)}}, SerialNumber |
    Export-Csv -LiteralPath (Join-Path $ReportRoot '03_physicaldisk.csv') -NoTypeInformation -Encoding UTF8

Get-PhysicalDisk |
    Get-StorageReliabilityCounter -ErrorAction SilentlyContinue |
    Export-Csv -LiteralPath (Join-Path $ReportRoot '04_smart.csv') -NoTypeInformation -Encoding UTF8

& fsutil.exe dirty query $env:SystemDrive |
    Out-File -LiteralPath (Join-Path $ReportRoot '05_fsutil_dirty.txt')

Get-WinEvent -FilterHashtable @{LogName='System'; StartTime=(Get-Date).AddDays(-30)} -MaxEvents 20000 -ErrorAction SilentlyContinue |
    Where-Object { $_.ProviderName -match 'disk|Ntfs|volmgr|storahci|DiskDiagnostic|Microsoft-Windows-Ntfs' } |
    Select-Object TimeCreated, Id, ProviderName, LevelDisplayName, Message |
    Export-Csv -LiteralPath (Join-Path $ReportRoot '06_disk_events.csv') -NoTypeInformation -Encoding UTF8

if (-not $SkipRestorePoint) {
    try {
        Enable-ComputerRestore -Drive "$($env:SystemDrive)\" -ErrorAction Stop
        Checkpoint-Computer -Description "Pre-limpieza-segura" -RestorePointType MODIFY_SETTINGS -ErrorAction Stop
        "Restore point creado $(Get-Date)" | Out-File -LiteralPath (Join-Path $ReportRoot '07_restorepoint.txt')
    }
    catch {
        "No se pudo crear restore point: $($_.Exception.Message)" |
            Out-File -LiteralPath (Join-Path $ReportRoot '07_restorepoint.txt')
    }
}

& dism.exe /Online /Cleanup-Image /AnalyzeComponentStore |
    Tee-Object -FilePath (Join-Path $ReportRoot '08_dism_analyze.txt')

Repair-WindowsImage -Online -RestoreHealth |
    Tee-Object -FilePath (Join-Path $ReportRoot '09_dism_restorehealth.txt')

& sfc.exe /scannow |
    Tee-Object -FilePath (Join-Path $ReportRoot '10_sfc.txt')

& chkdsk.exe $env:SystemDrive /scan |
    Tee-Object -FilePath (Join-Path $ReportRoot '11_chkdsk_scan.txt')

if (Get-Command Repair-Volume -ErrorAction SilentlyContinue) {
    $sys = $env:SystemDrive -replace ':',''
    Repair-Volume -DriveLetter $sys -Scan |
        Tee-Object -FilePath (Join-Path $ReportRoot '12_repair_volume_scan.txt')
}

$sys = $env:SystemDrive -replace ':',''
Optimize-Volume -DriveLetter $sys -Verbose |
    Tee-Object -FilePath (Join-Path $ReportRoot '13_optimize_volume.txt')

if (-not $SkipComponentCleanup) {
    & dism.exe /Online /Cleanup-Image /StartComponentCleanup |
        Tee-Object -FilePath (Join-Path $ReportRoot '14_dism_component_cleanup.txt')
}

Stop-Transcript
Write-Host "Listo. Reportes en: $ReportRoot"
```

Ejecución:

```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process -Force
Unblock-File C:\Scripts\Salud-Windows-Segura.ps1
C:\Scripts\Salud-Windows-Segura.ps1
```

Para no limpiar componentes antiguos:

```powershell
C:\Scripts\Salud-Windows-Segura.ps1 -SkipComponentCleanup
```

---

## 6. Script completo: duplicados reales por SHA-256, no por nombre

Guárdalo como:

```text
C:\Scripts\Find-DuplicatesByHash.ps1
```

Contenido:

```powershell
#Requires -Version 5.1
[CmdletBinding()]
param(
    [string[]]$ScanRoots = @(
        (Join-Path $env:USERPROFILE 'Documents'),
        (Join-Path $env:USERPROFILE 'Downloads'),
        (Join-Path $env:USERPROFILE 'Pictures'),
        (Join-Path $env:USERPROFILE 'Videos'),
        (Join-Path $env:USERPROFILE 'Music')
    ),
    [string]$OutCsv = (Join-Path ([Environment]::GetFolderPath('Desktop')) "duplicados_hash_$(Get-Date -Format yyyyMMdd_HHmmss).csv"),
    [long]$MinBytes = 1MB,
    [switch]$Force
)

$ErrorActionPreference = 'SilentlyContinue'

$excludeDirs = @(
    '$Recycle.Bin',
    'System Volume Information',
    'Windows',
    'Program Files',
    'Program Files (x86)',
    'ProgramData',
    'AppData',
    'node_modules',
    '.git',
    '.vscode',
    '.cache',
    'OneDrive.tmp'
)

$excludeRegex = '\\(' + (($excludeDirs | ForEach-Object { [regex]::Escape($_) }) -join '|') + ')\\'

$files = foreach ($root in $ScanRoots) {
    if (Test-Path -LiteralPath $root) {
        $params = @{
            LiteralPath = $root
            File        = $true
            Recurse     = $true
            ErrorAction = 'SilentlyContinue'
        }
        if ($Force) { $params.Force = $true }

        Get-ChildItem @params |
            Where-Object {
                $_.Length -ge $MinBytes -and
                $_.FullName -notmatch $excludeRegex -and
                (-not $_.Attributes.HasFlag([IO.FileAttributes]::Offline))
            }
    }
}

$hashed = $files |
    Group-Object Length |
    Where-Object Count -gt 1 |
    ForEach-Object {
        foreach ($f in $_.Group) {
            $h = Get-FileHash -LiteralPath $f.FullName -Algorithm SHA256 -ErrorAction SilentlyContinue
            if ($h.Hash) {
                [pscustomobject]@{
                    SizeBytes        = [long]$f.Length
                    SHA256           = $h.Hash
                    Path             = $f.FullName
                    LastWriteTimeUtc = $f.LastWriteTimeUtc
                    CreationTimeUtc  = $f.CreationTimeUtc
                    Attributes       = "$($f.Attributes)"
                }
            }
        }
    }

$dupes = $hashed |
    Group-Object { $_.SHA256 + ':' + $_.SizeBytes } |
    Where-Object Count -gt 1 |
    ForEach-Object {
        $groupName = $_.Name
        $ordered = $_.Group | Sort-Object LastWriteTimeUtc, Path
        $keepPath = $ordered[0].Path

        foreach ($item in $ordered) {
            $item |
                Add-Member -MemberType NoteProperty -Name DuplicateGroup -NotePropertyValue $groupName -PassThru |
                Add-Member -MemberType NoteProperty -Name Keep -NotePropertyValue ($item.Path -eq $keepPath) -PassThru
        }
    }

$dupes |
    Export-Csv -LiteralPath $OutCsv -NoTypeInformation -Encoding UTF8

Write-Host "Duplicados por SHA256+Size -> $OutCsv"
```

Ejecución:

```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process -Force
Unblock-File C:\Scripts\Find-DuplicatesByHash.ps1
C:\Scripts\Find-DuplicatesByHash.ps1
```

Para escanear también ocultos/sistema:

```powershell
C:\Scripts\Find-DuplicatesByHash.ps1 -Force
```

Para incluir archivos pequeños, por ejemplo desde 0 bytes:

```powershell
C:\Scripts\Find-DuplicatesByHash.ps1 -MinBytes 0
```

---

## 7. Cómo interpretar el CSV de duplicados

El CSV contiene grupos por `SHA256 + SizeBytes`. Cada grupo tiene varios archivos idénticos por contenido. La columna `Keep` es una sugerencia:

- `Keep=True`: conservar.
- `Keep=False`: duplicado candidato a mover/cuarentena.
- Criterio de conservación: más antiguo por `LastWriteTimeUtc`, luego ruta alfabética.

Contar grupos duplicados:

```powershell
Import-Csv .\duplicados_hash_*.csv |
    Group-Object DuplicateGroup |
    Measure-Object
```

Calcular espacio recuperable sin borrar todavía:

```powershell
Import-Csv .\duplicados_hash_*.csv |
    Where-Object { $_.Keep -eq 'False' } |
    Measure-Object -Property SizeBytes -Sum |
    Select-Object Count, @{n='GB';e={[math]::Round($_.Sum/1GB,2)}}
```

Ver solo candidatos a mover:

```powershell
Import-Csv .\duplicados_hash_*.csv |
    Where-Object { $_.Keep -eq 'False' } |
    Select-Object SizeBytes, Path, SHA256, LastWriteTimeUtc
```

---

## 8. Script opcional: cuarentena reversible, sin borrado definitivo

Guárdalo como:

```text
C:\Scripts\Quarantine-Duplicates.ps1
```

Contenido:

```powershell
[CmdletBinding()]
param(
    [Parameter(Mandatory)]
    [string]$Csv,

    [string]$Quarantine = (Join-Path ([Environment]::GetFolderPath('Desktop')) "QuarantineDup_$(Get-Date -Format yyyyMMdd_HHmmss)"),

    [switch]$Apply
)

New-Item -ItemType Directory -Force -Path $Quarantine | Out-Null

$rows = Import-Csv -LiteralPath $Csv |
    Where-Object { $_.Keep -eq 'False' }

foreach ($r in $rows) {
    if (-not (Test-Path -LiteralPath $r.Path)) { continue }

    $name = '{0}_{1}{2}' -f `
        $r.SHA256.Substring(0,12),
        [IO.Path]::GetFileNameWithoutExtension($r.Path),
        [IO.Path]::GetExtension($r.Path)

    $dest = Join-Path $Quarantine $name

    if ($Apply) {
        Move-Item -LiteralPath $r.Path -Destination $dest -ErrorAction SilentlyContinue
        Write-Host "MOVIDO: $($r.Path) -> $dest"
    }
    else {
        Write-Host "SIMULADO: Move '$($r.Path)' -> '$dest'"
    }
}
```

Simular sin mover nada:

```powershell
C:\Scripts\Quarantine-Duplicates.ps1 -Csv .\duplicados_hash_XXXX.csv
```

Mover realmente a cuarentena después de revisar:

```powershell
C:\Scripts\Quarantine-Duplicates.ps1 -Csv .\duplicados_hash_XXXX.csv -Apply
```

Esto **no elimina** los archivos: los mueve a una carpeta de cuarentena. Aun así, mover duplicados puede romper accesos directos, referencias de aplicaciones o bibliotecas. Hazlo por lotes.

---

## 9. Análisis por casos

### Caso A — Windows inestable pero archivos personales intactos

Síntomas: crashes, updates fallidos, DLLs corruptas, servicios que fallan.

Ruta correcta:

```powershell
Repair-WindowsImage -Online -RestoreHealth
sfc.exe /scannow
```

Si `RestoreHealth` falla sin internet, usa ISO de Windows como fuente:

```powershell
Get-WindowsImage -ImagePath D:\sources\install.wim
```

Luego, con el índice correcto:

```powershell
Repair-WindowsImage -Online -RestoreHealth -Source wim:D:\sources\install.wim:6 -LimitAccess
sfc.exe /scannow
```

Confirmación: Microsoft Learn, DISM `/RestoreHealth` y SFC.  
Certeza: alta para corrupción lógica de componentes si la fuente está sana; no repara disco físico dañado.

---

### Caso B — Sospecha de disco dañado o NTFS corrupto

Síntomas: errores `disk`, `Ntfs`, `volmgr`, lentitud extrema, I/O errors, desconexiones.

Primero salud:

```powershell
Get-PhysicalDisk | Select FriendlyName, MediaType, HealthStatus, OperationalStatus
Get-PhysicalDisk | Get-StorageReliabilityCounter
Get-WinEvent -FilterHashtable @{LogName='System'; ProviderName='disk','Ntfs','volmgr'} -MaxEvents 100
```

Si `HealthStatus` no es Healthy o hay SMART malo:

```powershell
robocopy C:\Users D:\BackupUsuarios /E /COPY:DAT /DCOPY:DAT /R:1 /W:1 /XJ /LOG:D:\BackupUsuarios\robocopy.log
```

No uses `/MIR` si no quieres borrado de destino. `/E` copia subdirectorios, `/XJ` evita junctions.

Después de backup, reparación prudente:

```powershell
Repair-Volume -DriveLetter C -SpotFix
```

Solo si se necesita reparación profunda y hay backup:

```powershell
chkdsk C: /f
```

Evita `chkdsk /r` automático en discos sospechosos: puede estresar un disco moribundo y convertir corrupción recuperable en pérdida.

Confirmación: Microsoft Learn, CHKDSK/Repair-Volume; práctica forense NIST SP 800-86.  
Certeza: SMART es media; puede haber fallo físico con SMART “OK”.

---

### Caso C — Duplicados reales por contenido

Objetivo: no borrar por nombre. Ejemplo:

```text
C:\Users\Tú\Documents\informe.pdf
C:\Users\Tú\Downloads\informe (1).pdf
C:\Users\Tú\Backup\copy_of_informe.pdf
```

Pueden tener nombres distintos pero mismo SHA-256. El script los detecta.

Criterio criptográfico:

```text
SizeBytes + SHA-256
```

SHA-256 está definido en NIST FIPS 180-4, 2015. Para integridad forense, NIST SP 800-86, 2006, recomienda hashing verificable. MD5 y SHA-1 ya no son recomendables para garantías fuertes por colisiones: MD5, Wang et al., 2004/2005; SHA-1, SHAttered, 2017.

Si quieres verificación byte a byte de dos archivos ya marcados como iguales:

```cmd
fc /b "C:\ruta\archivo1" "C:\ruta\archivo2"
```

Confirmación: Microsoft `fc`; NIST/FIPS.  
Certeza: muy alta para contenido; no compara metadata, ACLs, alternate data streams ni contexto de uso.

---

### Caso D — Liberar espacio sin borrar documentos

Opciones no destructivas o semi-destructivas:

1. Limpieza de componentes antiguos:

```powershell
Dism.exe /Online /Cleanup-Image /StartComponentCleanup
```

No toca documentos. Borra paquetes de Windows reemplazados.

2. Más agresivo, solo si no necesitas desinstalar updates antiguos:

```powershell
Dism.exe /Online /Cleanup-Image /StartComponentCleanup /ResetBase
```

3. Optimización de volumen:

```powershell
Optimize-Volume -DriveLetter C -Verbose
```

4. Compresión NTFS reversible en carpetas de usuario:

```cmd
compact /c /s:"C:\Users\%USERNAME%\Documents" /a /i
```

Para descomprimir:

```cmd
compact /u /s:"C:\Users\%USERNAME%\Documents" /a /i
```

5. Disk Cleanup interactivo, sin automatizar borrado:

```cmd
cleanmgr /d C
```

No uses `cleanmgr /autoclean` si quieres control total.

---

## 10. Ruta operativa recomendada

### Paso 0 — Backup mínimo

Si los datos importan:

```powershell
robocopy C:\Users D:\BackupUsuarios /E /COPY:DAT /DCOPY:DAT /R:1 /W:1 /XJ /LOG:D:\BackupUsuarios\robocopy.log
```

Si hay BitLocker, ten a mano la recovery key:

```powershell
manage-bde -protectors -get C:
```

### Paso 1 — Salud y reportes

```powershell
C:\Scripts\Salud-Windows-Segura.ps1
```

### Paso 2 — Revisar reportes clave

```text
04_smart.csv
06_disk_events.csv
09_dism_restorehealth.txt
10_sfc.txt
11_chkdsk_scan.txt
12_repair_volume_scan.txt
```

### Paso 3 — Duplicados

```powershell
C:\Scripts\Find-DuplicatesByHash.ps1
```

### Paso 4 — Revisar CSV

```powershell
Import-Csv .\duplicados_hash_*.csv |
    Where-Object { $_.Keep -eq 'False' } |
    Sort-Object SizeBytes -Descending |
    Select-Object SizeBytes, Path, SHA256
```

### Paso 5 — Cuarentena solo si procede

```powershell
C:\Scripts\Quarantine-Duplicates.ps1 -Csv .\duplicados_hash_XXXX.csv
```

Si la simulación es correcta:

```powershell
C:\Scripts\Quarantine-Duplicates.ps1 -Csv .\duplicados_hash_XXXX.csv -Apply
```

---

## 11. Comandos de recuperación si Windows no arranca

Desde WinRE, en cmd elevado. Las letras de unidad pueden cambiar; verifica con `notepad C:` o `dir`.

```cmd
sfc /scannow /offbootdir=C:\ /offwindir=C:\Windows
```

Reparación de imagen offline con ISO como fuente:

```cmd
DISM /Image:C:\ /Cleanup-Image /RestoreHealth /Source:WIM:D:\sources\install.wim:6 /LimitAccess
```

Reconstruir boot files:

```cmd
bcdboot C:\Windows /l es-es
```

Confirmación: Microsoft Learn, Windows Recovery Environment.  
Certeza: alta para corrupción de arranque/system files; no sustituye backup si el disco físico falla.

---

## 12. Recuperación de archivos borrados, periférico

Si lo que necesitas es recuperar archivos eliminados, no “reparar Windows”:

```powershell
winget install Microsoft.WindowsFileRecovery
```

Uso básico, recuperando desde C: hacia D:, nunca hacia el mismo volumen:

```cmd
winfr C: D:\Recovered /regular /n *.docx /n *.jpg /n *.pdf
```

Modo más profundo:

```cmd
winfr C: D:\Recovered /extensive /n *.docx /n *.jpg
```

Confirmación: Microsoft, Windows File Recovery, 2020–2024.  
Certeza: depende de sobrescritura; si el disco sigue en uso, la probabilidad baja.

---

## 13. Lo que NO debes ejecutar sin confirmación

| Comando/herramienta | Riesgo |
|---|---|
| `format C:` | Destrucción total |
| `diskpart clean` | Destrucción de particiones |
| `Remove-Item -Recurse -Force` | Borrado irreversible |
| `cleanmgr /autoclean` | Borrado automático de categorías |
| `chkdsk /r` en disco fallando | Puede empeorar recuperación |
| Registry cleaners | Beneficio bajo, riesgo alto |
| “PC doctor”/“speed up” genéricos | Historial de scareware/snake oil |
| `Dism /ResetBase` sin aviso | Impide desinstalar updates antiguos |

Fuente ética/histórica: Microsoft KB2563254, 2011/2014, desaconseja registry cleaners; historial de utilidades “optimizadoras” con prácticas engañosas documentadas por FTC y literatura de seguridad.

---

## 14. Sesgos y certeza

| Afirmación | Sesgo posible | Certeza |
|---|---|---|
| DISM/SFC reparan corrupción lógica de Windows | Sesgo de autoridad oficial | Alta, si la fuente de imagen está sana |
| CHKDSK `/scan` detecta sin reparar | Sesgo de herramienta | Alta para estado reportado, no predice fallo físico |
| SMART predice fallo | Sesgo de disponibilidad | Media; hay fallos con SMART normal |
| SHA-256 identifica duplicados reales | Sesgo criptográfico | Muy alta para contenido; colisión despreciable en uso civil |
| Mover duplicados es seguro | Sesgo de automatización | Media; puede romper referencias |
| Limpiar componentes libera espacio | Sesgo de optimización | Alta, pero impide rollback de updates si `/ResetBase` |
| Un solo comando arregla todo | Sesgo de simplificación | Baja; Windows no tiene “fix” universal |

---

## 15. Glosario denso

**CHKDSK:** utilidad de verificación de sistema de archivos desde MS-DOS; en Windows moderno soporta `/scan`, `/spotfix`, `/f`, `/r`.

**Repair-Volume:** cmdlet PowerShell moderno para escaneo y reparación de volumen; envuelve funcionalidades de CHKDSK/NTFS.

**SFC:** System File Checker; compara archivos protegidos de Windows contra una copia conocida; introducido en Windows 2000.

**DISM:** Deployment Image Servicing and Management; repara y mantiene imágenes Windows; estándar desde Windows 7/Server 2008 R2.

**WinSxS:** Windows Side-by-Side; almacén de componentes; no debe borrarse manualmente.

**StartComponentCleanup:** elimina componentes superseded; reduce tamaño de WinSxS.

**ResetBase:** elimina versiones anteriores de componentes actualizados; más agresivo.

**SHA-256:** función hash de 256 bits; FIPS 180-4, NIST, 2015.

**DuplicateGroup:** identificador de grupo `SHA256:SizeBytes` en el script.

**Keep:** marca de conservación sugerida; no es borrado automático.

**Quarantine:** carpeta reversible donde se mueven candidatos; no es papelera.

**SMART:** Self-Monitoring, Analysis and Reporting Technology; telemetría de salud de disco.

**WinRE:** Windows Recovery Environment; entorno offline de reparación.

**winfr:** Windows File Recovery; herramienta Microsoft para recuperación de archivos borrados.

**Hardlink:** entrada NTFS que apunta al mismo $MFT/file record; ahorra espacio, pero editar uno puede afectar a todos si la app no crea archivo nuevo.

**Alternate Data Stream:** flujo NTFS adicional; `Get-FileHash` hash del flujo principal, no de todos los ADS.

**ReFS:** Resilient File System; con integrity streams y autorreparación parcial; más común en Windows Server/Storage Spaces.

---

## 16. Fuentes relevantes para confirmación

1. Microsoft Corporation, **SFC**, Microsoft Learn, documentación Windows, 2024–2026.  
2. Microsoft Corporation, **DISM Operating System Package Servicing Command-Line Options**, Microsoft Learn, 2024–2026.  
3. Microsoft Corporation, **CHKDSK**, Microsoft Learn, 2024–2026.  
4. Microsoft Corporation, **Repair-Volume**, PowerShell/Storage documentation, 2024–2026.  
5. Microsoft Corporation, **Get-FileHash**, PowerShell documentation, 2024–2026.  
6. Microsoft Corporation, **Checkpoint-Computer** y **Enable-ComputerRestore**, Windows PowerShell 5.1 documentation.  
7. Microsoft Corporation, **Optimize-Volume**, Storage documentation.  
8. Microsoft Corporation, **Windows Recovery Environment (Windows RE)**, Microsoft Learn.  
9. Microsoft Corporation, **Windows File Recovery (winfr)**, Microsoft Store/Docs, 2020–2024.  
10. NIST, **FIPS 180-4 Secure Hash Standard**, 2015; SHA-256.  
11. NIST SP 800-86, Kent, Chevalier, Grance, Dang, **Guide to Integrating Forensic Techniques into Incident Response**, 2006.  
12. E. Casey, **Digital Evidence and Computer Crime**, 3rd ed., Academic Press, 2011.  
13. Microsoft KB2563254, **Microsoft support policy concerning registry cleaners**, 2011/2014.  
14. SHAttered Project, primera colisión práctica SHA-1, 2017.  
15. Xiaoyun Wang et al., colisiones MD5, 2004/2005.  
16. Microsoft Corporation, **Data Deduplication Overview**, Windows Server 2012/2016/2019/2022/2025.

---

## 17. Reflexión prospectiva

El futuro de la “limpieza segura” no es un botón `--fix`, sino sistemas content-addressable: archivos referenciados por hash, snapshots VSS/ReFS, deduplicación verificable, reparación declarativa y agentes con permisos mínimos. OpenCode o cualquier agente IA debería operar como cirujano: reporte primero, hash después, cuarentena reversible, borrado jamás sin consentimiento y evidencia. La ética de datos exige reversibilidad, trazabilidad y sesgo pro-backup; la historia de los “disk doctors” muestra que el automatismo agresivo suele venderse como salud y comportarse como riesgo.

**Pregunta guía:** ¿Quieres que adapte este flujo a tu caso exacto —Windows 10/11, disco SSD/HDD, BitLocker, OneDrive, OpenCode con sandbox, o servidor con ReFS/Storage Spaces— dejando el modo “solo reporte” o el modo “cuarentena reversible”?
