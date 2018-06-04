FROM python:3-jessie
WORKDIR /usr/src/app
COPY pinned.txt ./
COPY src/static/index.html .
COPY src/static/dist dist
RUN pip install --no-cache-dir -r pinned.txt
CMD ["python", "-m", "http.server", "8080"]
