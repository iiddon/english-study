#!/usr/bin/env python3
"""Gabungkan src/* menjadi satu index.html."""
import pathlib
root = pathlib.Path(__file__).parent
r = lambda f: (root / "src" / f).read_text(encoding="utf-8")
js = "\n".join([r("levels.js"), r("extra.js"), r("lessons2.js"), r("app.js")])
assert "</script" not in js
html = f"""<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>English Path — Belajar Bahasa Inggris Gratis</title>
<meta name="description" content="Belajar bahasa Inggris gratis dari A1 sampai C2: 36 pelajaran, 750 soal, bacaan, latihan dengar dan berbicara, dijelaskan dalam bahasa Indonesia.">
<meta name="theme-color" content="#c9f2e3">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icons/favicon.svg" type="image/svg+xml">
<link rel="icon" href="icons/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="English Path">
<meta property="og:title" content="English Path — Belajar Bahasa Inggris Gratis">
<meta property="og:description" content="Dari A1 sampai C2. 750 soal, bacaan, latihan berbicara, misi harian. Gratis, tanpa daftar.">
<meta property="og:image" content="https://iiddon.github.io/english-study/icons/og.png">
<meta property="og:url" content="https://iiddon.github.io/english-study/">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=DM+Sans:wght@500;600;700&display=swap" rel="stylesheet">
<style>
{r("style.css")}</style>
</head>
<body>
<div class="shell">
  <header class="top" id="top"></header>
  <nav class="nav" id="nav" aria-label="Menu utama"></nav>
  <main id="app"></main>
</div>
<canvas id="fx" aria-hidden="true"></canvas>
<script>
{js}</script>
</body>
</html>
"""
(root / "index.html").write_text(html, encoding="utf-8")
print("index.html", len(html.encode("utf-8")), "bytes")
