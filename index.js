const express = require('express');
const fileUpload = require('express-fileupload');

// initialize express
const app = express();

app.use(fileUpload());


// this would be in routes normally
app.post('/upload', (req, res) => {
  if(req.files === null) {
    return res.status(400).json({ msg: 'No file found' });

  }

  // variable for file in req.files
  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if(err) {
      console.error(err);
      return res.status(500).send(err);
    }

    // if no errors
    res.json({ fileName: file.name, filePath: `/uploads${file.name}` });
  });
});

app.listen(5000, () => console.log('Server started...'));
