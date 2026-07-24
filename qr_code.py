import qrcode
img = qrcode.make("https://edu-dz.vercel.app/")
img.save("qrcode.png")

