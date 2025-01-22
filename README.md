# CDHU Whisper

A whisper app that can be quickly deployed with docker locally.

## Installation:

1. First, you need to install Docker Desktop: https://www.docker.com/products/docker-desktop/. Scroll a bit, and click the download link. If you are using an Apple Mac with a M-series processor (M1, M2, M3, M4), you should download the Apple Silicon version, otherwise, go with the Inte Chip version. For Windows, open the 'About your PC' page on your computer. In the device specifications, you will see the 'System Type'. If it's a x64-based processor, you need to download Windows - AMD64. If it's an ARM-based processor, you need to download Windows-ARM64.  
2. To use Docker Desktop the first time, you might need to restart your computer and setup a Docker account, but they are for free.
3. Open the terminal from Docker Desktop and run the following command to download the script to run the app:
```
curl -o https://raw.githubusercontent.com/AlexanderWinters/cdhu-whisper-gpu/refs/heads/main/docker-compose.yml
```
<img width="635" alt="Screenshot 2025-01-22 at 11 14 18" src="https://github.com/user-attachments/assets/fce5a959-9980-42bd-8d64-1a675807846a" />

4. After downloading the file, run the following command to deploy the app:
```
docker compose up -d
```
## Running:
You can now open your browser and go to http://localhost:3000 . You should now see a container appearing in the Docker Desktop app, in the containers section. You can now manage whisper from there:


<img width="1239" alt="Screenshot 2025-01-22 at 09 57 02" src="https://github.com/user-attachments/assets/bdeee481-79db-459c-a665-9e744be7ab9c" />
<br>
<br>
<br>

>[!IMPORTANT]
>Right now, the application only works on Google Chrome.

