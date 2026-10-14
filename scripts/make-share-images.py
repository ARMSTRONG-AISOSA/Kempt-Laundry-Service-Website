"""Renders the social share images (public/og/*.jpg, 1200x630) used in WhatsApp/Facebook/X link previews.

Run after changing the wording below, the photos or the domain:
    python3 scripts/make-share-images.py
Needs Python + Pillow and a Chromium/Chrome binary (set CHROME=/path/to/chrome, otherwise
Playwright's headless shell or a system Chrome is used) and internet for Google Fonts.
"""
import glob, os, shutil, subprocess, tempfile
from PIL import Image

P = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public')
P = os.path.abspath(P)
DOMAIN = 'kemptlaundry.vercel.app'  # shown on the image; change when a custom domain is connected
OUT = tempfile.mkdtemp()
CH = (os.environ.get('CHROME')
      or next(iter(glob.glob(os.path.expanduser('~/.cache/ms-playwright/chromium_headless_shell-*/*/chrome-headless-shell'))), None)
      or shutil.which('google-chrome') or shutil.which('chromium') or shutil.which('chromium-browser'))
if not CH:
    raise SystemExit('No Chrome/Chromium found. Set CHROME=/path/to/chrome')

T = '''<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=DM+Sans:wght@500;700&display=block" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0}
html,body{width:1200px;height:630px;overflow:hidden}
body{background:#EAF5FD;font-family:'DM Sans';position:relative}
.wave{position:absolute;left:0;bottom:0;width:1200px;height:70px}
.copy{position:absolute;left:80px;top:0;bottom:60px;width:620px;display:flex;flex-direction:column;justify-content:center;gap:24px}
.logo{display:flex;align-items:center;gap:14px}
.logo img{height:74px}
.logo b{display:block;font:800 38px Montserrat;color:#0B2A63;letter-spacing:.02em;line-height:1}
.logo i{display:block;font:600 14px Montserrat;color:#1A73D9;letter-spacing:.42em;font-style:normal;margin-top:5px}
.eyebrow{font:700 17px Montserrat;letter-spacing:.18em;color:#1A73D9;margin-top:8px}
h1{font:800 64px/1.05 Montserrat;color:#0B2A63;letter-spacing:-.02em}
h1 span{color:#1A73D9}
.meta{display:flex;flex-wrap:wrap;gap:10px}
.meta span{background:#fff;color:#0B2A63;font:700 19px 'DM Sans';padding:11px 18px;border-radius:999px}
.photo{position:absolute;right:72px;top:64px;width:410px;height:410px;object-fit:cover;border-radius:50% 0 50% 50%;border:8px solid #fff;box-shadow:0 30px 60px -30px rgba(11,42,99,.35)}
.sticker{position:absolute;left:705px;top:360px;width:132px;height:132px;border-radius:50%;background:#3FA9E8;border:4px solid #fff;display:flex;align-items:center;justify-content:center;text-align:center;font:800 17px/1.2 Montserrat;color:#0B2A63;transform:rotate(-10deg)}
.url{position:absolute;right:80px;bottom:20px;font:700 18px 'DM Sans';color:#0B2A63}
</style></head><body>
<div class="copy">
  <div class="logo"><img src="file://{{P}}/kempt-mark.png"><div><b>KEMPT</b><i>LAUNDRY</i></div></div>
  <div class="eyebrow">{{eyebrow}}</div>
  <h1>{{h1}}</h1>
  <div class="meta">{{meta}}</div>
</div>
<img class="photo" src="file://{{P}}/photos/{{photo}}">
{{sticker}}
<svg class="wave" viewBox="0 0 1440 80" preserveAspectRatio="none"><path d="M0 45 C 240 95 480 5 720 35 S 1200 85 1440 25 L1440 80 L0 80Z" fill="#fff"/></svg>
<div class="url">{{DOMAIN}}</div>
</body></html>'''

pages = {
  'home': dict(eyebrow='LAUNDRY SERVICE · BENIN CITY', h1='Cleaner clothes, <span>better care.</span>', photo='hero.jpg',
               meta='<span>Pickup &amp; delivery</span><span>Back in 72 hours</span>',
               sticker='<div class="sticker">Express<br>delivery</div>'),
  'services': dict(eyebrow='OUR SERVICES · BENIN CITY', h1='Care for everything you <span>wear and sleep on</span>', photo='shirts.jpg',
                   meta='<span>Washing &amp; ironing</span><span>Duvets &amp; rugs</span><span>Shoes</span>', sticker=''),
  'pricing': dict(eyebrow='PRICING · BENIN CITY', h1='Clear prices,<br><span>per item.</span>', photo='folded.jpg',
                  meta='<span>Starching add-on</span><span>Bulk quotes</span><span>Back in 72 hours</span>', sticker=''),
}

os.makedirs(P + '/og', exist_ok=True)
for name, v in pages.items():
    html = T.replace('{{P}}', P).replace('{{DOMAIN}}', DOMAIN)
    for k, val in v.items():
        html = html.replace('{{' + k + '}}', val)
    hp = f'{OUT}/{name}.html'; png = f'{OUT}/{name}.png'
    open(hp, 'w').write(html)
    subprocess.run([CH, '--no-sandbox', '--hide-scrollbars', '--window-size=1200,630', '--virtual-time-budget=8000',
                    '--allow-file-access-from-files', f'--screenshot={png}', f'file://{hp}'],
                   stderr=subprocess.DEVNULL, stdout=subprocess.DEVNULL, check=True)
    jpg = f'{P}/og/{name}.jpg'
    Image.open(png).convert('RGB').save(jpg, 'JPEG', quality=86, optimize=True, progressive=True)
    print(name, Image.open(jpg).size, os.path.getsize(jpg) // 1024, 'KB')
