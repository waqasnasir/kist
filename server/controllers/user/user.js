import { User } from '../../models'
import bCrypt from 'bcrypt-nodejs'
import jwt from 'jsonwebtoken'
import { INACTIVE } from '../../constants'
import randomstring from 'randomstring';
import { sendEmail } from '../../common/helper'
import { registerEmail } from './email-helper'
import { JWT_SECRET } from '../../constants';

module.exports = {
    getAllUsers: async (req, res) => {
        const users = await User.findAll()
        if (users) return res.status(200).send({ users })
        return res.status(500).send({ message: "internal database error" })
    },
    signin: async (req, res) => {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })
        if (!user) res.status(200).send({ success: false, message: "No user found" })
        const passwordIsValid = await bCrypt.compareSync(password, user.password)
        if (!passwordIsValid) return res.status(401).send({ success: false, message: "Invalid credentials" })
        if (user.status === INACTIVE) return res.status(401).send({ success: false, message: "Your account is not active. Please verify your email to activate" })
        // create a token
        var token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: 86400 });// expires in 24 hours
        const { id, username, status } = user
        const data = { id, email, username, status, token }
        return res.status(200).send({ success: true, data })
    },
    signup: async (req, res) => {
        const { password, username, email } = req.body
        const hashedPass = bCrypt.hashSync(password, bCrypt.genSaltSync(8), null)
        try {
            const user = await User.findOne({ where: { email } })
            if (user) return res.status(200).send({ success: false, message: "A user already exsit with this email" })
            const newUser = await User.create({ email, password: hashedPass, username, temp_token: randomstring.generate(20) })
            if (!newUser) return res.status(500).send({ success: false, message: "There was a problem registering a user" })
            const template = await registerEmail(email, username, newUser.temp_token)
            console.log(template)
            //await sendEmail(template, { email, subject: 'Claim Your Email Verification' });
            return res.status(200).send({ success: true, message: "user has been successfully registered. Please verify email to activate the account" })
        } catch (err) {
            return res.status(500).send({ success: false, error: err })
        }
    },
    verify: async (req, res) => {
        const { link } = req.query
        const user = await User.findOne({where:{temp_token:link}})
        if(!user) return res.status(200).send({ success: false, message: "Your link has been expired" })
        user.temp_token=null
        user.status='active'
        await user.save()
        return res.status(200).send({ success: true, message: "Your account has been verified" })
    },
    resetPassword: async (req, res) => {
        const {reset_email }= req.query || req.body
        const user = await User.findOne({where:{email:reset_email}})
        if(!user) return res.status(200).send({ success: false, message: "Account does not exist with given email" })
        user.temp_token=randomstring.generate(20)
        await user.save()
        const template = await registerEmail(user.email, user.username, user.temp_token)
        console.log(template)
        //await sendEmail(template, { email, subject: 'Claim Your Email Verification' });
        return res.status(200).send({ success: true, message: "Password reset link has been sent to your email" })
    }
}