import { pictureToString } from './passwordToString';
import { dataKrakenTakes } from '../../../../components/login.register/backend/dataKraken';
import '../pictureMagic.css';
export const fileUpload = async (
    file: File,
    picturePath: (base64: string) => void,
    imgRef: React.RefObject<HTMLImageElement>,
) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/bmp'];

    if (file === undefined) {
        return;
    } else if (!validTypes.includes(file.type)) {
        alert('Only image files are allowed.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const base64 = e.target?.result;
        picturePath(base64 as string);

        imgRef.current?.classList.add('scale');
        setTimeout(() => {
            imgRef.current!.src = base64 as string;
        }, 1000);
        setTimeout(() => {
            imgRef.current?.classList.remove('scale');
        }, 2000);
    };

    reader.readAsDataURL(file);
};

export const pictureMagic = async (file: File, base64: string) => {
    const id = base64.length.toString();
    const data = {
        key: id,
        catch: base64,
        value: '',
        type: 'password',
    };

    try {
        const result = await pictureToString(file);
        console.log(result);
        data.value = result as string;
    } catch (error) {
        console.error(error);
    } finally {
        dataKrakenTakes({ col: 'generated_passwords' });
    }
    return data;
};
