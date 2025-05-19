const authService = require('../services/authService');

exports.login = async (req, res) => {
  try {
    const { token, message, user } = await authService.login(req.body);

    // Set cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: 'lax',
    });

    res.status(200).json({ message, user });

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};



exports.logout = async (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Logged out successfully' });
};




exports.getme = async (req, res) => {
  try {
    const userId = req.user.id;
    // console.log("req.user from getme",req.user.id)
    const {user} = await authService.getme(userId)
 
    // return {

    //   user: {
    //     id: user.id,
    //     name:user.name,   
    //     email: user.email,
    //     role: user.role
       
    //   },
    // }
    res.status(200).json({ user });
  } catch (err) { 
    res.status(400).json({ message: err.message });
  }
};


exports.registerPatient= async (req,res)=>{
  try {
    const{message,user}= await authService.registerPatient(req.body)
    // console.log("user from register patient",user)
    res.status(200).json({message,user})
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}