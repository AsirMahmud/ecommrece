export default defineEventHandler(async (event) => {
  const dataStorage = useStorage("data");
  await dataStorage.setItem("hello", "world");
  return {
    hello: await dataStorage.getItem("hello"),
  };
});
