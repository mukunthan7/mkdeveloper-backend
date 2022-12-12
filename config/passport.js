import pkg from "passport-jwt";
import User from "../model/User.js";

const JwtStrategy = pkg.Strategy;
const ExtractJwt = pkg.ExtractJwt;

let opts = {};

export default (passport) => {
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = "secret";
  passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
      User.findOne({ id: jwt_payload.sub }, function (err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
          // or you could create a new account
        }
      });
    })
  );
};
