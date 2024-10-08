// const jwt = require("jsonwebtoken");
// const db = require("../routes/db-config");
// const bcrypt = require("bcryptjs");

// const login = async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password)
//     return res.json({
//       status: "error",
//       error: "Please enter your email and password",
//     });
//   else {
//     db.query(
//       "SELECT id, email, password FROM users WHERE email=?",
//       [email],
//       async (Err, result) => {
//         if (Err) throw Err;
//         if (!result[0] || !(await bcrypt.compare(password, result[0].password)))
//           return res.json({
//             status: "error",
//             error: "incorrect email or password",
//           });
//         else {
//           const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, {
//             expiresIn: process.env.JWT_EXPIRES,
//             httpOnly: true,
//           });
//           const cookieOptions = {
//             expiresIn: new Date(
//               Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
//             ),
//             httpOnly: true,
//           };
//           res.cookie("userRegistered", token, cookieOptions);
//           return res.json({
//             status: "success",
//             success: "User has been logged in",
//           });
//         }
//       }
//     );
//   }
// };
// module.exports = login;

const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      status: "error",
      error: "Please enter your email and password",
    });
  } else {
    db.query(
      "SELECT * FROM users WHERE email=?",
      [email],
      async (err, result) => {
        if (err) {
          throw err;
        }
        if (
          !result[0] ||
          !(await bcrypt.compare(password, result[0].password))
        ) {
          return res.json({
            status: "error",
            error: "Incorrect email or password",
            httpOnly: true,
          });
        } else {
          const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES,
          });
          const cookieOptions = {
            expiresIn: new Date(
              Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
          };
          // Send token as a response, not as a cookie
          res.cookie("userRegistered", token, cookieOptions);
          return res.json({
            status: "success",
            success: "logged in successfully",
            token: token,
          });
        }
      }
    );
  }
};

module.exports = login;

// else {
//   const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRES,
//     httpOnly: true,
//   });
//   const cookieOptions = {
//     expiresIn: new Date(
//       Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true,
//   };
//   res.cookie("userRegistered", token, cookieOptions);
//   return res.json({
//     status: "success",
//     success: "User has been logged in",
//   });
