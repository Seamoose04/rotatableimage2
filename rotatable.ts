class RotatableImage {
    originalImg: Image
    currentImg: Image
    angle: number
    maxBoundingSize: Vector2
    pixels: number[][]
    constructor(img: Image) {
        this.originalImg = img;
        let maxSize = Math.sqrt(img.width * img.width + img.height * img.height)
        this.maxBoundingSize = new Vector2(maxSize, maxSize);
        this.currentImg = image.create(this.maxBoundingSize.x, this.maxBoundingSize.y);

        this.pixels = [];
        for (let col = 0; col < this.originalImg.width; col++) {
            let column: number[] = [];
            for (let row = 0; row < this.originalImg.height; row++) {
                column.push(this.originalImg.getPixel(col, row));
            }
            this.pixels.push(column);
        }
    }
    rotate(angle: number) {
        let corners: Vector2[] = [];
        corners.push(new Vector2(-this.originalImg.width / 2, -this.originalImg.height / 2).rotated(angle));
        corners.push(new Vector2(-this.originalImg.width / 2, this.originalImg.height / 2).rotated(angle));
        corners.push(new Vector2(this.originalImg.width / 2, this.originalImg.height / 2).rotated(angle));
        corners.push(new Vector2(this.originalImg.width / 2, -this.originalImg.height / 2).rotated(angle));

        let minX = Infinity;
        let maxX = -Infinity;
        let minY = Infinity;
        let maxY = -Infinity;
        for (let corner of corners) {
            if (corner.x < minX) {
                minX = corner.x;
            }
            if (corner.x > maxX) {
                maxX = corner.x;
            }
            if (corner.y < minY) {
                minY = corner.y;
            }
            if (corner.y > maxY) {
                maxY = corner.y;
            }
        }

        let currBoundingSize = new Vector2(maxX - minX, maxY - minY);

        let reverseRotatedPosition: Vector2 = Vector2.zero;
        this.currentImg.fill(0);
        for (let col = 0; col < currBoundingSize.x; col++) { // +1?
            for (let row = 0; row < currBoundingSize.y; row++) { // +1?
                reverseRotatedPosition.x = col - this.originalImg.width / 2;
                reverseRotatedPosition.y = row - this.originalImg.height / 2;
                reverseRotatedPosition.rotate(angle);
                reverseRotatedPosition.x = Math.round(reverseRotatedPosition.x + this.originalImg.width / 2);
                reverseRotatedPosition.y = Math.round(reverseRotatedPosition.y + this.originalImg.height / 2);
                if (0 <= reverseRotatedPosition.x && reverseRotatedPosition.x < this.originalImg.width && 0 <= reverseRotatedPosition.y && reverseRotatedPosition.y < this.originalImg.height) {
                    this.currentImg.setPixel(col, row, this.pixels[reverseRotatedPosition.x][reverseRotatedPosition.y]);
                }
            }
        }
    }
    getImage(): Image {
        return this.currentImg;
    }
}
