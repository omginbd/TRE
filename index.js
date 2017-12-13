const express = require("express")

const app = express()

app.use(express.static(process.cwd() + "/dist/"))

app.listen(process.env.PORT || 3000)
