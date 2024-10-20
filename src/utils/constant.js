export const NetFlix_bg_image = "https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_small.jpg";
export const Netflix_logo ='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'


console.log("data",process.env.REACT_APP_API_TMDB_TOKEN)
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:`Bearer ${process.env.REACT_APP_API_TMDB_TOKEN}`
    }
  };
export const  IMG_URL ="https://image.tmdb.org/t/p/w500"
export const SUPPORTED_LANG = [
  {
    identifier:"en",
    value:"English"
  },
  {
    identifier:"hindi",
    value:"Hindi"
  },
  {
    identifier:"german",
    value:"German"
  }
]
 
export const GPT_SECRET_KEY = process.env.REACT_APP_GPT_SECRET_KEY