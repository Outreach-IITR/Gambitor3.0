import bcrypt from 'bcrypt';

const password = 'your_password';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, function(err, hash) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Hashed password: ${hash}`);
});
