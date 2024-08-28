import { prisma } from "../db/client.js";
const authorizeAdmin = async (req, res, next) => {
    try {
      const email = req.body.email;
      const user = await prisma.user.findUnique({
        where: { email: email },
      });
      console.log(user)
  
      if (user.role !== 'ADMIN') {
        return res.status(403).json({ message: 'Access denied' });
      }
      
      next();
    } catch (err) {
        console.log(err)
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

export default authorizeAdmin  