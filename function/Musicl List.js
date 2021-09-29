function playlist()
{
    var songs = {
        name : ["<i>Human<i>","<i>Monster<i>","<i>Wind of change<i>","<i>Big Shark<i>","<i>Inja Irane<i>","<i>  Panda<i>","<i>Natural<i>"],
        artist : ["<i>rag'n'bone<i>","<i>skillet<i>","<i>Scorpions<i>","<i>Russ Millions<i>","<i>Bahram<i>","<i>Desiinger<i>","<i>Imagin Dragons<i>"],
        time :["<i>3:16<i>","<i>2:24<i>","<i>5:14<i>","<i>3:16<i>","<i>3:13<i>","<i>4:08<i>","<i>3:06<i>"],
    };
    document.write("<p><strong>Song<strong>               <strong>Artist<strong>                <strong>track length<strong><p> ");
    var index = 0;
    while (index < songs.name.length){
        
        document.write(index+1 +")\t"+ songs.name[index] +"            " +songs.artist[index] + "              "+songs.time[index]+"<br>");
        index-=-1;
    }
}

playlist();
