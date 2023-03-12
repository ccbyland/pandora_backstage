export async function logger(req, res, next) {
  console.log(`logger start...`);
  const startTime = Date.now();
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  console.log(`logger end...`, Date.now() - startTime);
  await next();
}
