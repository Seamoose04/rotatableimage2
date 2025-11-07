/**
* Custom blocks
*/

//% color=#0080ff icon="↻"
namespace Rotatable {
    //% block="convert an $img"
    export function createRotatableImage(img: Image): RotatableImage {
        return new RotatableImage(img);
    }

    //% block="rotate $rot_img by $degrees"
    export function rotateImage(rot_img: RotatableImage, degrees: number): void {
        rot_img.rotate(degrees);
    }
}