# Membuat src/wardrobe.js dari tools/costumes.py (satu sumber gambar kostum Bubu).
import json, sys, os
sys.path.insert(0, os.path.dirname(__file__))
from costumes import COLORS, HATS, FACE, ACC, DEFS, GAL_STARS
def row(x, layer="front"):
    return {"id": x[0], "n": x[1], "p": x[2], "svg": x[3] if isinstance(x[3], str) and not x[3].startswith(("#", "url(")) else "", "u": x[4] if len(x) > 4 else None, "layer": layer}
cat = {
  "color": [{"id": c[0], "n": c[1], "p": c[2], "fill": c[3], "u": c[4] if len(c) > 4 else None} for c in COLORS],
  "hat": [row(h, "hat") for h in HATS],
  "face": [row(f, "face") for f in FACE],
  "acc": [row(a, a[5]) for a in ACC],
}
out = "// Dibuat otomatis oleh tools/gen-wardrobe.py dari tools/costumes.py. Jangan disunting langsung.\n"
out += "const COSTUME = " + json.dumps(cat, ensure_ascii=False) + ";\n"
out += "const COSTUME_DEFS = " + json.dumps(DEFS) + ";\nconst COSTUME_GAL = " + json.dumps(GAL_STARS) + ";\n"
open(os.path.join(os.path.dirname(__file__), "..", "src", "wardrobe.js"), "w").write(out)
print({k: len(v) for k, v in cat.items()})
