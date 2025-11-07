/**
* Provides the ability to rotate an image by any amount
*/
//% color=#0080ff icon="↻"block="Rotatable Image"
//% groups=["others"]
namespace Rotatable {
    //% blockId=rotatable_image_create_rotatable block="make $img rotatable"
    //% blockSetVariable=rotatableImg
    //% img.shadow=screen_image_picker
    //% group="others"
    export function createRotatableImage(img: Image): RotatableImage {
        return new RotatableImage(img);
    }

    //% blockId=rotatable_image_rotate_image block="rotate $rot_img by $degrees"
    //% rot_img.shadow=variables_get
    //% rot_img.defl=rotatableImg
    //% degrees.defl=0
    //% group="others"
    export function rotateImage(rot_img: RotatableImage, degrees: number): void {
        rot_img.rotate(degrees);
    }
}