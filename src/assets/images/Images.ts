const IMAGES = {
    IMG_6398: new URL('./IMG_6398.jpg', import.meta.url).href,
    IMG_6399: new URL('./IMG_6399.jpg', import.meta.url).href,
    IMG_6437: new URL('./IMG_6437.jpg', import.meta.url).href,
    IMG_6452: new URL('./IMG_6452.jpg', import.meta.url).href,
    IMG_6454: new URL('./IMG_6454.jpg', import.meta.url).href,
    IMG_8325: new URL('./IMG_8325.jpg', import.meta.url).href,
    IMG_8332: new URL('./IMG_8332.jpg', import.meta.url).href,
    IMG_8334: new URL('./IMG_8334.jpg', import.meta.url).href,
    IMG_8345: new URL('./IMG_8345.jpg', import.meta.url).href,
    IMG_8366: new URL('./IMG_8366.jpg', import.meta.url).href,
    IMG_8370: new URL('./IMG_8370.jpg', import.meta.url).href,
    IMG_8372: new URL('./IMG_8372.jpg', import.meta.url).href,
    IMG_8402: new URL('./IMG_8402.jpg', import.meta.url).href,
    IMG_8418: new URL('./IMG_8418.jpg', import.meta.url).href,
    IMG_8421: new URL('./IMG_8421.jpg', import.meta.url).href,
    IMG_8424: new URL('./IMG_8424.jpg', import.meta.url).href,
    IMG_8770: new URL('./IMG_8770.jpg', import.meta.url).href,
    IMG_8807: new URL('./IMG_8807.jpg', import.meta.url).href,
    IMG_8833: new URL('./IMG_8833.jpg', import.meta.url).href,
    IMG_8848: new URL('./IMG_8848.jpg', import.meta.url).href,
}

export type ImagesKey = keyof typeof IMAGES;

export default IMAGES;