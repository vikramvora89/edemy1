const baseUrl = process.env.NODE_ENV === "production" 
? 'https://edemy1.vercel.app' 
: 'http://localhost:3000';

export default baseUrl;
