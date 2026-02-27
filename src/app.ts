import { getUser } from "./core/auth";

(async()=>{
  const { data } = await getUser();
  if(!data.user && !location.pathname.includes("login")){
    location.href="/src/pages/login.html";
  }
})();
