function Cinema(title,genre,Director,second_star,star,time,rate){
     
    this.title=title;
    this.genre=genre;
    this.star=star;
    this.second_star=second_star;
    this.time=time;
    this.rate=rate;
    this.Director=Director;
    this.view=function (){
        document.write("-------------------------------------------------");
        document.write("<p><strong>Title :<strong>"+ this.title +"<p>");
        document.write("<p><strong>Director :<strong>"+ this.Director +"<p>");
        document.write("<p><strong>Stars :<strong>"+ this.star + " and "+this.second_star +"<p>");
        document.write("<p><strong>Genre :<strong>"+ this.genre +"<p>");
        document.write("<p><strong>Time :<strong>"+ this.time +"  (minute)<p>");
        document.write("<p><strong>Rate  :<strong>"+ this.rate  +" (imdb)<p>");
    }
}
function movies(e){  

    var Shawshank_Redemption= new Cinema("<strong>The Shawshank Redemption<strong>","<strong>Drama<strong>","<strong>Frank Darabont<strong>","<strong>Morgan Freeman<strong>","<strong>Tim Robbins<strong>","<strong>142<strong>","<strong>9.3<strong>");
    var Godfather = new Cinema("<strong>The Godfather<strong>","<strong>Crime, Drama<strong>","<strong>Francis Ford Coppola<strong>","<strong>Al Pacino<strong>","<strong>Marlon Brando<strong>","<strong>175<strong>","<strong>9.2<strong>");
    var Dark_Knight = new Cinema("<strong>The Dark Knight<strong>","<strong>Action, Crime, Drama<strong>","<strong>Christopher Nolan<strong>","<strong>Heath Ledger,<strong>","<strong>Christian Bale<strong>","<strong>152<strong>","<strong>9.0<strong>");
    var Godfather2  = new Cinema("<strong> The Godfather (II) <strong>","<strong>Crime, Drama<strong>","<strong>Francis Ford Coppola<strong>","<strong>Robert De Niro<strong>","<strong>Al Pacino<strong>","<strong>202<strong>","<strong>9.0<strong>");
    var twelve_angry = new Cinema("<strong>12 Angry Men<strong>","<strong>Crime, Drama<strong>","<strong>Sidney Lumet<strong>","<strong>Henry Fonda<strong>","<strong>Lee J. Cobb<strong>","<strong>96<strong>","<strong>9.0<strong>");
    var Pulp_Fiction = new Cinema("<strong>Pulp Fiction<strong>","<strong>Crime, Drama<strong>","<strong>Quentin Tarantino<strong>","<strong>John Travolta<strong>","<strong>Uma Thurman<strong>","<strong>154<strong>","<strong>8.9<strong>");
    var Schindlers_List = new Cinema("<strong>Schindlers List<strong>","<strong>Biography, Drama, History<strong>","<strong>Steven Spielberg<strong>","<strong>Ralph Fiennes<strong>","<strong>Liam Neeson,<strong>","<strong>195<strong>","<strong>8.9<strong>");
    Shawshank_Redemption.view();
    Godfather.view();
    Dark_Knight.view();
    Godfather2.view();
    twelve_angry.view();
    Pulp_Fiction.view();
    Schindlers_List.view();
}
movies();