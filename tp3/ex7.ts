function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(1));     
console.log(identity<string>("Hello"));

function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(getFirst<number>([10, 20, 30]));
console.log(getFirst<string>(["a", "b", "c"])); 

class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(index: number): void {
    this.items.splice(index, 1);
  }

  getAll(): T[] {
    return this.items;
  }
}

const exemple_Repo = new Repository<number>();
exemple_Repo.add(1);
exemple_Repo.add(2);
console.log(exemple_Repo.getAll());

interface ApiResponse<T> {
  data: T;
  error?: string;
}

const example: ApiResponse<string> = { data: "exemple" };
