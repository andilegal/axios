// fetch('pessoas.json')
// .then(response => {
//   return response.json()
// }).then(responseJSON =>{
//   loadPersons(responseJSON)
// })
axios('pessoas.json')
  .then(response =>{
    loadPersons(response.data)
  })

function loadPersons(persons) {
const $section = document.querySelector("section")
persons.sort((a,b) => {
  console.log(a,b)
 return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
})
persons.map(person => {
    let infoPerson = 
      `
      <h3>Each Colaboration:</h3>
      <p>Name: ${person.nome}</p>
      <p>Email: ${person.email}</p>
      <p>Salary : ${person.salario}</p>
      <p>State: ${person.estado}</p>
      <p>Company: ${person.empresa}</p>
      <p>Age: ${person.idade}</p>
      <p>Sex: ${person.sexo}</p>
      <p>CPF: ${person.cpf}</p>
      `
      $section.innerHTML += (infoPerson)
    
  })

}



// {
//   "nome": "Miguel",
//   "email": "miguel@email.com.br",
//   "salario": 27211,
//   "estado": "MG",
//   "empresa": "Facebook",
//   "idade": 34,
//   "sexo": "",
//   "cpf": "362.418.524-18"
// },