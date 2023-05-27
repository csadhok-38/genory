
let i=0;
const strset = ["It was 94 fahrenheit outside, so Father Christmas went for a walk. When they got to the White House, they stared in horror for a few moments, then turned into a slug and crawled away. Adarsh saw the whole thing, but was not surprised — Father Christmas weighs 300 pounds, and it was a hot day.", "It was 94 fahrenheit outside, so Big Daddy went for a walk. When they got to the soup kitchen, they stared in horror for a few moments, then melted into a puddle on the sidewalk. Adarsh saw the whole thing, but was not surprised — Big Daddy weighs 300 pounds, and it was a hot day.", "It was 94 fahrenheit outside, so Big Daddy went for a walk. When they got to Disneyland, they stared in horror for a few moments, then turned into a slug and crawled away. Adarsh saw the whole thing, but was not surprised — Big Daddy weighs 300 pounds, and it was a hot day.", "It was 94 fahrenheit outside, so Big Daddy went for a walk. When they got to the soup kitchen, they stared in horror for a few moments, then turned into a slug and crawled away. Adarsh saw the whole thing, but was not surprised — Big Daddy weighs 300 pounds, and it was a hot day."];


const customname = document.querySelector('#customname');
const us = document.querySelector('#us');
const uk = document.querySelector('#uk');
const generate =document.querySelector('.randomize');
const story =document.querySelector('.story');
const section =document.querySelector('.section');



generate.addEventListener("click", clickstory);

function clickstory(){
    
        
        
        if(i === strset.length-1)
        {
        i=0;
        }
         else {

                if(customname !== '')
                {   let updatedstr= strset[i].toString();
                  updatedstr =  updatedstr.replace("Adarsh" , customname.value);
                    story.textContent = updatedstr;
                    section.appendChild(story);

                }

                else{
                        story.textContent = strset[i];
                        section.appendChild(story);

                }
         }
           

         uk.addEventListener('click', () =>{
                let updatedstr= strset[i].toString();
                updatedstr = updatedstr.replace("fahrenheit", "celsius");
                updatedstr = updatedstr.replace("94", "34.44");
                updatedstr = updatedstr.replace("300", "136.07");
                updatedstr = updatedstr.replace("pounds", "kilogram");
                story.textContent = updatedstr;
                    section.appendChild(story);
        
         })
  

         
         i=i+1;
        
         
};

us.addEventListener('click', () =>{

})
