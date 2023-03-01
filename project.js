const tributeButton = document.getElementById('tributeBtn');

const toggleTribute_Button = ()=>{
  const initialText = 'Show more';
  
   if(tributeBtn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
     tributeBtn.textContent = 'Show less';
     const change = document.querySelector('.dis2');
     change.style.height = '180px';
   } else {
     tributeBtn.textContent = initialText;
     const change = document.querySelector('.dis2');
     change.style.height = '0px';
   }

};

tributeButton.addEventListener('click', toggleTribute_Button);

const projectButton = document.getElementById('projectBtn');

const toggleProject_Button = ()=>{
  const initialText = 'Show more';
  
   if(projectBtn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
     projectBtn.textContent = 'Show less';
     const change = document.querySelector('.dis3');
     change.style.height = '180px';
   } else {
     projectBtn.textContent = initialText;
     const change = document.querySelector('.dis3');
     change.style.height = '0px';
   }

};

projectButton.addEventListener('click', toggleProject_Button);

const movieButton = document.getElementById('movieBtn');

const toggleMovie_Button = ()=>{
  const initialText = 'Show more';
  
   if(movieBtn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
     movieBtn.textContent = 'Show less';
     const change = document.querySelector('.dis4');
     change.style.height = '180px';
   } else {
     movieBtn.textContent = initialText;
     const change = document.querySelector('.dis4');
     change.style.height = '0px';
   }

};

movieButton.addEventListener('click', toggleMovie_Button);

const websiteButton = document.getElementById('websiteBtn');

const toggleWeb_Button = ()=>{
  const initialText = 'Show more';
  
   if(websiteBtn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
     websiteBtn.textContent = 'Show less';
     const change = document.querySelector('.dis1');
     change.style.height = '180px';
   } else {
     websiteBtn.textContent = initialText;
     const change = document.querySelector('.dis1');
     change.style.height = '0px';
   }

};

websiteButton.addEventListener('click', toggleWeb_Button);

const gameButton = document.getElementById('gameBtn');

const toggleGame_Button = ()=>{
  const initialText = 'Show more';
  
   if(gameBtn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
     gameBtn.textContent = 'Show less';
     const change = document.querySelector('.dis5');
     change.style.height = '180px';
   } else {
     gameBtn.textContent = initialText;
     const change = document.querySelector('.dis5');
     change.style.height = '0px';
   }

};

gameButton.addEventListener('click', toggleGame_Button);