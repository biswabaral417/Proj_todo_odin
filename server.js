const express = require('express');
const app = express();
const path=require('path')

//serving the build folder from react app npm run build creates this folder which is copied here ad being served by nodejs
app.use('/Proj_todo_odin', express.static(path.join(__dirname, 'dist')));
// the /^\/(?!api).*/ is regex  used in app.get is telling server to let html page handle all routes internally within react app if /* is not equal to /api

app.get(/^\/Proj_todo_odin\/(.*)/, function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


app.listen(3000, () => {
  console.log(`Server running on port ${3000}`);
});