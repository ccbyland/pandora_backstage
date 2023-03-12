export async function auth(req, res, next) {
  const startTime = Date.now();
  console.log(`auth start...`);
  await next();
  console.log(`auth end...`, Date.now() - startTime);
}
