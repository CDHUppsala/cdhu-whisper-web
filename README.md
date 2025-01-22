# CDHU Whisper

Installation:

1. First, you need to install Docker Desktop: https://www.docker.com/products/docker-desktop/. Scroll a bit, and click the download link. 
2. To use Docker Desktop you might need a Docker account, but they are for free.
3. Download the docker-compose file either in the terminal:
```curl -o https://raw.githubusercontent.com/AlexanderWinters/cdhu-whisper-gpu/refs/heads/main/docker-compose.yml
```
or download the file from the repository: https://github.com/AlexanderWinters/cdhu-whisper-gpu.git
4. Open the terminal and run the following command:
```docker compose up -d
```

You should now see a container appearing in the Docker Desktop app, in the containers section. You can now manage whisper from there.

