export const isImage = (url: string): boolean => {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}
