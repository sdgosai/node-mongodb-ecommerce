// const tokenSender = async (user, statusCode, res) => {
//     const token = await user.genrateAuthToken();

//     /// options for cookie and expires
//     const options = {
//         expires: new Date(
//             Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000 //24 hour
//         ),
//         httpOnly: true
//     };

//     return res.status(statusCode).cookie('token', token, options).json({
//         success: true,
//         user,
//     })
// }

// module.exports = tokenSender ;