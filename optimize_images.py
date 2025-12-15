import os
from PIL import Image

def optimize_image(filepath):
    try:
        with Image.open(filepath) as img:
            # Resize if too large (max width 1920)
            if img.width > 1920:
                ratio = 1920 / img.width
                new_height = int(img.height * ratio)
                img = img.resize((1920, new_height), Image.Resampling.LANCZOS)
            
            # Save with optimization
            img.save(filepath, optimize=True, quality=80)
            print(f"Optimized: {filepath}")
    except Exception as e:
        print(f"Failed to optimize {filepath}: {e}")

files = ['bg.jpg', 'model.png', 'card-img.jpg', 'user.jpg', 'icon.jpg']

for f in files:
    if os.path.exists(f):
        optimize_image(f)
    else:
        print(f"File not found: {f}")
