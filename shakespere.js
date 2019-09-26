
const convert = require('xml-js');
fs = require('fs');
 function shakespereIpsum(char,lineNum){
    //Parses the XML file
    
    fs.readFile('./shakespere.xml', function(err,data){
        const parsedPlay = convert.xml2js(data, {compact:true, spaces:4});
        const acts = parsedPlay.play.act;
        let scenes = [];
        let speeches = [];
        let lines = [];

      //Gets the path for speeches
          for(let i = 0; i<acts.length;i++)
          for(let j = 0; j < acts[i].scene.length;j++){ 
            scenes.push(acts[i].scene[j]);
          }

          for(let i = 0; i < scenes.length;i++)
            for(let j = 0; j < scenes[i].speech.length;j++){ 
              speeches.push(scenes[i].speech[j]);
          }
    //Check to see if the character names matches the name that was passed

          for(let i = 0; i < speeches.length; i++){
           let name = speeches[i].speaker._attributes.long;
    
           if (name === char){
             if(speeches[i].line._text)
              lines.push(speeches[i].line._text);
            }
          }
    //prints a random line that the caracter said in the play 
    for(let i = 1; i <= lineNum; ++i){
      console.log(lines[Math.floor(Math.random()*lines.length)]);   
    }
    
    });
}

shakespereIpsum("Ophelia",20);


     //parseXML
      //find lines spoken by char
     //print x num of lines

    
 