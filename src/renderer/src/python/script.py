import sys
import yt_dlp
import os

def download_video(url, quality):
    os.makedirs('downloads', exist_ok = True) # Making sure that the folder exist
    
    quality_options = {
        'low': 'worstvideo[ext=mp4]+worstaudio[ext=m4a]/worst', # Bad quality
        'medium': 'bv*[height<=720][ext=mp4]+ba[ext=m4a]/b[height<=720][ext=mp4]', # Okay quality
        'high': 'bv*[height<=1080][ext=mp4]+ba[ext=m4a]/b[height<=1080][ext=mp4]', # Holyshit quality
        'highest': 'bv*[ext=mp4]+ba[ext=m4a]/b[ext=mp4]' # Goddamn quality
    }
    
    ydl_opts = { 
        'format': quality_options.get(quality), # getting the format option based on the selected format quality
        'merge_output_format': 'mp4', # always mp4 my guy :>
        'outtmpl': 'downloads/%(title)s.%(ext)s', # this is where the output video should be located 
    }

    # this class is where it download the video by getting the link
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])


if __name__ == "__main__":
    # this checks if the command have 2 passing arguments e.g. ('youtube url', 'video qualiy')
    # also it checks if and only if the first argument that passed is a valid url that starts with 'http'
    # example (valid url [argv[1]]: "https://www.youtube.com/watch?v=lSD_L-xic9o", valid quality [argv[2]]:"highest")
    if len(sys.argv) > 2 and sys.argv[1].startswith("http"):
        video_url = sys.argv[1]
        quality = sys.argv[2] if sys.argv[2] in ["low", "medium", "high", "highest"] else "highest"
        print(f"Downloading: {video_url} at {quality} quality...")
        download_video(video_url, quality)
        print("✅ Download complete!")
    else:
        print("❌ No valid URL or quality provided. Usage: python script.py <URL> <quality>")
        
download_video("https://www.facebook.com/watch?v=1288664205496002", "highest")
# Youtube Link testing:
# https://www.youtube.com/watch?v=lSD_L-xic9o
