import { ListObjectsCommand } from "@aws-sdk/client-s3";
import s3Client from "../config/aws/s3";

const s3BucketName = process.env.REACT_APP_AWS_S3_BUCKET_NAME;

export const getAlbums = async () => {
    try {
        const data = await s3Client.send(
            new ListObjectsCommand({
                Delimiter: "/",
                Bucket: s3BucketName
            })
        );

        if (!data || !data.CommonPrefixes) return [];

        const albumNames = data.CommonPrefixes.map(album => {
            const albumPrefix = album.Prefix;
            return albumPrefix ? decodeURIComponent((albumPrefix).replace('/', '')) : ''
        });

        const nonEmptyAlbumNames = albumNames.filter(albumName => isValidAlbumName(albumName));

        return nonEmptyAlbumNames;
    } catch (error) {
        console.error(error);
    }
};

export const getImages = async (albumName: string, limit?: number) => {
    albumName = albumName.trim();

    if (!isValidAlbumName(albumName)) return null;

    try {
        const data = await s3Client.send(
            new ListObjectsCommand({
                Prefix: albumName,
                Bucket: s3BucketName,
                MaxKeys: limit
            })
        );

        if (!data || !data.Contents) return [];

        const href = "https://s3." + process.env.REACT_APP_AWS_REGION + ".amazonaws.com/";
        const bucketUrl = href + s3BucketName + "/";
        const photos = data.Contents.map(photo => {
            const photoKey = photo.Key || '';
            const photoUrl = bucketUrl + encodeURIComponent(photoKey);
            return photoUrl;
        });

        return photos
    } catch (error) {
        console.error(error);
        return null;
    }
};

const isValidAlbumName = (albumName: string) => {
    return albumName.length > 0 && !albumName.includes('logs');
}
