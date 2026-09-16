interface Point {
    readonly x: number;
    readonly y: number;
}

const point: Point = { x: 10, y: 20 };
console.log("Point X : " + point.x);
console.log("Point Y : " + point.y);

// point.x = 30; // Error: Cannot assign to 'x' because it is a read-only property.

// ReadOnly Array
interface Data {
    readonly items: number[];
}

const data: Data = { items: [1, 2, 3] };
console.log("Items : " + data.items);
// data.items.push(4); // Error: Cannot assign to 'items' because it is a read-only property.