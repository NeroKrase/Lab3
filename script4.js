var arr = [
{value: 100, type: 'USD'},
{value: 215, type: 'EUR'},
{value: 7, type: 'EUR'},
{value: 99, type: 'USD'},
{value: 354, type: 'USD'},
{value: 12, type: 'EUR'},
{value: 77, type: 'USD'},
];

firstArr = arr.filter(x => x.value < 100 && x.type === 'USD');
secondArr = arr.filter(x => x.type === 'EUR');
console.log(`Sum: ${firstArr.reduce(x => x.value + x.value)}`);
console.log(secondArr.map(x => ({value: x.value * 2, type: x.type})));
