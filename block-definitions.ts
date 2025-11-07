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
    //% weight=100
    export function createRotatableImage(img: Image): RotatableImage {
        return new RotatableImage(img);
    }

    //% blockId=rotatable_image_rotate_image block="rotate $rot_img to $degrees degrees"
    //% rot_img.shadow=variables_get
    //% rot_img.defl=rotatableImg
    //% degrees.defl=0
    //% group="others"
    //% weight=90
    export function rotateImage(rot_img: RotatableImage, degrees: number): void {
        rot_img.rotate(degrees);
    }

    //% blockId=rotatable_image_get_image block="get image from $rot_img"
    //% rot_img.shadow=variables_get
    //% rot_img.defl=rotatableImg
    //% group="others"
    //% weight=80
    export function getImage(rot_img: RotatableImage): Image {
        return rot_img.getImage()
    }
}