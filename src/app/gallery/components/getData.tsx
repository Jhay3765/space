export const GetData = async () => {
  const res = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=skPGoPvV0g84Ck2T17IFKGdaSRsT9QuNbrUsZh0F&count=20"
  );
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
};
