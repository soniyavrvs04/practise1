// fetch('https://random-words-api.vercel.app/word');
fetch('https://dog.ceo/api/breeds/image/random')
.then((res=>res.json()))
.then((msg=>console.log(msg.message,msg.status)))
.catch((error)=>console.log(error));
