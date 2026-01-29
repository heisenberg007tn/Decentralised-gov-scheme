const schemes = [
  {
    title: "PM Awas Yojana",
    category: "Housing",
    year: 2023,
    source: "Public Domain",
    cid: "https://ipfs.io/ipfs/QmExampleCID1"
  },
  {
    title: "Tamil Nadu Free Laptop Scheme",
    category: "Education",
    year: 2022,
    source: "Public Domain",
    cid: "https://ipfs.io/ipfs/QmExampleCID2"
  }
];

const container = document.getElementById("schemes");

function display(data) {
  container.innerHTML = "";
  data.forEach(s => {
    container.innerHTML += `
      <div class="card">
        <h3>${s.title}</h3>
        <p>Category: ${s.category}</p>
        <p>Year: ${s.year}</p>
        <p>Stored on: Decentralized Network (IPFS)</p>
        <button onclick="window.open('${s.cid}')">View PDF</button>
      </div>
    `;
  });
}

function searchScheme() {
  const value = document.getElementById("search").value.toLowerCase();
  const filtered = schemes.filter(s =>
    s.title.toLowerCase().includes(value)
  );
  display(filtered);
}

display(schemes);