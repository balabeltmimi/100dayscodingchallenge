let dis3 = document.querySelector("#display3")
function getSomelovefood({type, brands, FlavourName: [first,second,third,fourth,fifth,,,sixth]}) {
  return `
${type} that I love (Top 5) from ${brands}

Flavour: 
	- ${first}
	- ${second}
	- ${third}
	- ${fourth}
	- ${fifth}

Most unexpected flavor from my opinion: "${sixth}"
`;
}

let mylovefood = {
  type: "Dessert (Ice-cream)",
  brands: "Guss Damn Good",
  FlavourName: ["Maine Rocky Coast", "Cookie Sauce Froyo", "Tokyo Mist", "Serendipity", "Falling in Fall", "Matter Moment", "Equality", "Festival Sunset", "The Will to Win" ]
};

console.log(getSomelovefood(mylovefood));