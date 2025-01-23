# CDHU Whisper

A whisper web app. 

## Run locally:

1. Download docker compose file:
```
curl -o docker-compose.yml https://raw.githubusercontent.com/AlexanderWinters/cdhu-whisper-gpu/refs/heads/main/docker-compose.yml
```
2. And then deploy with docker compose:
```
docker compose up -d
```
3. You can now open your browser and go to http://localhost:3000 (Only works on Chrome)

## Run on a server:
Same as above, but for the webGPU to work, the app needs to be served over HTTPS.
