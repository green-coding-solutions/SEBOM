FROM debian:trixie-slim

# No need to pin versions here for tmux, emacs, xterm and pv as we have that
# via container dependency inspection of the GMT

RUN apt-get update && \
    apt-get install -y --no-install-recommends --no-install-suggests tmux emacs xterm pv && \
    rm -rf /var/lib/apt/lists/*