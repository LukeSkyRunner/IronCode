'use strict';

const { Router } = require('express');

const passport = require('passport');

const router = new Router();

router.get('/sign-up', (req, res, next) => {
  res.render('sign-up');
});

router.post(
  '/sign-up',
  passport.authenticate('local-sign-up', {
    successRedirect: '/home',
    failureRedirect: '/sign-up'
  })
);

router.post(
  '/sign-up',
  passport.authenticate('github', {
    successRedirect: '/home',
    failureRedirect: '/sign-up'
  })
);

router.get('/sign-in', (req, res, next) => {
  res.render('sign-in');
});

router.post(
  '/sign-in',
  passport.authenticate('local-sign-in', {
    successRedirect: '/home',
    failureRedirect: '/sign-in'
  })
);

router.get(
  '/github',
  passport.authenticate('github', {
    successRedirect: '/home',
    failureRedirect: '/authentication/sign-in'
  })
);

router.get(
  '/github-callback',
  passport.authenticate('github', {
    successRedirect: '/home',
    failureRedirect: '/authentication/sign-in'
  })
);

router.post('/sign-out', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
