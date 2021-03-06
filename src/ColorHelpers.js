import chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  };
  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  for (let color of starterPalette.colors) {
    let scale = getScale(color.color, 10).reverse();
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)")
      });
    }
  }
  return newPalette;
}
function getRange(hexColor) {
  const end = "#fff";
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
    end
  ];
}

function getScale(hexColor, numberOfColors) {
  return chroma
    .scale(getRange(hexColor))
    .mode("lab")
    .colors(numberOfColors);
}

function findPalette (arr, id) {
    const foundPalette =  arr.filter(palette =>  palette.id === id)
    return foundPalette[0];
  }

function generateSingleColorPalette (colors, color) {
  let shadeArr = [];
  for (const hue in colors) {
    const filteredArr = colors[hue].filter(hueColor => hueColor.id === color);
    shadeArr.push(filteredArr[0]);
  }
  return shadeArr.slice(1);
}

export { generatePalette, findPalette, generateSingleColorPalette };