const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  console.log("entering controller function");
  const { email, password: Npassword } = req.body;
  if (!email || !Npassword) {
    return res.json({
      status: "error",
      error: "Please enter your email and password",
    });
  } else {
    console.log(email);
    db.query(
      "SELECT email FROM users WHERE email = ?",
      [email],
      async (err, result) => {
        if (err) throw err;
        if (result[0]) {
          return res.json({
            status: "error",
            error: "Email has already been registered",
          });
        } else {
          const password = await bcrypt.hash(Npassword, 8);
          console.log(password);
          db.query(
            "INSERT INTO users SET ?",
            { email: email, password: password },
            (error, results) => {
              if (error) throw error;
              return res.json({
                status: "success",
                success: "User has been registered",
              });
            }
          );
        }
      }
    );
  }
};

module.exports = register;

// const db = require("../routes/db-config");
// const bcrypt = require("bcryptjs");

// const register = async (req, res) => {
//   try {
//     const { email, password: Npassword } = req.body;

//     if (!email || !Npassword) {
//       return res.status(400).json({
//         status: "error",
//         error: "Please enter your email and password",
//       });
//     }

//     const [existingUser] = await db.query(
//       "SELECT * FROM users WHERE email = ?",
//       [email]
//     );

//     if (existingUser) {
//       return res.status(409).json({
//         status: "error",
//         error: "Email has already been registered",
//       });
//     }

//     const password = await bcrypt.hash(Npassword, 8);
//     await db.query("INSERT INTO users SET ?", { email, password });

//     return res.status(201).json({
//       status: "success",
//       message: "User has been registered",
//     });
//   } catch (error) {
//     console.error("Error in registration:", error);
//     return res.status(500).json({
//       status: "error",
//       error: "Internal server error",
//     });
//   }
// };

// module.exports = register;
