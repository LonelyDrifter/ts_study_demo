type SumValue = { money: number, count: (value: number) => void };
let sumValue:  SumValue= {
  money: 200,
  count(value: number): void {
    this.money += value;
  }
};

let handleCount: { name: string, sumValue: SumValue, friends: string[] } = {
  name: 'Henry',
  sumValue: sumValue,
  friends: ['bucky', 'elyes']
};

handleCount.sumValue.count(500);
console.log(handleCount);