function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${methodName} with arguments: `, args);
        return originalMethod.apply(this, args);
    };
}

class Calculator {
    @Log
    add(a: number, b: number): number {
        return a + b;
    }
}

const calculator = new Calculator();
calculator.add(5, 3); // This will log the method call and its arguments
