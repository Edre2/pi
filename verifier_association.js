association_ms = [[""], ["thé","toit","dé"], ["âne","nez"], ["amis","mat","semer"], ["rat "], ["lion"], ["chat"], ["quai"], ["fou"], ["épée"], ["danser","tasse"], ["tante","tata"], ["tonneau "], ["dame"], ["taureau"], ["talon"], ["Tuches"], ["taguer"], ["étoffe","dauphin "], ["taper","tapis"], ["noce"], ["Nathan"], ["naine"], ["nem"], ["noir"], ["noël"], ["neige"], ["Naka"], ["naïf","navet","navire"], ["nappe"], ["masser"], ["maths "], ["mine"], ["maman"], ["sous-marin "], ["malle"], ["manger","magie"], ["magasin"], ["muffin"], ["myope"], ["rasoir"], ["route"], ["ruine"], ["rame"], ["rire"], ["râler "], ["ruche "], ["raquette "], ["ravin "], ["robot"], ["lasso"], ["latte"], ["lune"], ["lama"], ["lire"], ["lilas","soleil "], ["luge"], ["lac"], ["lave"], ["lapin"], ["chasser"], ["château"], ["chaîne "], ["chameau"], ["char"], ["châle"], ["juge"], ["échec"], ["cheveu"], ["jeep","jupe","chapeau"], ["gaz","caisse"], ["gâteau"," cadeau"], ["gainer","canon"], ["Camus","camion"], ["craie"], ["gueuler","clou","colle"], ["cage "], ["caca"], ["café"], ["cape"], ["vase","fusée "], ["fête"], ["vannes "], ["affamé","fumé "], ["phare"], ["vallée","vélo","valet"], ["vache"], ["phoque"], ["fève"], ["vampire"], ["bus"], ["patte","batte"], ["panneau"], ["puma"], ["purée "], ["palais", "pelle"], ["poncho","page"], ["paquet","pâque "], ["paver"], ["bébé"]]


document.onkeyup = function(e) {
    if (e.which == 13) {
      verifier_association();
    }
  };

function verifier_association()
{
    let nombre = document.getElementById("nombre").innerHTML;
    let mot = document.getElementById("mot").value;


    let possible = association_ms[nombre];

    /*console.log(nombre, mot, possible);*/


    let correct = false;

    for (let i = 0; i < possible.length; i++)
    {
      if (possible[i] == mot)
      {
         correct = true;
      }
    }

    if (correct)
    {
      document.getElementById("correction").innerHTML = "C'est correct";
    }
    else
    {
      document.getElementById("correction").innerHTML = "C'est faux !<br />";
      document.getElementById("correction").innerHTML += nombre.toString() + " est associé à : ";
      for (let i = 0; i < possible.length; i++)
      {
        document.getElementById("correction").innerHTML += possible[i];
        if (i != possible.length - 1)
        {
          document.getElementById("correction").innerHTML += ", ";
        }
      }
    }

    document.getElementById("mot").value = "";
    document.getElementById("nombre").innerHTML =Math.floor( (Math.random() * 99) + 1 );
}

function random_number()
{
  document.getElementById("nombre").innerHTML =Math.floor( (Math.random() * 99) + 1 );
}