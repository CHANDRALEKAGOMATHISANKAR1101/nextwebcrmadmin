const adminAuth = (req, res, next) => {
    if (req.user.role !== 'Admin') {
      return res.status(403).json({ msg: 'Access denied' });
    }
    next();
  };
  
  module.exports = adminAuth;
  