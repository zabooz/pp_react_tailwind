import { FormattedMessage } from 'react-intl';

function PictureTextContent() {
  return (
    <p className="font-normal text-center text-gray-700 dark:text-gray-400 mb-3 ">
      <FormattedMessage
        id="passwordGenerating.pictureMagic.pictureTextContent"
        defaultMessage="Lade einfach ein Foto hoch, und unsere App verwandelt es in ein sicheres Passwort"
      />
    </p>
  );
}

export default PictureTextContent;
