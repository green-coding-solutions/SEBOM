# Ubuntu 24.04.3 as of 04. Jan 2025
FROM ubuntu@sha256:c35e29c9450151419d9448b0fd75374fec4fff364a27f176fb458d472dfc9e54

# No need to pin versions here for tmux, nano, xterm and pv as we have that
# via container dependency inspection of the GMT

RUN apt-get update && \
    apt list xterm && \
    apt-get install -y --no-install-recommends --no-install-suggests tmux nano xterm pv && \
    rm -rf /var/lib/apt/lists/*