import sys
import yt_dlp

def download_video(url):
    ydl_opts = {
        'format': 'best',
        'outtmpl': 'downloads/%(title)s.%(ext)s',
        'noprogress': False  # Show download progress
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1].startswith("http"):
        video_url = sys.argv[1]
        print(f"Downloading: {video_url}")
        download_video(video_url)
        print("✅ Download complete!")
    else:
        print("❌ No valid URL provided.")
