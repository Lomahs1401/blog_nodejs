class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug (slug là param động trên url)
    show(req, res) {
        res.send('NEWS DETAIL');
    }
}

export default new NewsController();
