export const transformPx = (px: number, width: number): number => {

    return px / 16 * 1.02 * width / 100

}