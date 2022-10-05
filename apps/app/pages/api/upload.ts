import fs from 'fs'
// import formidable from 'formidable'

// const upload = async (req, res) => {
//     const form = new formidable.IncomingForm()
//     form.parse(req, (err, fields, files) => {
//         const oldpath = files.file.path
//         const newpath = `./public/${files.file.name}`
//         fs.rename(oldpath, newpath, (err) => {
//         if (err) throw err
//         res.send('File uploaded and moved!')
//         })
//     })
//     }