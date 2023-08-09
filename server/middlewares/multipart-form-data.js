import multer from 'multer';

const upload = (validation) => {
  return multer({
    // dest: 'uploads/',
    fileFilter: function (req, file, callback) {
      if (validation(file)) {
        return callback(new Error('Wrong extension type ' + file.originalname));
      }

      callback(null, true);
    }
  }).single('file');
}

export default {
  excel: () => {

  },
  img: () => {
    const validation = (file) => {
      return !/\.(jpeg?|jpg?|png)$/.test(file.originalname);
    }
    return upload(validation);
  }
}

// module.exports = upload();