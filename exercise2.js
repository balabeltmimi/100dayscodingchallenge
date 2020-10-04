let dis3 = document.querySelector("#display3")
function getSomelovefood({type, brands, flavour: [first,second,third,fourth,fifth,,,,sixth,...restofflavour]}) {
  return `
${type} that I love (Top 5) from ${brands}

Flavour: 
	- ${first}
	- ${second}
	- ${third}
	- ${fourth}
	- ${fifth}

Most unexpected flavor from my opinion: "${sixth}"

The other flavour which I've tasted: ${restofflavour}

`;
}

let mylovefood = {
  type: "Dessert (Ice-cream)",
  brands: "Guss Damn Good",
  flavour: ["Maine Rocky Coast", "Cookie Sauce Froyo", "Tokyo Mist", "Serendipity", "Falling in Fall", 
  "Matter Moment", "Equality", "Festival Sunset", "The Will to Win"," Don't Give Up #18", " B-CUBE", 
  " Why can't coffee be white", " Make a Toast", " Pleasant Journey", " Here's damn good chocolate", 
  " This too shall pass", " Wet 'n Wild", " Made my Day"]
};

console.log(getSomelovefood(mylovefood));