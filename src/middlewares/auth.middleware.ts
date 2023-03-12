export async function auth(req, res, next) {
  console.log(`auth start...`);
  const startTime = Date.now();
  console.log(`auth end...`, Date.now() - startTime);
  await next();
}
