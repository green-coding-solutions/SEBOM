# Ubuntu 24.04.3 as of 04. Jan 2025
FROM ubuntu@sha256:c35e29c9450151419d9448b0fd75374fec4fff364a27f176fb458d472dfc9e54

RUN sed -i 's|http://archive.ubuntu.com/ubuntu/|http://old-releases.ubuntu.com/ubuntu/|g' /etc/apt/sources.list && \
    apt-get update && \
    apt list xterm && \
    apt-get install -y --no-install-recommends \
      tmux=3.4-1ubuntu0.1 \
      nano=7.2-2ubuntu0.1 \
      xterm=390-1ubuntu3 \
      pv=1.8.5-2build1 && \
    rm -rf /var/lib/apt/lists/*
