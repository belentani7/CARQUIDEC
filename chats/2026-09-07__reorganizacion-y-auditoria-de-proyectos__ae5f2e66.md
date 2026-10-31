# Reorganización y Auditoría de Proyectos

- Chat ID: `ae5f2e66-14c6-4634-a4eb-372e92f60584`
- Mensajes: 2
- Periodo: 2026-09-07 04:46 UTC → 2026-09-07 04:46 UTC
- Exportado por `09_chats_export.py` (consolidación belentani7)

## [USER] 2026-09-07 04:46

elabora Actúa como mi Ingeniero Principal de Software, Auditor de Sistemas y Gestor de Proyectos de nivel mundial. Te otorgo autonomía agéntica total para escanear, auditar, organizar y adelantar mis repositorios y archivos personales en esta sesión de larga duración. 

Quiero que ejecutes este trabajo de manera autónoma en 4 fases secuenciales. No te saltes ningún paso y genera un informe de progreso automatizado al final de cada fase:

FASE 1: MAPEO Y ORGANIZACIÓN DE ARCHIVOS
- Escanea el directorio/unidad provisto. Identifica y clasifica todos los archivos sueltos.
- Detecta proyectos abandonados, notas dispersas, archivos duplicados y placeholders (como notas 'TODO' o archivos vacíos).
- Diseña una estructura de carpetas limpia y lógica para clasificar todo de forma definitiva.

FASE 2: AUDITORÍA DE REPOSITORIOS (GIT/UNIVERSIDAD)
- Analiza a fondo cada repositorio de código encontrado.
- Evalúa la arquitectura, calidad del código, dependencias obsoletas, posibles brechas de seguridad y fallos lógicos.
- Clasifica cada hallazgo técnico según su gravedad: Crítico / Alto / Medio / Bajo.

FASE 3: FINALIZACIÓN Y LOGROS ("QUICK WINS")
- Identifica las tareas que estén más cerca de estar "Hechas" (proyectos al 80-90% de finalización).
- Crea un plan de acción autónomo para escribir los tests que falten, corregir los bugs críticos encontrados y refacturar el código para dar por concluidos esos repositorios.
- Genera los mensajes de commit limpios y las descripciones para cerrar las ramas o dejar los proyectos listos para producción.

FASE 4: PLAN DE ADELANTO Y ESTRATEGIA (MILESTONES)
- Diseña una hoja de ruta dividida en Hitos (Milestone 0 al 3) con las tareas pendientes para los proyectos de largo plazo.
- Para cada tarea, especifica: Título, archivos afectados, criterios de aceptación estrictos y estimación de esfuerzo técnico.

REGLAS DE OPERACIÓN:
1. No inventes rutas; cíñete estrictamente a los archivos reales detectados.
2. Si un paso del código o de la organización falla, inicia tu propio bucle de autocorrección y busca rutas alternativas sin pedir mi intervención constante.
3. Al finalizar, guárdame un reporte ejecutivo completo llamado 'REPORTE_FINAL_FABLE.md'.

Comienza la Fase 1.

## [ASSISTANT] 2026-09-07 04:46 · Qwen3.8-Max

He iniciado la **Fase 1** como tu Ingeniero Principal de Software / Auditor de Sistemas / Gestor de Proyectos.

Para cumplir tu **Regla 1 — “No inventes rutas; cíñete estrictamente a los archivos reales detectados”**— debo ser exacto: en esta conversación no tengo acceso directo a tu disco local, a tus repositorios Git ni a tu sistema de archivos, salvo que tú me proporciones un listado, un ZIP, un acceso a un sandbox o la salida de un escaneo. Por tanto, no voy a simular archivos ni rutas. La forma correcta de arrancar la Fase 1 con autonomía real es ejecutar un **agente local de escaneo** que genere evidencia verificable: inventario, duplicados, placeholders, repos Git, secretos potenciales, proyectos abandonados y un plan de organización.

A continuación te entrego el ejecutable de la **Fase 1**. Por defecto **no mueve nada**; solo escanea, clasifica y genera informes. Si después quieres aplicar la reorganización, podrás hacerlo con `--apply`, bajo tu responsabilidad y con registro de movimientos.

---

# 1. Agente de Fase 1: `fable_fase1.py`

Crea un archivo llamado `fable_fase1.py` y pega este contenido completo.

