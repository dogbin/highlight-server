const express = require('express')
const hljs = require('highlight.js')
const app = express()

app.use(express.json())

app.post('/highlight', (req, res) => {
    let result = undefined
    if (req.body.lang) {
        result = hljs.highlight(req.body.lang, req.body.content)
    } else {
        result = hljs.highlightAuto(req.body.content)
    }
    res.send({
        lang: result.language,
        content: result.value
    })
})

app.listen(8080)