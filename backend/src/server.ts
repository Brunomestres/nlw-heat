import { servetHttp } from "./app";

servetHttp.listen(4000, () => {
  console.log("Server running");
});
