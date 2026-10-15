"""Render cv/lebenslauf.html to public/Lebenslauf_Kristiyana_Prodanichina.pdf.

Usage (from the repo root):  python3 cv/build.py
Needs: pip install playwright && playwright install chromium
"""
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "cv" / "lebenslauf.html"
OUT = ROOT / "public" / "Lebenslauf_Kristiyana_Prodanichina.pdf"

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto(SRC.as_uri(), wait_until="networkidle")
    page.evaluate("document.fonts.ready")
    page.pdf(path=str(OUT), format="A4", print_background=True, prefer_css_page_size=True)
    browser.close()

print(f"wrote {OUT}")
