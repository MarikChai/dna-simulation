// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
const pAequorFactory = (num, array) => {
  return {
    specimenNum: num,
    dna: array,
    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      const currentBase = this.dna[randomIndex];
      let newBase = returnRandBase();
      while (newBase === currentBase) {
        newBase = returnRandBase();
      }
      this.dna[randomIndex] = newBase;
      return this.dna;
    },
    compareDNA(other) {
      let matchCount = 0;
      for (let i = 0; i < this.dna.length; i++)
        if (this.dna[i] === other.dna[i]) {
          matchCount++;
        }
      const percentage = (matchCount / this.dna.length) * 100;
      console.log(
        `specimen #${this.specimenNum} and specimen #${other.specimenNum} have ${percentage}% DNA in common`
      );
    },
    willLikelySurvive() {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++)
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          count++;
        }
      return (count / this.dna.length) * 100 >= 60;
    },
  };
};
const survivors = [];
let id = 1;
while (survivors.length < 30) {
  const specimen = pAequorFactory(id, mockUpStrand());
  if (specimen.willLikelySurvive()) {
    survivors.push(specimen);
  }
  id++;
}
console.log('--- DNA Simulation Report ---\n');

console.log(`Total survivors: ${survivors.length}\n`);

// Show first 3 organism
for (let i = 0; i < 3; i++) {
  console.log(`Specimen #${survivors[i].specimenNum}`);
  console.log(`DNA: ${survivors[i].dna.join(' ')}`);
  console.log(`Survives: ${survivors[i].willLikelySurvive()}`);
  console.log('-------------------------');
}

// comparison 1 and 2
console.log('\nDNA Comparison:');
survivors[0].compareDNA(survivors[1]);