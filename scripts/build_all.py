#!/usr/bin/env python3
from pathlib import Path
import json

ROOT = Path("/workspace/kongeriket-site")

def w(rel: str, content: str) -> None:
    path = ROOT / rel
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")
    print("wrote", rel)

print("generating...")
