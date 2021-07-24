import config from '../config/index'
import UserModel from '../models/User/userModel'
import passport  from 'passport'
import { JwtPayload } from '../types/auth'
import { Strategy, ExtractJwt, } from 'passport-jwt'

const opts : any = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.JWT_SECRET;

passport.use(new Strategy(opts, async (jwt_payload, done) => {
    try {
        const user = await UserModel.findById(jwt_payload.id);
        if (!user) {
            return done(new Error('ไม่พบผู้ใช้ในระบบ'), null)
        }
        console.log(jwt_payload)
        return done(null, user);

    } catch (error) {
        done(error)
    }
}));
const auth_login = passport.authenticate('jwt', { session: false })
export default auth_login
