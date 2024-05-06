const form=document.getElementById("locationform");
const longitute=document.getElementById("longitude");
const latitude=document.getElementById("latitude");
const result=document.querySelector(".info");
const aqi=document.getElementById("aqi");
const co=document.getElementById("co");
const no=document.getElementById("no");
const ox=document.getElementById("ox");
const pm1=document.getElementById("pm1");
const pm2=document.getElementById("pm2");
const so=document.getElementById("so");
locationForm.addEventListener("submit",(event) =>{
     event.preventDefault();
    
     const latitude1=latitude.value;
     const longitude1=longitude.value;
     
     const url = `https://air-quality.p.rapidapi.com/history/airquality?lon=${longitude1}&lat=${latitude1}`;
     const options = {
         method: 'GET',
         headers: {
             'X-RapidAPI-Key': 'daf259f55emsh93d6f8396515274p14c710jsn8fe158973555',
             'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
         }
     };
     
     fetch(url,options)
         .then(response=>response.json())
         .then(resultcontainer=>{
          let readings=resultcontainer.data[0];
          aqi.textContent=readings.aqi;
          co.textContent=readings.co;
          no.textContent=readings.no2;
          ox.textContent=readings.o3;
          pm1.textContent=readings.pm25;
          pm2.textContent=readings.pm10;
          so.textContent=readings.so2;
          result.style.display='flex';
          
           
         })
});