/*
Un employé de théatre voudrait afficher la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"

Au final la liste devra ressembler à : 
1-1 
1-2
1-3
.
.
.
26-98
26-99
26-100

Écrire une fonction qui retourne un tableau comprenant tous les numéros des sièges.
*/

// We can pass column and seats in parameters of the function but since they are defined in the rules of the exercise it doesn't really make sense.
const seatsInTheater = () => {
  const columns = 26
  const seatsPerColumn = 100
  const result = []
  // Loop through the columns
  for(let i = 1; i < columns+1; i++){
    let tempColumn = i.toLocaleString()
    // Loop through the seatsPerColumns
    for(let j = 1; j < seatsPerColumn+1; j++){
      let tempSeats = j.toLocaleString()
      // Push iteration in the result array
      result.push(`${tempColumn} - ${tempSeats}`)
    }
  }
  return result
}


console.log(seatsInTheater())