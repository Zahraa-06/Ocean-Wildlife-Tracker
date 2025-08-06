const RESOURCE_PATH = '/sightings'

const viewController = {
  signUp(req, res, next) {
    res.render('/auth/SignUp')
  },
  signIn(req, res, next) {
    res.render('/auth/SignIn')
  },
  index(req, res, next) {
    res.render('sightings/Index', res.locals.data)
  },
  show(req, res, next) {
    res.render('sightings/Show', res.locals.data)
  },
  edit(req, res, next) {
    res.render('sightings/Edit', {
      ...res.locals.data,
      user: req.user
    })
  },
  newView(req, res, next) {
    res.render('sightings/New', res.locals.data)
  },
  redirectHome(req, res, next) {
    if (res.locals.data.token) {
      res.redirect(`${RESOURCE_PATH}?token=${res.locals.data.token}`)
    } else {
      res.redirect(RESOURCE_PATH)
    }
  },
  redirectShow(req, res, next) {
    if (res.locals.data.token) {
      res.redirect(`${RESOURCE_PATH}/${req.params.id}?token=${res.locals.data.token}`)
    } else {
      res.redirect(`${RESOURCE_PATH}/${req.params.id}`)
    }
  }
}

module.exports = viewController