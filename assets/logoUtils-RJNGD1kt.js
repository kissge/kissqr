function a(e){return Object.fromEntries(Object.entries(e).map(([n,t])=>[n,t.replace(/^\n|\n$/g,"").split(`
`).map(r=>[...r].map(p=>"・／黒".indexOf(p)))]))}export{a as l};
