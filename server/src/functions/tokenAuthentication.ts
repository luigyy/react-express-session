import jwt from "jsonwebtoken";
const secret = "mysupersecret"; //save this in .env
//
export function decodeToken(token: string) {
  const data = jwt.decode(token);
  return data;
}

export function veriyToken(token: string) {
  const payload = jwt.verify(token, secret);
  return payload;
}

//
export function signToken(id: string) {
  const token = jwt.sign(
    {
      exp: 60 * 60,
      data: id,
    },
    secret
  );
  return token;
}
