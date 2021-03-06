const path = require('path')
const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        disable: process.env.NODE_ENV === 'development',
        // dest: 'public',
        register: true,
        sw: '/sw.js'
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        JWT_SECRET: "djhfghbdsgrasklkajsdgf",
        DATABASE_URL: "postgres://ysolgeionvcthk:4d4a98f10505774054b0a210bec01c4915d2ecd5ac2527a6a3fd3b9e47b7a2f8@ec2-34-247-151-118.eu-west-1.compute.amazonaws.com:5432/d6rumlmipjcus",
        SENDGRID_KEY: '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',
        CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/dgybc86l6/image/upload",
        CLOUDINARY_VIDEO_URL: "https://api.cloudinary.com/v1_1/dgybc86l6/video/upload",
        STRIPE_SECRET_KEY: "sk_test_2DqyjEwaU0Nq0PpEMVQ3qSAw00zgrbnfPk",
        STRIPE_PUBLISHABLE_KEY: "pk_test_ZaZZWZGlvdIn12yFleIqyjSI00G4e18Kf7"
    }
})