```python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
FABLE FASE 1: mapeo, clasificación, duplicados, placeholders, repos Git y plan de organización.

Por defecto NO mueve archivos.
Usar --apply solo tras revisar REPORTE_FASE1.md y move_plan.json.
"""

import argparse
import hashlib
import json
import os
import re
import shutil
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

VERSION = "1.0.0"

DEFAULT_EXCLUDE_DIRS = {
    ".git",
    "node_modules",
    ".venv",
    "venv",
    "__pycache__",
    ".mypy_cache",
    ".pytest_cache",
    ".ruff_cache",
    ".idea",
    ".vscode",
    "dist",
    "build",
    ".next",
    ".nuxt",
    ".svelte-kit",
    ".turbo",
    ".cache",
    ".terraform",
    ".gradle",
    ".mvn",
    "target",
    "coverage",
    ".tox",
    "99_META_FABLE",
}

DEFAULT_EXCLUDE_FILES = {
    ".DS_Store",
    "Thumbs.db",
    "desktop.ini",
}

EXT_CATEGORY = {
    # Código
    ".py": "code",
    ".js": "code",
    ".ts": "code",
    ".jsx": "code",
    ".tsx": "code",
    ".java": "code",
    ".c": "code",
    ".cpp": "code",
    ".cc": "code",
    ".h": "code",
    ".hpp": "code",
    ".cs": "code",
    ".go": "code",
    ".rs": "code",
    ".rb": "code",
    ".php": "code",
    ".swift": "code",
    ".kt": "code",
    ".scala": "code",
    ".m": "code",
    ".mm": "code",
    ".sql": "code",
    ".sh": "code",
    ".bash": "code",
    ".zsh": "code",
    ".ps1": "code",
    ".bat": "code",
    ".r": "code",
    ".jl": "code",
    ".lua": "code",
    ".pl": "code",
    ".dart": "code",
    ".vue": "code",
    ".svelte": "code",

    # Notas
    ".md": "notes",
    ".txt": "notes",
    ".org": "notes",
    ".adoc": "notes",
    ".rst": "notes",
    ".ipynb": "notes",

    # Documentos
    ".pdf": "docs",
    ".doc": "docs",
    ".docx": "docs",
    ".rtf": "docs",
    ".odt": "docs",
    ".ppt": "docs",
    ".pptx": "docs",
    ".odp": "docs",
    ".xls": "docs",
    ".xlsx": "docs",
    ".ods": "docs",
    ".epub": "docs",
    ".tex": "docs",
    ".bib": "docs",
    ".pages": "docs",
    ".numbers": "docs",
    ".key": "docs",

    # Datos
    ".csv": "data",
    ".tsv": "data",
    ".json": "data",
    ".jsonl": "data",
    ".ndjson": "data",
    ".xml": "data",
    ".yaml": "data",
    ".yml": "data",
    ".toml": "data",
    ".sqlite": "data",
    ".db": "data",
    ".duckdb": "data",
    ".parquet": "data",
    ".arrow": "data",
    ".feather": "data",
    ".avro": "data",
    ".h5": "data",
    ".hdf5": "data",

    # Media
    ".png": "media",
    ".jpg": "media",
    ".jpeg": "media",
    ".gif": "media",
    ".webp": "media",
    ".svg": "media",
    ".bmp": "media",
    ".tif": "media",
    ".tiff": "media",
    ".heic": "media",
    ".mp3": "media",
    ".wav": "media",
    ".flac": "media",
    ".ogg": "media",
    ".m4a": "media",
    ".mp4": "media",
    ".mkv": "media",
    ".avi": "media",
    ".mov": "media",
    ".webm": "media",

    # Archivos comprimidos
    ".zip": "archives",
    ".tar": "archives",
    ".gz": "archives",
    ".tgz": "archives",
    ".bz2": "archives",
    ".xz": "archives",
    ".7z": "archives",
    ".rar": "archives",
    ".zst": "archives",

    # Temporales
    ".log": "temp",
    ".tmp": "temp",
    ".temp": "temp",
    ".bak": "temp",
    ".old": "temp",
    ".swp": "temp",
    ".swo": "temp",
    ".part": "temp",
    ".crdownload": "temp",

    # Configuración
    ".env": "config",
    ".ini": "config",
    ".cfg": "config",
    ".conf": "config",
    ".properties": "config",
    ".editorconfig": "config",
    ".gitignore": "config",
    ".dockerignore": "config",
    ".tf": "config",
    ".hcl": "config",
    ".lock": "config",
}

TEXT_EXTS = {
    ".md", ".txt", ".rst", ".org", ".adoc",
    ".py", ".js", ".ts", ".jsx", ".tsx", ".java",
    ".c", ".cpp", ".h", ".hpp", ".cs", ".go",
    ".rs", ".rb", ".php", ".html", ".css", ".scss",
    ".json", ".yml", ".yaml", ".toml", ".ini", ".cfg",
    ".conf", ".sql", ".sh", ".ps1", ".bat", ".tex",
    ".r", ".ipynb",
}

PLACEHOLDER_NAME = re.compile(
    r"(?i)(todo|fixme|placeholder|untitled|sin[-_ ]?titulo|borrador|draft|tmp|temp)"
)

TODO_CONTENT = re.compile(
    r"(?i)\b(todo|fixme|xxx|hack|placeholder)\b"
)

UNI_KEYWORDS = re.compile(
    r"(?i)(universidad|university|universitario|uni|curso|asignatura|apunte|apuntes|"
    r"examen|tarea|trabajo[-_ ]?fin|tfm|tfg|tesis|campus|aula|escuela|facultad|"
    r"grado|master|máster)"
)

SECRET_EXTS = {
    ".pem", ".key", ".p12", ".pfx", ".jks", ".keystore",
    ".asc", ".gpg", ".crt", ".cer"
}

SECRET_NAMES = {
    ".env",
    ".env.local",
    ".env.dev",
    ".env.development",
    ".env.production",
    ".netrc",
    ".pgpass",
    "id_rsa",
    "id_ed25519",
}

PROPOSED_TREE = [
    "00_INBOX/",
    "01_PROYECTOS/ACTIVOS/",
    "01_PROYECTOS/PAUSADOS/",
    "02_UNIVERSIDAD/",
    "03_DOCUMENTOS/",
    "04_NOTAS/",
    "05_DATOS/",
    "06_MEDIA/",
    "07_CODIGO/",
    "08_CONFIG/",
    "09_ARCHIVO/",
    "10_TEMP/",
    "10_TEMP/DUPLICADOS/",
    "10_TEMP/PLACEHOLDERS/",
    "99_META/",
    "99_META/SECRETOS_REVISAR/",
]


def parse_args():
    parser = argparse.ArgumentParser(
        description="FABLE Fase 1: escaneo, clasificación y plan de organización."
    )
    parser.add_argument(
        "--root",
        required=True,
        help="Directorio raíz que se debe escanear."
    )
    parser.add_argument(
        "--outdir",
        default=None,
        help="Directorio de salida para informes. Por defecto: ROOT/99_META_FABLE."
    )
    parser.add_argument(
        "--apply",
        action="store_true",
        help="Aplica movimientos según move_plan.json. Sin esta bandera solo se genera plan."
    )
    parser.add_argument(
        "--max-hash-mb",
        type=int,
        default=256,
        help="Tamaño máximo por archivo para hash completo, en MB."
    )
    parser.add_argument(
        "--quick-hash",
        action="store_true",
        help="Para archivos grandes usa hash parcial cabeza+cola. Más rápido pero menos exacto."
    )
    parser.add_argument(
        "--include-excluded-dirs",
        action="store_true",
        help="No excluye directorios como node_modules o .venv. Útil solo si quieres inventario pesado."
    )
    return parser.parse_args()


def category_for(path: Path) -> str:
    name = path.name.lower()
    ext = path.suffix.lower()

    if ext in SECRET_EXTS or name in SECRET_NAMES:
        return "secrets"

    if name in {
        "dockerfile",
        "makefile",
        "jenkinsfile",
        "compose.yml",
        "compose.yaml",
        ".gitignore",
        ".gitattributes",
        ".editorconfig",
    }:
        return "config"

    if ext in EXT_CATEGORY:
        return EXT_CATEGORY[ext]

    if name.endswith((".bak", ".old", ".tmp", ".temp", ".swp", ".swo")):
        return "temp"

    return "unknown"


def is_textish(path: Path) -> bool:
    ext = path.suffix.lower()
    if ext in TEXT_EXTS:
        return True

    name = path.name.lower()
    return name in {
        "dockerfile",
        "makefile",
        "jenkinsfile",
        ".gitignore",
        ".gitattributes",
        ".editorconfig",
        "license",
        "readme",
    }


def head_text(path: Path, limit: int = 8192) -> str:
    try:
        with path.open("rb") as handle:
            raw = handle.read(limit)
        return raw.decode("utf-8", errors="ignore")
    except Exception:
        return ""


def hash_file(path: Path, size: int, quick: bool = False):
    digest = hashlib.sha256()
    try:
        with path.open("rb") as handle:
            if quick and size > 50 * 1024 * 1024:
                head = handle.read(4 * 1024 * 1024)
                digest.update(head)
                handle.seek(max(0, size - 4 * 1024 * 1024))
                tail = handle.read(4 * 1024 * 1024)
                digest.update(tail)
                digest.update(str(size).encode("utf-8"))
                return "quick-" + digest.hexdigest()

            while True:
                block = handle.read(8 * 1024 * 1024)
                if not block:
                    break
                digest.update(block)
        return digest.hexdigest()
    except Exception:
        return None


def run_git(repo: Path, *args):
    try:
        cmd = ["git", "-C", str(repo)] + list(args)
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=20,
        )
        if result.returncode == 0:
            return result.stdout.strip()
        return None
    except Exception:
        return None


def get_repo_info(repo: Path) -> dict:
    info = {
        "path": str(repo),
        "name": repo.name,
        "branch": None,
        "last_commit": None,
        "age_days": None,
        "dirty": False,
        "modified": 0,
        "untracked": 0,
        "remotes": [],
        "commits": None,
        "abandoned": False,
        "university": False,
        "state": "UNKNOWN",
    }

    branch = run_git(repo, "rev-parse", "--abbrev-ref", "HEAD")
    if branch:
        info["branch"] = branch

    last = run_git(repo, "log", "-1", "--format=%cI")
    if last:
        info["last_commit"] = last
        try:
            dt = datetime.fromisoformat(last)
            if dt.tzinfo is None:
                dt = dt.replace(tzinfo=timezone.utc)
            age = (datetime.now(timezone.utc) - dt).days
            info["age_days"] = age
            if age > 365:
                info["abandoned"] = True
        except Exception:
            pass
    else:
        info["abandoned"] = True
        info["state"] = "NO_COMMITS"

    status = run_git(repo, "status", "--porcelain")
    if status is not None:
        lines = [line for line in status.splitlines() if line.strip()]
        untracked = [line for line in lines if line.startswith("??")]
        modified = [line for line in lines if not line.startswith("??")]
        info["untracked"] = len(untracked)
        info["modified"] = len(modified)
        info["dirty"] = len(modified) > 0 or len(untracked) > 0

    remotes = run_git(repo, "remote", "-v")
    if remotes:
        names = set()
        for line in remotes.splitlines():
            if line.strip():
                parts = line.split()
                if parts:
                    names.add(parts[0])
        info["remotes"] = sorted(names)

    count = run_git(repo, "rev-list", "--count", "HEAD")
    if count and count.isdigit():
        info["commits"] = int(count)

    if UNI_KEYWORDS.search(str(repo)):
        info["university"] = True

    if info["state"] == "UNKNOWN":
        if info["abandoned"]:
            info["state"] = "ABANDONED"
        elif info["dirty"]:
            info["state"] = "WIP"
        else:
            info["state"] = "ACTIVE"

    return info


def is_under_outdir(path: Path, outdir: Path) -> bool:
    try:
        path.relative_to(outdir)
        return True
    except ValueError:
        return False


def scan_fs(root: Path, outdir: Path, exclude_dirs: set):
    files = []
    repos = []
    seen_repo_paths = set()

    try:
        current_script = Path(__file__).resolve()
    except Exception:
        current_script = None

    for dirpath, dirnames, filenames in os.walk(root):
        dp = Path(dirpath)

        if dp == outdir or is_under_outdir(dp, outdir):
            dirnames[:] = []
            continue

        git_marker = dp / ".git"
        if git_marker.exists():
            if dp not in seen_repo_paths:
                seen_repo_paths.add(dp)
                repos.append(get_repo_info(dp))
            if ".git" in dirnames:
                dirnames.remove(".git")

        dirnames[:] = [
            d for d in dirnames
            if d not in exclude_dirs and not (dp / d).is_symlink()
        ]

        for filename in filenames:
            if filename in DEFAULT_EXCLUDE_FILES:
                continue

            path = dp / filename

            try:
                if path.is_symlink():
                    continue
                stat = path.stat()
            except Exception:
                continue

            try:
                if current_script and path.resolve() == current_script:
                    continue
            except Exception:
                pass

            rel = path.relative_to(root)
            category = category_for(path)

            placeholder_reasons = []

            if stat.st_size == 0:
                placeholder_reasons.append("empty")

            if PLACEHOLDER_NAME.search(path.stem) or PLACEHOLDER_NAME.search(path.name):
                placeholder_reasons.append("name")

            if (
                category in {"code", "notes", "docs", "config"}
                and stat.st_size < 200_000
                and is_textish(path)
            ):
                text = head_text(path, 8192)
                if TODO_CONTENT.search(text):
                    placeholder_reasons.append("todo-content")

            record = {
                "rel": str(rel),
                "abs": str(path),
                "size": stat.st_size,
                "mtime": datetime.fromtimestamp(stat.st_mtime, timezone.utc).isoformat(),
                "category": category,
                "placeholder": bool(placeholder_reasons),
                "placeholder_reason": placeholder_reasons,
                "secret": category == "secrets",
                "uni": bool(UNI_KEYWORDS.search(str(rel))),
                "hash": None,
            }
            files.append(record)

    return files, repos


def find_duplicates(files: list, max_hash_mb: int, quick_hash: bool):
    by_size = {}
    for record in files:
        by_size.setdefault(record["size"], []).append(record)

    groups = []
    limit = max_hash_mb * 1024 * 1024

    for size, records in by_size.items():
        if size == 0 or len(records) < 2:
            continue

        if size > limit and not quick_hash:
            groups.append({
                "hash": None,
                "size": size,
                "note": "size_exceeded_use_quick_hash_or_increase_max_hash_mb",
                "files": [r["rel"] for r in records],
            })
            continue

        hashes = {}
        for record in records:
            file_hash = hash_file(Path(record["abs"]), size, quick_hash)
            record["hash"] = file_hash
            if file_hash:
                hashes.setdefault(file_hash, []).append(record)

        for file_hash, hashed_records in hashes.items():
            if len(hashed_records) > 1:
                groups.append({
                    "hash": file_hash,
                    "size": size,
                    "note": "quick_partial" if file_hash.startswith("quick-") else "exact",
                    "files": [r["rel"] for r in hashed_records],
                })

    return groups


def make_move_plan(root: Path, files: list, repos: list, duplicate_groups: list):
    plan = []
    repo_rels = []

    for repo in repos:
        repo_path = Path(repo["path"])
        try:
            repo_rel = repo_path.relative_to(root)
        except ValueError:
            repo_rel = Path(repo_path.name)

        repo["rel"] = str(repo_rel)
        repo_rels.append(repo_rel)

        if str(repo_rel) == ".":
            continue

        if repo.get("university"):
            base = "02_UNIVERSIDAD/PROYECTOS"
        elif repo.get("abandoned") or repo.get("state") == "ABANDONED":
            base = "01_PROYECTOS/PAUSADOS"
        else:
            base = "01_PROYECTOS/ACTIVOS"

        plan.append({
            "type": "repo",
            "src": str(repo_rel),
            "dst": str(Path(base) / repo_rel),
            "reason": repo.get("state", "UNKNOWN"),
        })

    def in_repo(rel_path: Path) -> bool:
        for repo_rel in repo_rels:
            if str(repo_rel) == ".":
                return True
            try:
                rel_path.relative_to(repo_rel)
                return True
            except ValueError:
                pass
        return False

    duplicate_move = set()
    for group in duplicate_groups:
        if not group.get("hash"):
            continue

        candidates = []
        for rel_str in group["files"]:
            rel_path = Path(rel_str)
            if not in_repo(rel_path):
                candidates.append(rel_str)

        if len(candidates) < 2:
            continue

        keep = sorted(candidates, key=lambda x: (len(Path(x).parts), x))[0]
        for rel_str in candidates:
            if rel_str != keep:
                duplicate_move.add(rel_str)

    seen = set()

    for record in files:
        rel = Path(record["rel"])

        if in_repo(rel):
            continue

        if record["rel"] in seen:
            continue

        if record["secret"] or record["category"] == "secrets":
            target = "99_META/SECRETOS_REVISAR"
            reason = "secret"

        elif record["rel"] in duplicate_move:
            target = "10_TEMP/DUPLICADOS"
            reason = "duplicate-secondary"

        elif record["placeholder"]:
            target = "10_TEMP/PLACEHOLDERS"
            reason = "placeholder"

        else:
            base = "02_UNIVERSIDAD" if record.get("uni") else None
            category = record["category"]

            if category == "docs":
                target = (base or "03_DOCUMENTOS") + "/GENERAL"
            elif category == "notes":
                target = (base or "04_NOTAS") + "/GENERAL"
            elif category == "data":
                target = (base or "05_DATOS") + "/RAW"
            elif category == "media":
                target = (base or "06_MEDIA") + "/GENERAL"
            elif category == "code":
                target = (base or "07_CODIGO") + "/SNIPPETS"
            elif category == "config":
                target = (base or "08_CONFIG") + "/ENTORNO"
            elif category == "archives":
                target = (base or "09_ARCHIVO") + "/COMPRIMIDOS"
            elif category == "temp":
                target = (base or "10_TEMP") + "/OTROS"
            else:
                target = (base or "00_INBOX") + "/DESCONOCIDO"

            reason = category

        plan.append({
            "type": "file",
            "src": str(rel),
            "dst": str(Path(target) / rel),
            "reason": reason,
        })

        seen.add(record["rel"])

    return plan


def unique_path(path: Path) -> Path:
    if not path.exists():
        return path

    stem = path.stem
    suffix = path.suffix
    parent = path.parent
    index = 1

    while True:
        candidate = parent / f"{stem}_{index}{suffix}"
        if not candidate.exists():
            return candidate
        index += 1


def apply_moves(root: Path, plan: list, outdir: Path):
    manifest = []
    errors = []

    for item in plan:
        src = (root / item["src"]).resolve()
        dst = (root / item["dst"]).resolve()

        try:
            if not src.exists():
                errors.append({
                    "src": str(item["src"]),
                    "error": "missing_source",
                })
                continue

            if src == dst:
                continue

            if dst.exists():
                dst = unique_path(dst)

            dst.parent.mkdir(parents=True, exist_ok=True)
            shutil.move(str(src), str(dst))

            manifest.append({
                "src": str(src),
                "dst": str(dst),
                "type": item["type"],
                "reason": item["reason"],
            })

        except Exception as exc:
            errors.append({
                "src": str(item["src"]),
                "dst": str(dst),
                "error": str(exc),
            })

    outdir.mkdir(parents=True, exist_ok=True)
    (outdir / "move_manifest.json").write_text(
        json.dumps(manifest, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )
    (outdir / "move_errors.json").write_text(
        json.dumps(errors, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )

    return {
        "moved": len(manifest),
        "errors": len(errors),
    }


def md_table(headers: list, rows: list) -> str:
    lines = []
    lines.append("| " + " | ".join(headers) + " |")
    lines.append("|" + "|".join(["---"] * len(headers)) + "|")
    for row in rows:
        lines.append("| " + " | ".join(str(x) for x in row) + " |")
    return "\n".join(lines)


def write_report(
    outdir: Path,
    root: Path,
    files: list,
    repos: list,
    duplicate_groups: list,
    move_plan: list,
    apply_result: dict,
):
    now = datetime.now(timezone.utc).isoformat()

    category_counts = {}
    for record in files:
        category_counts[record["category"]] = category_counts.get(record["category"], 0) + 1

    placeholders = [r for r in files if r["placeholder"]]
    secrets = [r for r in files if r["secret"]]

    duplicate_exact = [g for g in duplicate_groups if g.get("hash")]
    duplicate_candidates = [g for g in duplicate_groups if not g.get("hash")]

    lines = []
    lines.append("# REPORTE FASE 1 — MAPEO Y ORGANIZACIÓN")
    lines.append("")
    lines.append(f"- **Generado:** {now}")
    lines.append(f"- **Raíz escaneada:** `{root}`")
    lines.append(f"- **Versión del agente:** {VERSION}")
    lines.append(f"- **Archivos escaneados:** {len(files)}")
    lines.append(f"- **Repositorios Git detectados:** {len(repos)}")
    lines.append(f"- **Grupos de duplicados confirmados:** {len(duplicate_exact)}")
    lines.append(f"- **Candidatos de duplicados por tamaño:** {len(duplicate_candidates)}")
    lines.append(f"- **Placeholders detectados:** {len(placeholders)}")
    lines.append(f"- **Posibles secretos:** {len(secrets)}")
    lines.append(f"- **Elementos en plan de movimiento:** {len(move_plan)}")
    lines.append("")

    if apply_result:
        lines.append("## Resultado de aplicación de movimientos")
        lines.append("")
        lines.append(f"- Movidos: {apply_result.get('moved', 0)}")
        lines.append(f"- Errores: {apply_result.get('errors', 0)}")
        lines.append("")
    else:
        lines.append("**Modo:** solo análisis. No se movieron archivos.")
        lines.append("")

    lines.append("## Estructura propuesta")
    lines.append("")
    lines.append("```text")
    for item in PROPOSED_TREE:
        lines.append(item)
    lines.append("```")
    lines.append("")

    lines.append("## Categorías detectadas")
    lines.append("")
    rows = sorted(category_counts.items(), key=lambda x: x[1], reverse=True)
    lines.append(md_table(["Categoría", "Cantidad"], rows))
    lines.append("")

    lines.append("## Repositorios Git")
    lines.append("")
    if repos:
        repo_rows = []
        for repo in repos:
            repo_rows.append([
                repo.get("rel", repo.get("path")),
                repo.get("state"),
                repo.get("branch"),
                repo.get("last_commit"),
                repo.get("age_days"),
                repo.get("modified"),
                repo.get("untracked"),
            ])
        lines.append(md_table(
            ["Repo", "Estado", "Rama", "Último commit", "Días", "Modificados", "Untracked"],
            repo_rows
        ))
    else:
        lines.append("No se detectaron repositorios Git.")
    lines.append("")

    lines.append("## Duplicados confirmados")
    lines.append("")
    if duplicate_exact:
        dup_rows = []
        for group in duplicate_exact[:50]:
            sample = ", ".join(group["files"][:3])
            if len(group["files"]) > 3:
                sample += "…"
            dup_rows.append([
                group.get("note"),
                group.get("size"),
                len(group["files"]),
                sample,
            ])
        lines.append(md_table(["Tipo", "Tamaño bytes", "Cantidad", "Ejemplos"], dup_rows))
        if len(duplicate_exact) > 50:
            lines.append("")
            lines.append(f"Se muestran 50 de {len(duplicate_exact)} grupos.")
    else:
        lines.append("No se confirmaron duplicados por hash.")
    lines.append("")

    lines.append("## Candidatos de duplicados por tamaño")
    lines.append("")
    if duplicate_candidates:
        cand_rows = []
        for group in duplicate_candidates[:30]:
            sample = ", ".join(group["files"][:3])
            if len(group["files"]) > 3:
                sample += "…"
            cand_rows.append([
                group.get("size"),
                len(group["files"]),
                sample,
            ])
        lines.append(md_table(["Tamaño bytes", "Cantidad", "Ejemplos"], cand_rows))
    else:
        lines.append("No hay candidatos de duplicados por tamaño.")
    lines.append("")

    lines.append("## Placeholders / TODO / archivos vacíos")
    lines.append("")
    if placeholders:
        ph_rows = []
        for record in placeholders[:50]:
            ph_rows.append([
                record["rel"],
                record["size"],
                ", ".join(record["placeholder_reason"]),
            ])
        lines.append(md_table(["Archivo", "Tamaño", "Motivos"], ph_rows))
        if len(placeholders) > 50:
            lines.append("")
            lines.append(f"Se muestran 50 de {len(placeholders)} placeholders.")
    else:
        lines.append("No se detectaron placeholders.")
    lines.append("")

    lines.append("## Posibles secretos")
    lines.append("")
    if secrets:
        sec_rows = []
        for record in secrets[:50]:
            sec_rows.append([record["rel"], record["size"]])
        lines.append(md_table(["Archivo", "Tamaño"], sec_rows))
        lines.append("")
        lines.append("No se debe subir contenido sensible a repositorios. Revisar antes de mover.")
    else:
        lines.append("No se detectaron posibles secretos.")
    lines.append("")

    lines.append("## Plan de movimiento propuesto")
    lines.append("")
    if move_plan:
        summary = {}
        for item in move_plan:
            key = f"{item['type']}:{item['reason']}"
            summary[key] = summary.get(key, 0) + 1

        summary_rows = sorted(summary.items(), key=lambda x: x[1], reverse=True)
        lines.append(md_table(["Tipo:razón", "Cantidad"], summary_rows))
        lines.append("")
        lines.append("Primeros 50 movimientos propuestos:")
        lines.append("")
        move_rows = []
        for item in move_plan[:50]:
            move_rows.append([item["type"], item["src"], item["dst"], item["reason"]])
        lines.append(md_table(["Tipo", "Origen", "Destino", "Razón"], move_rows))
    else:
        lines.append("No se generaron movimientos propuestos.")
    lines.append("")

    outdir.mkdir(parents=True, exist_ok=True)
    report_path = outdir / "REPORTE_FASE1.md"
    report_path.write_text("\n".join(lines), encoding="utf-8")

    payload = {
        "version": VERSION,
        "generated_at": now,
        "root": str(root),
        "counts": {
            "files": len(files),
            "repos": len(repos),
            "duplicate_groups_exact": len(duplicate_exact),
            "duplicate_groups_candidates": len(duplicate_candidates),
            "placeholders": len(placeholders),
            "secrets": len(secrets),
            "move_plan_items": len(move_plan),
        },
        "category_counts": category_counts,
        "files": files,
        "repos": repos,
        "duplicate_groups": duplicate_groups,
        "move_plan": move_plan,
        "apply_result": apply_result,
    }

    json_path = outdir / "fable_scan.json"
    json_path.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")

    return report_path, json_path


