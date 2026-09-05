#!/usr/bin/env python3
# Kongeriket site generator
from pathlib import Path
ROOT = Path("/workspace/kongeriket-site")
FILES = {}

def write_all():
    for rel, content in FILES.items():
        path = ROOT / rel
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content, encoding="utf-8")
        print("wrote", rel)

if __name__ == "__main__":
    write_all()
    print("DONE", len(FILES), "files")
