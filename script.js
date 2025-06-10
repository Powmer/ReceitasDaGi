async function carregarReceitas() {
  const response = await fetch('receitas/receitas.json');
  const receitas = await response.json();


  receitas.sort((a, b) => new Date(b.data) - new Date(a.data));


  const nova = receitas[0];
  const novaContainer = document.querySelector('.nova-receita-container');
  novaContainer.innerHTML = criarCardReceita(nova);

  
  const principaisContainer = document.querySelector('.grid-receitas');
  const principais = receitas.sort(() => 0.5 - Math.random()).slice(0, 6); 
  principais.forEach(receita => {
    principaisContainer.innerHTML += criarCardReceita(receita);
  });
}

function criarCardReceita(receita) {
  return `
    <div class="receita-card">
      <img src="receitas/${receita.image}" alt="${receita.title}" />
      <h3>${receita.title}</h3>
      <p>${receita.description}</p>
    </div>
  `;
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('show');
}

carregarReceitas();