def main():
    args = parse_args()

    root = Path(args.root).expanduser().resolve()
    if not root.exists():
        print(json.dumps({"error": "root_does_not_exist", "root": str(root)}, ensure_ascii=False))
        sys.exit(1)

    if args.outdir:
        outdir = Path(args.outdir).expanduser().resolve()
    else:
        outdir = root / "99_META_FABLE"

    outdir.mkdir(parents=True, exist_ok=True)

    exclude_dirs = set() if args.include_excluded_dirs else set(DEFAULT_EXCLUDE_DIRS)

    files, repos = scan_fs(root, outdir, exclude_dirs)
    duplicate_groups = find_duplicates(files, args.max_hash_mb, args.quick_hash)
    move_plan = make_move_plan(root, files, repos, duplicate_groups)

    apply_result = None
    if args.apply:
        apply_result = apply_moves(root, move_plan, outdir)

    report_path, json_path = write_report(
        outdir=outdir,
        root=root,
        files=files,
        repos=repos,
        duplicate_groups=duplicate_groups,
        move_plan=move_plan,
        apply_result=apply_result,
    )

    print(json.dumps({
        "status": "ok",
        "root": str(root),
        "outdir": str(outdir),
        "files": len(files),
        "repos": len(repos),
        "duplicate_groups": len(duplicate_groups),
        "move_plan_items": len(move_plan),
        "apply": bool(args.apply),
        "report": str(report_path),
        "scan_json": str(json_path),
    }, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
```

---

# 2. Ejecución de la Fase 1

## Opción recomendada: solo análisis, sin mover nada

Ejecuta:

```bash
python fable_fase1.py --root /ruta/a/tu/carpeta_o_unidad
```

Ejemplo Linux/macOS:

```bash
python fable_fase1.py --root /home/tu_usuario/Documentos
```

Ejemplo Windows PowerShell:

```powershell
python fable_fase1.py --root C:\Users\tu_usuario\Documents
```

Esto generará por defecto:

```text
/ruta/a/tu/carpeta_o_unidad/99_META_FABLE/
├── REPORTE_FASE1.md
├── fable_scan.json
└── move_plan dentro del JSON
```

---

## Opción para escaneo más rápido en unidades grandes

Si tienes muchos archivos grandes, usa hash parcial:

```bash
python fable_fase1.py --root /ruta/a/tu/carpeta_o_unidad --quick-hash
```

Esto acelera la detección de posibles duplicados grandes, pero el hash es parcial, no exacto.

---

## Opción para incluir `node_modules`, `.venv`, `build`, etc.

Por defecto excluyo directorios pesados para no generar ruido ni tardar horas. Si quieres inventario completo:

```bash
python fable_fase1.py --root /ruta/a/tu/carpeta_o_unidad --include-excluded-dirs
```

Advertencia: esto puede ser muy lento en proyectos de desarrollo.

---

## Opción para aplicar movimientos

Solo si ya revisaste `REPORTE_FASE1.md` y `fable_scan.json`:

```bash
python fable_fase1.py --root /ruta/a/tu/carpeta_o_unidad --apply
```

Esto:

- Mueve archivos según el plan.
- No elimina nada.
- Genera `move_manifest.json`.
- Genera `move_errors.json` si hubo errores.
- Renombra automáticamente si hay colisiones de nombre.

Recomendación: antes de `--apply`, haz backup o confirma que el directorio está bajo control de versiones / sincronización / copia de seguridad.

---

# 3. Qué cumple exactamente este agente de Fase 1

Este script ejecuta los requisitos que pediste en la Fase 1:

## 3.1 Escaneo del directorio/unidad

Recorre el directorio raíz indicado y registra:

- Ruta relativa.
- Ruta absoluta.
- Tamaño.
- Fecha de modificación.
- Categoría.
- Si es placeholder.
- Si parece secreto.
- Si parece contenido universitario.
- Hash para duplicados cuando aplica.

---

## 3.2 Clasificación de archivos sueltos

Clasifica por extensión y nombre en categorías como:

- `code`
- `notes`
- `docs`
- `data`
- `media`
- `archives`
- `config`
- `temp`
- `secrets`
- `unknown`

---

## 3.3 Detección de proyectos abandonados

Detecta repositorios Git y evalúa:

- Rama actual.
- Último commit.
- Días desde el último commit.
- Cambios sin confirmar.
- Archivos untracked.
- Remotos.
- Número de commits.
- Estado: `ACTIVE`, `WIP`, `ABANDONED`, `NO_COMMITS`, `UNKNOWN`.

Criterio inicial:

- Más de 365 días sin commits → `ABANDONED`.
- Sin commits → `NO_COMMITS`.
- Con cambios sucios → `WIP`.

Este criterio se podrá refinar en Fase 2 según contexto del proyecto.

---

## 3.4 Detección de notas dispersas

Identifica archivos de notas:

- `.md`
- `.txt`
- `.org`
- `.adoc`
- `.rst`
- `.ipynb`

Además detecta si la ruta contiene términos universitarios o académicos, para luego poder separar:

- notas personales,
- apuntes,
- trabajos de universidad,
- proyectos académicos.

---

## 3.5 Detección de duplicados

Método:

1. Agrupa archivos por tamaño.
2. Si hay más de un archivo con el mismo tamaño, calcula hash SHA-256.
3. Si el archivo supera `--max-hash-mb`, por defecto no hace hash completo.
4. Con `--quick-hash`, usa hash parcial cabeza + cola para archivos grandes.

Salida:

- Duplicados exactos confirmados por hash.
- Candidatos por tamaño cuando el archivo era demasiado grande y no se usó quick-hash.

Importante: no borra duplicados. Solo los identifica y, si usas `--apply`, puede mover los secundarios a:

```text
10_TEMP/DUPLICADOS/
```

---

## 3.6 Detección de placeholders

Detecta:

- Archivos vacíos.
- Archivos con nombres como:
  - `todo`
  - `TODO`
  - `placeholder`
  - `untitled`
  - `borrador`
  - `draft`
  - `tmp`
  - `temp`
- Archivos de texto/código que contienen:
  - `TODO`
  - `FIXME`
  - `XXX`
  - `HACK`
  - `placeholder`

Salida:

```text
10_TEMP/PLACEHOLDERS/
```

---

## 3.7 Detección de posibles secretos

Detecta extensiones y nombres sensibles:

- `.pem`
- `.key`
- `.p12`
- `.pfx`
- `.jks`
- `.keystore`
- `.asc`
- `.gpg`
- `.crt`
- `.cer`
- `.env`
- `.env.local`
- `.env.production`
- `id_rsa`
- `id_ed25519`
- `.netrc`
- `.pgpass`

Esto es crítico para Fase 2, porque si alguno de estos archivos está dentro de un repo Git, puede ser una brecha de seguridad.

---

## 3.8 Estructura de carpetas propuesta

El agente propone esta estructura base:

```text
00_INBOX/
01_PROYECTOS/ACTIVOS/
01_PROYECTOS/PAUSADOS/
02_UNIVERSIDAD/
03_DOCUMENTOS/
04_NOTAS/
05_DATOS/
06_MEDIA/
07_CODIGO/
08_CONFIG/
09_ARCHIVO/
10_TEMP/
10_TEMP/DUPLICADOS/
10_TEMP/PLACEHOLDERS/
99_META/
99_META/SECRETOS_REVISAR/
```

Esta estructura es conservadora y está pensada para no mezclar:

- proyectos activos,
- proyectos pausados,
- universidad,
- documentos,
- notas,
- datos,
- media,
- código suelto,
- configuración,
- temporales,
- secretos pendientes de revisión.

---

# 4. Informe de progreso automatizado — Fase 1

Este es el informe de progreso real de esta sesión, sin inventar datos.

| Campo | Estado |
|---|---|
| Fase | 1 — Mapeo y organización de archivos |
| Acceso directo al sistema de archivos | No disponible en este entorno de chat |
| Escaneo real ejecutado | Pendiente de ejecución local del agente |
| Archivos detectados | No se pueden afirmar todavía sin escaneo |
| Repos detectados | No se pueden afirmar todavía sin escaneo |
| Duplicados detectados | No se pueden afirmar todavía sin escaneo |
| Placeholders detectados | No se pueden afirmar todavía sin escaneo |
| Secretos detectados | No se pueden afirmar todavía sin escaneo |
| Estructura propuesta | Generada y lista |
| Herramienta de ejecución | Entregada: `fable_fase1.py` |
| Modo recomendado | Solo análisis, sin `--apply` |
| Riesgo actual | Bajo, porque no se mueve nada sin revisión |
| Bloqueo | Necesito que ejecutes el agente o me proporciones el inventario |
| Próxima acción | Ejecutar `fable_fase1.py` y enviarme `fable_scan.json` o `REPORTE_FASE1.md` |

---

# 5. Qué debes hacer ahora para continuar sin fricción

Ejecuta esto:

```bash
python fable_fase1.py --root /ruta/a/tu/carpeta_o_unidad
```

Luego envíame uno de estos dos archivos:

```text
99_META_FABLE/fable_scan.json
```

o

```text
99_META_FABLE/REPORTE_FASE1.md
```

Con eso puedo continuar de forma más autónoma con:

- cierre de Fase 1,
- inicio de Fase 2,
- auditoría de repositorios Git,
- clasificación de hallazgos por severidad,
- identificación de quick wins,
- plan de commits,
- milestones.

---

# 6. Si no puedes ejecutar Python

Si no tienes Python disponible, puedo trabajar con un inventario generado por shell.

## Linux / macOS

```bash
find /ruta/a/tu/carpeta_o_unidad -type f -printf '%s|%T@|%p\n' > fable_files.txt
find /ruta/a/tu/carpeta_o_unidad -type d -name .git -exec dirname {} \; > fable_git_repos.txt
```

## Windows PowerShell

```powershell
Get-ChildItem -LiteralPath C:\ruta\a\tu\carpeta_o_unidad -Recurse -Force -File |
Select-Object FullName, Length, LastWriteTime |
Export-Csv -Path fable_files.csv -NoTypeInformation -Encoding UTF8
```

Después envíame:

```text
fable_files.txt
fable_git_repos.txt
```

o

```text
fable_files.csv
```

Con eso puedo reconstruir la Fase 1, aunque con menos precisión que el agente Python.

---

# 7. Decisión de ingeniería para mantener el control

Para respetar tus reglas, he adoptado esta política:

1. **No inventaré rutas.**
2. **No afirmaré archivos que no haya visto.**
3. **No moveré archivos sin evidencia y sin un plan revisable.**
4. **Los secretos se marcan para revisión prioritaria.**
5. **Los repositorios Git no se reorganizan archivo por archivo**, porque romperías el proyecto. Se mueve el repo completo solo si el plan lo indica.
6. **La Fase 2 dependerá del inventario real generado por la Fase 1.**
7. **Los quick wins de Fase 3 solo se definirán sobre proyectos detectados realmente.**
8. **Los milestones de Fase 4 se generarán con tareas verificables, no con suposiciones.**

---

# 8. Estado actual

La Fase 1 está **iniciada y operativa** mediante el agente local.

El siguiente paso mínimo indispensable es:

```bash
python fable_fase1.py --root /ruta/a/tu/carpeta_o_unidad
```

Cuando me entregues `fable_scan.json` o `REPORTE_FASE1.md`, continuaré con la consolidación de Fase 1 y el arranque de Fase 2.
