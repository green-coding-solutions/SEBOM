FROM python:3.14.2-slim-trixie

# No need to pin versions here for tmux, emacs, xterm and pv as we have that
# via container dependency inspection of the GMT

RUN apt-get update && \
    apt-get install -y --no-install-recommends --no-install-suggests tmux gcc build-essential xterm pv libonig-dev && \
    rm -rf /var/lib/apt/lists/*

RUN pip install babi