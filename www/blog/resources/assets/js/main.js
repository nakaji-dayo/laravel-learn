console.log('heyhey');

(() => {
  const x = 'hoge';
  const obj = {x}
  console.log({...x, k: 'v'})
})()
