# highlight-server

Super simple highlight.js server.

## Endpoints

Post to `/highlight` with a json body like this:

```json
{
    "lang": "md",
    "content": "#Test\n\nJust a simple markdown test"
}
```

> `lang` is optional, and the server will try to detect the language if none is supplied

The server will return a result in the same format:

```json
{
    "lang": "md",
    "content": "<span class=\"hljs-section\"># Test</span>\n\nJust a simple markdown test"
}
```

## Deploying

```
docker run dogbin/highlight-server
```