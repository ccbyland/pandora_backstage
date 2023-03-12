export async function logger(req, res, next) {
  const startTime = Date.now();
  console.log(`logger start...`);
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  await next();
  console.log(`logger end...`, Date.now() - startTime);
}
