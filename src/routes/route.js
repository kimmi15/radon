const express = require('express');
const { authorscheme_3 } = require('../controllers/authorcontroller3');
const router = express.Router();

const {createBook , findBookByCost ,findByNamesendBook ,findAuthor, byAutherId, ageAuthor} = require('../controllers/bookcontroller3')

router.post('/createbook',createBook);
router.post ('/createAuthor',authorscheme_3)
router.get('/findByNamesendBook',findByNamesendBook);
router.get('/findAuthor',findAuthor);
router.get('/findBookByCost',findBookByCost)


router.get('/books-by-authorid/:Author_Id', byAutherId);
router.get('/reatingbookby50yold',ageAuthor)

module.exports = router;