const alternatives = [
  {text:"", images:"images/cat-01.gif"},
  {text:"I promise it will be unforgettable!", images:"images/cat-02.gif"},
  {text:"Think again, :(((", images:"images/cat-03.gif"},
  {text:"Come on, dare to say yes", images:"images/cat-04.gif"},
  {text:"Don't let fear stop you", images:"images/cat-05.gif"},
]
const ohyes = {text:"I knew you would accept! I love you so much, my Princess!!!!! Mahal na mahal kita talaga! Thank you so much mahal ahhhh, dumating ka sa buhay ko and ayoko nang mawala ka pa. I don't want anyone else na, I don't want to start over again. I love you so much, always and forever. Be my last na talaga, pleaseeeee!! If ever may problem tayo, pag-usapan natin ng maayos, okay? Communication is a must talaga. Mahirap pag silent treatment, kaya. Minamahal kita ng buong-buo, no joke, seryosong-seryoso ako sayo, Princess. SOBRANG MISS NA MISS NA MISS KITA, MAHAL. How I wish to have a date with you this Valentine's, huhuhu. Want ko Valentine's Date with you. Next yearrrr? Pag nandito ka na sa Manila, hehehehe. I wish you happiness mahal, and I'm praying na sana pumasa ka sa USTET, sa gusto mong school. And remembe na I'm always proud of you always!!! Galingan mo pa sa school, goodluck mahal. I'm praying for your happiness, babyyy. I promise you, IKAW LANG MAHAL KO AND I'D NEVER CHEAT ON YOU. NEVER EVER IN MY LIFE, CROSS MY HEART. MAHAL NA MAHAL NA MAHAL KITA, I DON'T WANT TO LOSE YOU, AYSUSSS. YOU'RE THE BEST GIRL!!! Stay safe and healthy always, mahal!!! BEST GIRL TALAGA KASI I'M SO COMFORTABLE WITH YOUUUUU. Words cannot express how much I love you, so cheeeesy ah HAHAHAHAHAHAH. Basta alam mo na yun!!! MAHAL NA MAHAL TALAGA KITA AND I'M SUPER ULTRA MEGA COMMITTED TO THIS RELATIONSHIP OF OURS, swearrrrr. THANK YOU SO MUCH DIN MAHAL FOR LOVING ME!!! FOR SUPPORTING ME!!! Wag kang magbabago, mahal ahhhh. Akin ka lang talaga, and sayo lang ako, promise. Hindi ko kailangan ng ibang babae, hinding hindi kita ipagpapalit. Someday, we'll get married, plano plano na HAHAHAHHA please tuparin naman natin mga pangako T_T, ayoko nang umasa sa mga pangakong hindi naman pala matutupad. I LOVE YOU SO MUCH PRINCESS SALUTAN-MANGASAR, HEEHEHEHEHEH, MMWUUUAA MMWUUUAAA. Hinding hindi ako magsasawa sayo mahal!! If nagoverthink ka nanaman, sabihin mo sakin, wag mong i-keep sa sarili mo haaaa, I don't want you to keep on crying. I don't want you to feel lonely, because we're on this journey together. I can't wait to hold you in my arms na ulit, baby. I miss you so much. See you soon, mahal. HAPPY VALENTINE'S!!!!!!!!!!!! I'M SO SORRY WALANG FLOWERS T_T", images:"images/iloveyou.png"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "YES, OF COURSE!!!!"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'HMMP, NOOOO!'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})