export class Restaurant {
  public rating: number[] = [];
  public waitTime: number[] = [];
  constructor(public name: string, public cuisine: string, public address: string, public cost: string) {
  }
}
