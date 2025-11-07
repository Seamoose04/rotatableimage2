let Deg2Rad = 0.0174533;
let Rad2Deg = 57.2958;

class Vector2 {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    rotated(angle: number): Vector2 {
        let newVec = Vector2.zero;
        newVec.x = this.x * Math.cos(angle * Deg2Rad) - this.y * Math.sin(angle * Deg2Rad);
        newVec.y = this.x * Math.sin(angle * Deg2Rad) + this.y * Math.cos(angle * Deg2Rad);
        return newVec;
    }

    rotate(angle: number) {
        let oldX = this.x;
        let oldY = this.y;
        this.x = oldX * Math.cos(angle * Deg2Rad) - oldY * Math.sin(angle * Deg2Rad);
        this.y = oldX * Math.sin(angle * Deg2Rad) + oldY * Math.cos(angle * Deg2Rad);
    }

    copy(): Vector2 {
        return new Vector2(this.x, this.y);
    }

    static distance2(a: Vector2, b: Vector2) {
        let x = b.x - a.x;
        let y = b.y - a.y;
        return x * x + y * y;
    }

    static get zero(): Vector2 {
        return new Vector2(0, 0);
    }

    toString(): String {
        return `x: ${this.x}, y: ${this.y}`;
    }
}