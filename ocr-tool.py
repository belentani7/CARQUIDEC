import sys, io, os, argparse
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

import pytesseract
from PIL import Image
import cv2

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

def ocr_image(image_path, lang='spa+eng'):
    """Extract text from a single image."""
    img = Image.open(image_path)
    text = pytesseract.image_to_string(img, lang=lang)
    return text.strip()

def ocr_video(video_path, lang='spa+eng', sample_interval=1):
    """Extract text from video frames."""
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        return f"Error: No se pudo abrir {video_path}"
    
    fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    duration = total_frames / fps
    
    results = []
    frame_count = 0
    sampled = 0
    
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        
        if frame_count % int(fps * sample_interval) == 0:
            # Convert to PIL Image
            frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            img = Image.fromarray(frame_rgb)
            
            text = pytesseract.image_to_string(img, lang=lang)
            text = text.strip()
            
            if text and len(text) > 5:
                time_sec = frame_count / fps
                minutes = int(time_sec // 60)
                seconds = int(time_sec % 60)
                results.append(f"[{minutes:02d}:{seconds:02d}] {text}")
                sampled += 1
        
        frame_count += 1
    
    cap.release()
    
    output = f"Video: {os.path.basename(video_path)}\n"
    output += f"Duracion: {duration:.1f}s | Frames muestreados: {sampled}\n"
    output += "=" * 60 + "\n"
    output += "\n".join(results) if results else "No se encontro texto"
    
    return output

def main():
    parser = argparse.ArgumentParser(description='OCR para imagenes y videos')
    parser.add_argument('input', help='Ruta a imagen o video')
    parser.add_argument('--lang', default='spa+eng', help='Idiomas (default: spa+eng)')
    parser.add_argument('--interval', type=float, default=1, help='Intervalo de muestreo en segundos (videos)')
    parser.add_argument('--output', help='Guardar resultado en archivo')
    
    args = parser.parse_args()
    
    if not os.path.exists(args.input):
        print(f"Error: {args.input} no existe")
        return
    
    ext = os.path.splitext(args.input)[1].lower()
    image_exts = ['.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.tif', '.webp', '.gif']
    video_exts = ['.mp4', '.avi', '.mkv', '.mov', '.wmv', '.flv', '.webm']
    
    if ext in image_exts:
        print(f"OCR imagen: {args.input}")
        print("=" * 60)
        result = ocr_image(args.input, args.lang)
        print(result if result else "No se encontro texto")
    
    elif ext in video_exts:
        print(f"OCR video: {args.input}")
        print(f"Muestreo cada {args.interval}s...")
        print()
        result = ocr_video(args.input, args.lang, args.interval)
        print(result)
    
    else:
        print(f"Formato no soportado: {ext}")
        print(f"Imagenes: {', '.join(image_exts)}")
        print(f"Videos: {', '.join(video_exts)}")
        return
    
    if args.output:
        with open(args.output, 'w', encoding='utf-8') as f:
            f.write(result)
        print(f"\nGuardado en: {args.output}")

if __name__ == '__main__':
    main()
