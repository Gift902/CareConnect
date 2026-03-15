const multer = require('multer');
const path = require('path');
const fs = require('fs');
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath;
    if (file.fieldname === 'image') {
      uploadPath = path.join(__dirname, '../uploads/images');
    } else if (file.fieldname === 'cv') {
      uploadPath = path.join(__dirname, '../uploads/cv');
    } else {
      return cb(new Error('Invalid field name'));
    }
    ensureDir(uploadPath);
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});
const fileFilter = (req, file, cb) => {
  if (file.fieldname === 'image') {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Only image files are allowed for profile image'));
  } else if (file.fieldname === 'cv') {
    if (file.mimetype === 'application/pdf') cb(null, true);
    else cb(new Error('Only PDF files are allowed for CV'));
  } else {
    cb(new Error('Unknown field'));
  }
};
module.exports = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});